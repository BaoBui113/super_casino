import React from 'react'
import hero1 from '@/app/assets/images/hero1.png'
import bg_hero from '@/app/assets/images/bg_hero.png'
import Image from 'next/image'
import ContainerBackground from '../ContainerBackground'
export default function ListHero() {
    return (
        <div className='relative w-full min-h-[1200px]'>
            <div className='absolute inset-0 z-0 h-full'>
                <Image src={bg_hero} alt='bg_game' layout='fill' className='object-cover' />
            </div>
            <ContainerBackground classNames='top-[75px] relative z-10 flex flex-col'>
                <div className='grid grid-cols-12 gap-x-5 gap-y-12'>
                    {Array(20).fill(0).map((_, index) => {
                        return (
                            <div key={index} className="col-span-2 relative w-full aspect-square">
                                <Image src={hero1} alt='hero' layout='fill' className='object-cover' />
                            </div>
                        );
                    })}
                </div>
            </ContainerBackground>
        </div>
    );
}
