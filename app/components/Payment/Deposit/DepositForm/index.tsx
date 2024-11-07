"use client";
import Input from '@/app/components/Input';
import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import * as yup from 'yup';
import ButtonPayment from '../../ButtonPayment';
import { listAmount, listGames } from '@/app/constant';
import { Select, SelectItem } from '@nextui-org/react';

const schema = yup.object().shape({
    amount: yup
        .number()
        .required("Amount is required")
        .min(50000, "Amount must be at least 50,000")
        .max(10000000, "Amount must be at most 10,000,000")
        .test('is-multiple-of-10000', 'Amount must be a multiple of 10,000', value => {
            return value % 10000 === 0;
        }),
    deposit_name: yup.string().required("Deposit name is required"),
    game: yup.string().required("Game is required")
});

export type FormDeposit = yup.InferType<typeof schema>;

export default function DepositForm() {
    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });


    const onSubmit = (data: FormDeposit) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='mb-20'>
                <Controller
                    name="amount"
                    control={control}
                    render={({ field }) => (
                        <>
                            <div>
                                <div className='max-w-[300px] flex gap-3 items-end'>
                                    <Input
                                        classNameInput='bg-white focus:bg-white text-black focus:text-black border-none'
                                        {...field}

                                        placeholder="금액을 입력하세요"
                                        title='충전금액'

                                    />
                                    <ButtonPayment classNames='px-2 py-1'>정정</ButtonPayment>
                                </div>
                                {errors.amount && <p className="text-red-500 text-xs mt-2">{errors.amount?.message}</p>}
                                <div className='flex flex-wrap gap-[30px] items-center mt-10'>
                                    {
                                        listAmount.map((amt, inx) => {
                                            return (
                                                <p className='text-white font-normal text-xs leading-4 px-5 py-2 cursor-pointer' key={inx}>{amt.label}</p>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </>
                    )}
                />
            </div>
            <div className='mb-20'>
                <Controller
                    name="game"
                    control={control}
                    render={({ field }) => (
                        <>
                            <p className='mb-[10px]'>신청게임</p>
                            <div className='max-w-[300px] flex gap-3 items-end'>
                                <Select
                                    radius='sm'
                                    className='text-black'
                                    {...field}
                                    placeholder="신청게임"

                                >
                                    {listGames.map((game) => (
                                        <SelectItem className='text-black' key={game.value} value={game.value}>
                                            {game.label}
                                        </SelectItem>
                                    ))}
                                </Select>

                            </div>
                            {errors.game && <p className="text-red-500 text-xs mt-2">{errors.game?.message}</p>}
                        </>
                    )}
                />
            </div>
            <div className='mb-12'>
                <Controller
                    name="deposit_name"
                    control={control}
                    render={({ field }) => (
                        <>
                            <div className='max-w-[300px] flex gap-3 items-end'>
                                <Input
                                    classNameInput='bg-white focus:bg-white text-black focus:text-black border-none '
                                    {...field}
                                    placeholder="성명을 입력하세요."
                                    title='입금자명'
                                />
                                <ButtonPayment>정정</ButtonPayment>
                            </div>
                            {errors.deposit_name && <p className="text-red-500 text-xs mt-2">{errors.deposit_name?.message}</p>}
                        </>
                    )}
                />
            </div>
            <ButtonPayment type='submit'>신청하기</ButtonPayment>
        </form>
    );
}