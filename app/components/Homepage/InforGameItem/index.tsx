import React from 'react'
import Image, { StaticImageData } from 'next/image'
export default function InformationGameItem({ img, title, tags }: { img: StaticImageData, title: string, tags: string[] }) {
    return (
        <div style={
            {
                background: 'radial-gradient(100% 93.26% at 100% 0%, #0395F5 0%, #01B7F7 100%)'
            }
        } className='flex justify-between'>
            <div className='flex-1 flex flex-col gap-2 pt-11 pl-8'>
                <div className='flex gap-1'>
                    {
                        tags.map((tag, index) => {
                            return (
                                <p key={index} className='text-white text-[10px] font-bold px-2 py-[2px] bg-black'>{tag}</p>
                            )
                        })
                    }


                </div>
                <p className='text-white text-[28px] font-semibold leading-8'>{title}</p>
                <p className='text-white text-[28px] font-semibold leading-8'>Start Now</p>
            </div>
            <div className='w-[133px] h-[245px] relative'>
                <Image src={img} alt='game1' fill className='object-cover' />
            </div>
        </div>
    )
}
