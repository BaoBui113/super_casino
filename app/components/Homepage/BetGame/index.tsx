import React from 'react'

export default function BetGame() {
    return (
        <div className='relative border border-solid border-white rounded px-4 py-5 bg-black text-white'>
            <div className='flex gap-2 absolute top-2 right-2'>
                <p className='bg-[#222222] py-[6px] px-[10px] rounded text-white font-medium text-sm'>
                    24:00
                </p>
                <p className='bg-[#222222] py-[6px] px-[10px] rounded text-white font-medium text-sm'>
                    00:00
                </p>
            </div>
            <span>Sport Team</span>
            <div className='pt-8 pb-[10px] flex justify-between'>
                <div className='flex flex-col gap-2'>
                    <div className='flex gap-2 items-center'>
                        <div className='w-6 h-6 rounded bg-white'></div>
                        <span>ABC Team</span>
                    </div>
                    <div className='flex gap-2 items-center'>
                        <div className='w-6 h-6 rounded bg-white'></div>
                        <span>ABC Team</span>
                    </div>
                </div>
                <div className='flex flex-col gap-2 bg-[#15181B] rounded-[14px] font-bold text-base'>
                    <span>1</span>
                    <span>3</span>
                </div>
            </div>
        </div>
    )
}
