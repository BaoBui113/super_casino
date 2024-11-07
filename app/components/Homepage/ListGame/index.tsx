import React from 'react'
import bg_game from '@/app/assets/images/bg-game.png'
import Image from 'next/image'
import game1 from '@/app/assets/images/game1.png'
import game2 from '@/app/assets/images/game2.png'
import game3 from '@/app/assets/images/game3.png'
import game4 from '@/app/assets/images/game4.png'
import InformationGameItem from '../InforGameItem'
import ContainerBackground from '../ContainerBackground'
import BetGame from '../BetGame'
const list_games =
    [
        {
            id: 1,
            img: game1,
            title: 'Casino Game',
            tags: ['CARDGAME', 'ONLINE', 'CASINO']
        },
        {
            id: 2,
            img: game2,
            title: 'Slot Game',
            tags: ['JACKPOT', 'SLOT', 'BACARA']
        },
        {
            id: 3,
            img: game3,
            title: 'Sport Game',
            tags: ['LIVESPORT', 'ACTION']
        },
        {
            id: 4,
            img: game4,
            title: 'Tournament',
            tags: ['LIVESPORT', 'ACTION']
        }
    ]
export default function ListGame() {
    return (
        <div className='relative w-full aspect-[1.8991]'>
            <Image src={bg_game} alt='bg_game' fill className='object-cover' />
            <ContainerBackground classNames='top-[75px]'>
                <div className='grid grid-cols-12 gap-12'>
                    {
                        list_games.map((game, index) => {
                            return (
                                <div key={index} className='xl:col-span-6 col-span-12'>
                                    <InformationGameItem img={game.img} title={game.title} tags={game.tags} />
                                </div>
                            )
                        })
                    }

                </div>
            </ContainerBackground>
            <ContainerBackground classNames='bottom-0'>
                <div className='grid grid-cols-12 gap-12'>
                    <div className='xl:col-span-3 col-span-12'>
                        <BetGame />
                    </div>
                    <div className='xl:col-span-3 col-span-12'>
                        <BetGame />
                    </div>
                    <div className='xl:col-span-3 col-span-12'>
                        <BetGame />
                    </div>
                    <div className='xl:col-span-3 col-span-12'>
                        <BetGame />
                    </div>
                </div>
            </ContainerBackground>
        </div>
    )
}
