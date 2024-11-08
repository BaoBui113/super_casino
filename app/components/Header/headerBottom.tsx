"use client";
import { useAuth } from '@/app/context/AuthContext'
import { useRouter } from 'next/navigation'
import React from 'react'
const list_navigate = ['게임리스트', '입금신청', '출금신청', '공지사항', '이벤트 안내', '내정보', '게임리스트', '슬롯 게임', '스포츠 게임', '토너먼트']
const list_navigates =
    [
        {
            title: '게임리스트',
            link: '/',
        },
        {
            title: '게임리스트',
            link: '/deposit',
        },
        {
            title: '출금신청',
            link: '/withdraw',
        },
        {
            title: '공지사항',
            link: '/'
        },
        {
            title: '이벤트 안내',
            link: '/'
        },
        {
            title: '내정보',
            link: '/'
        }

    ]
export default function HeaderBottom() {
    const { user, onOpenLogin } = useAuth()
    const router = useRouter()
    const handleNavigate = (nav: { title: string; link: string }) => {
        if (!user) {
            onOpenLogin()
        }
        else {
            router.push(nav.link)
        }
    }
    return (
        <div className='max-w-[900px] mx-auto flex flex-col'>
            <div className='flex gap-8 items-center'>
                {
                    list_navigates.map((nav, index) => {
                        return (
                            <p onClick={() => handleNavigate(nav)} key={index} className='hover:text-[#64DAFE] duration-500 w-[120px] h-[60px] flex justify-center items-center cursor-pointer'>{nav.title}</p>
                        )
                    })
                }
            </div>
        </div>
    )
}
