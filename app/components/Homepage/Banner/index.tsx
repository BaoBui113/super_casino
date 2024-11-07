import React from 'react'
import banner from '@/app/assets/images/banner.png'
import Image from 'next/image'
export default function Banner() {
    return (
        <div className='relative w-full aspect-[2.9538]'>
            <Image src={banner} alt='banner' fill className='object-contain' />
        </div>
    )
}
