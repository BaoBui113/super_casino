"use client";
import { useAuth } from "@/app/context/AuthContext";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import React from "react";
import bg_btn_active from "@/app/assets/images/bg_active_btn.png";
import Image from "next/image";
const list_navigates = [
  {
    title: "게임리스트",
    link: "/",
  },
  {
    title: "게임리스트",
    link: "/deposit",
  },
  {
    title: "출금신청",
    link: "/withdraw",
  },
  {
    title: "공지사항",
    link: "/",
  },
  {
    title: "이벤트 안내",
    link: "/",
  },
  {
    title: "내정보",
    link: "/",
  },
];
export default function HeaderBottom() {
  const { user, onOpenLogin } = useAuth();
  const router = useRouter();
  const params = usePathname();
  console.log(params);

  const handleNavigate = (nav: { title: string; link: string }) => {
    if (!user) {
      onOpenLogin();
    } else {
      router.push(nav.link);
    }
  };
  return (
    <div className="max-w-[900px] mx-auto flex flex-col">
      <div className="flex gap-8 items-center">
        {list_navigates.map((nav, index) => {
          return (
            <div key={index} className="relative w-full h-[50px]">
              {params !== nav.link ? (
                <p
                  onClick={() => handleNavigate(nav)}
                  className="hover:text-[#64DAFE] duration-500 w-[120px] h-[60px] flex justify-center items-center cursor-pointer"
                >
                  {nav.title}
                </p>
              ) : (
                <>
                  <Image src={bg_btn_active} alt="bg_btn_active" fill />
                  <p
                    onClick={() => handleNavigate(nav)}
                    className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 hover:text-[#64DAFE] duration-500 w-[120px] h-[60px] flex justify-center items-center cursor-pointer"
                  >
                    {nav.title}
                  </p>
                </>
              )}
              {/* */}
            </div>
          );
        })}
      </div>
    </div>
  );
}
