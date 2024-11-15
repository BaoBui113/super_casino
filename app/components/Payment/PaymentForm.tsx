"use client";
import Input from "@/app/components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import * as yup from "yup";

import { listAmount, listGames } from "@/app/constant";

import { handleDeposit, handleWithDraw } from "@/app/api/payment";
import { useAuth } from "@/app/context/AuthContext";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import ButtonPayment from "./ButtonPayment";
const list_guides = [
  {
    title: "슬롯 - 롤링200%, 첫충전 10%, 매일충전 5% 자동 지급",
  },
  {
    title: "카지노 - 롤링 100%",
    subtitle: "카지노 이용 시 당일 페이백 이벤트 참여 불가",
  },
  {
    title: "받지않음 - 포인트 미지급 롤링 100%",
  },
];
const GuidDeposit = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) => {
  return (
    <div className="flex gap-1 items-start">
      <div className="w-[9px] h-[9px] border border-solid border-[#777777] mt-1" />
      <div className="flex flex-col gap-2">
        <span className="font-medium text-sm leading-5 text-[#111111]">
          {title}
        </span>
        {subtitle && (
          <span className="font-normal text-xs leading-4 text-[#444444]">
            {subtitle}
          </span>
        )}
      </div>
    </div>
  );
};
const schema = yup.object().shape({
  amount: yup
    .number()
    .required("Amount is required")
    .min(50000, "Amount must be at least 50,000")
    .max(10000000, "Amount must be at most 10,000,000")
    .test(
      "is-multiple-of-10000",
      "Amount must be a multiple of 10,000",
      (value) => {
        return value % 10000 === 0;
      }
    ),
  deposit_name: yup.string().required("Deposit name is required"),
  game: yup.string().required("Game is required"),
  comment: yup.string().default(""),
});

export type FormDeposit = yup.InferType<typeof schema>;

export default function PaymentForm({
  status,
}: {
  status: "deposit" | "withdraw";
}) {
  const router = useRouter();
  const { user } = useAuth();
  const {
    control,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      amount: 50000,
      deposit_name: "",
      game: undefined,
      comment: "",
    },
  });
  const handleSelectPayment = (value: number) => {
    setValue("amount", value);
  };
  const handleSetValueInit = () => {
    reset({
      amount: 50000,
      deposit_name: "",
      game: undefined,
      comment: "",
    });
  };
  const onSubmit = async (data: FormDeposit) => {
    if (!user) {
      console.error("User is not authenticated");
      router.push("/");
      return;
    }

    const customData = {
      amount: data.amount,
      deposit_name: data.deposit_name,
      game_id: data.game,
      username: user.MEM_LID,
      comment: data.comment ?? null,
    };
    if (status === "deposit") {
      await handleDeposit(customData)
        .then((res) => {
          if (res.status === "0") {
            toast.success(res.message);
            handleSetValueInit();
          } else {
            toast.error(res.message);
            handleSetValueInit();
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong");
        });
    } else {
      await handleWithDraw(customData)
        .then((res) => {
          if (res.status === "0") {
            toast.success(res.message);
            handleSetValueInit();
          } else {
            toast.error(res.message);
          }
        })
        .catch((err) => {
          console.log(err);
          toast.error("Something went wrong");
        });
    }
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-20">
        <Controller
          name="amount"
          control={control}
          render={({ field }) => (
            <>
              <div>
                <div className="max-w-[300px] flex gap-3 items-end">
                  <Input
                    classNameInput="bg-white focus:bg-white text-black focus:text-black border-none"
                    {...field}
                    value={field.value?.toString()}
                    placeholder="금액을 입력하세요"
                    title="충전금액"
                  />
                  <ButtonPayment classNames="px-2 py-1">정정</ButtonPayment>
                </div>
                {errors.amount && (
                  <p className="text-red-500 text-xs mt-2">
                    {errors.amount?.message}
                  </p>
                )}
                <div className="flex flex-wrap gap-[30px] items-center mt-10">
                  {listAmount.map((amt, inx) => {
                    return (
                      <p
                        onClick={() => handleSelectPayment(amt.value)}
                        className="text-white font-normal text-xs leading-4 px-5 py-2 cursor-pointer"
                        key={inx}
                      >
                        {amt.label}
                      </p>
                    );
                  })}
                </div>
              </div>
            </>
          )}
        />
      </div>
      <div className="mb-20">
        <Controller
          name="game"
          control={control}
          render={({ field }) => (
            <>
              <p className="mb-[10px]">신청게임</p>
              <div className="max-w-[300px] flex gap-3 items-end">
                <select
                  className="text-black bg-white border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  {...field}
                  value={field.value || ""}
                  onChange={(e) => field.onChange(e.target.value)}
                >
                  <option value="" disabled>
                    확장게임 선택
                  </option>
                  {listGames.map((game) => (
                    <option key={game.key} value={game.key}>
                      {game.label}
                    </option>
                  ))}
                </select>
              </div>
              {errors.game && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.game?.message}
                </p>
              )}
            </>
          )}
        />
      </div>
      <div className="mb-20">
        <Controller
          name="deposit_name"
          control={control}
          render={({ field }) => (
            <>
              <div className="max-w-[300px] flex gap-3 items-end">
                <Input
                  classNameInput="bg-white focus:bg-white text-black focus:text-black border-none "
                  {...field}
                  placeholder="성명을 입력하세요."
                  title="입금자명"
                />
                <ButtonPayment>정정</ButtonPayment>
              </div>
              {errors.deposit_name && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.deposit_name?.message}
                </p>
              )}
            </>
          )}
        />
      </div>
      <div className="mb-12">
        <Controller
          name="comment"
          control={control}
          render={({ field }) => (
            <>
              <p className="mb-[10px]">남기고 싶은말</p>
              <div className="max-w-[300px]">
                <textarea
                  className="bg-white focus:bg-white text-black focus:text-black border-none w-full p-2 "
                  {...field}
                  placeholder="남기고 싶은말"
                />
              </div>
              {errors.comment && (
                <p className="text-red-500 text-xs mt-2">
                  {errors.comment?.message}
                </p>
              )}
            </>
          )}
        />
      </div>
      <div className="mb-7 w-full">
        <p className="mb-[10px]">포인트 선택</p>
        <div className="bg-white py-5 px-1 flex flex-col gap-2">
          {list_guides.map((guid, inx) => {
            return (
              <GuidDeposit
                key={inx}
                title={guid.title}
                subtitle={guid.subtitle}
              />
            );
          })}
        </div>
      </div>
      <ButtonPayment type="submit">신청하기</ButtonPayment>
    </form>
  );
}
