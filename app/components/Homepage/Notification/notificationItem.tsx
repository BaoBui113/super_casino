import React from 'react'
import ic_next from '@/app/assets/icon/ic-next.svg'
import Image from 'next/image'
export default function NotificationItem({ title, contents }: { title: string, contents: string[] }) {
    return (
        <div className='w-full'>
            <p className='bg-[#016FFF] px-5 py-[10px]'>
                <span className='text-white font-semibold'>{title}</span>
            </p>
            <div className='flex justify-end items-center gap-3 mb-[10px] cursor-pointer'>
                <span className='text-xs font-normal leading-4'>view more</span>
                <div className='relative w-[18px] h-[18px]'>
                    <Image src={ic_next} alt='next' fill />
                </div>
            </div>
            <div className='flex flex-col bg-[#111111]'>
                {
                    contents.map((cont, index) => {
                        return (
                            <div key={index}>
                                <p className='text-[#E7E7E7] font-medium text-base leading-6 py-3 pl-[10px] pr-4'>{cont}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
