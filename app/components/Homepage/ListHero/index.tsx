import React from 'react'
import hero1 from '@/app/assets/images/hero1.png'
import bg_hero from '@/app/assets/images/bg_hero.png'
import Image from 'next/image'
import ContainerBackground from '../ContainerBackground'
export default function ListHero() {
    return (
        <div className='relative w-full min-h-[300px]'>

            <Image src={bg_hero} alt='bg_game' fill className='object-cover' />

            <ContainerBackground classNames='py-[80px] relative'>
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
