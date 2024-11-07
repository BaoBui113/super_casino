import Link from 'next/link'
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
            link: '/',
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
    return (
        <div className='max-w-[900px] mx-auto flex flex-col'>
            <div className='flex gap-8 items-center'>
                {
                    list_navigates.map((nav, index) => {
                        return (
                            <Link href={nav.link} key={index} className='w-[120px] h-[60px] flex justify-center items-center cursor-pointer'>{nav.title}</Link>
                        )
                    })
                }
            </div>
            {/* <div className='flex gap-20 items-center'>
                {
                    list_navigate.slice(6, 10).map((nav, index) => {
                        return (
                            <p key={index} className='w-[120px] h-[60px] flex justify-center items-center cursor-pointer'>{nav}</p>
                        )
                    })
                }
            </div> */}
        </div>
    )
}
