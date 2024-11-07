import React from 'react'
import logo1 from '@/app/assets/logo1.svg'
import logo2 from '@/app/assets/logo2.svg'
import logo3 from '@/app/assets/logo3.svg'
import logo4 from '@/app/assets/logo4.svg'
import logo5 from '@/app/assets/logo5.svg'
import logo6 from '@/app/assets/logo6.svg'
import logo7 from '@/app/assets/logo7.svg'
import logo8 from '@/app/assets/logo8.svg'
import Image from 'next/image'
const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8]
export default function Footer() {
    return (
        <div className='pt-12 flex flex-col items-center justify-center'>
            <div className='flex gap-3 items-center mb-1'>
                {logos.map((logo, index) => {
                    return (
                        <div key={index} className='w-[90px] h-[60px] relative'>
                            <Image src={logo} fill alt='logo' />
                        </div>
                    );
                })}
            </div>
            <div className='flex flex-col font-normal text-xs leading-4 text-[#888888] mb-32 text-center'>
                <span className='mb-9'>By accessing, continuing to use or navigating throughout this site you accept thata we will use certain browser cookies to improve your customer experience with us</span>
                <span className='mb-5'>SUPERCASINO only uses cookies which will improve your experience with us and will not interfere with your privacy</span>
                <span>Copyright ⓒ SUPER CASINO. All rights reserved.</span>
            </div>
        </div>
    )
}
