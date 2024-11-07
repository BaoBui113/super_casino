import React from 'react'
import TableRankPlayer from './tablePlayer'
import ic_rank from '@/app/assets/icon/ic-rank.svg'
import Image from 'next/image'
export default function RankPlayer() {
    return (
        <div className="max-w-[1520px] mx-auto bg-black text-white p-4 mb-5">
            <div className="flex gap-[10px] items-center font-semibold leading-[30px] text-[22px] mb-5">
                <div className='relative w-8 h-8'>
                    <Image src={ic_rank} alt='rank' fill className='object-cover' />
                </div>
                <h2 className="font-semibold">주간 랭킹 TOP 10</h2>
            </div>
            <TableRankPlayer />
        </div>

    )
}
