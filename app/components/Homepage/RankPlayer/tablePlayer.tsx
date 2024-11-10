import React from 'react'
const listPlayer =
    [
        {
            game: 'Title',
            player: 'Player name',
            setAccount: '999999',
            time: '00:00'
        },
        {
            game: 'Title',
            player: 'Player name',
            setAccount: '999999',
            time: '00:00'
        },
        {
            game: 'Title',
            player: 'Player name',
            setAccount: '999999',
            time: '00:00'
        },
        {
            game: 'Title',
            player: 'Player name',
            setAccount: '999999',
            time: '00:00'
        },
        {
            game: 'Title',
            player: 'Player name',
            setAccount: '999999',
            time: '00:00'
        },
        {
            game: 'Title',
            player: 'Player name',
            setAccount: '999999',
            time: '00:00'
        },
        {
            game: 'Title',
            player: 'Player name',
            setAccount: '999999',
            time: '00:00'
        },
        {
            game: 'Title',
            player: 'Player name',
            setAccount: '999999',
            time: '00:00'
        },
    ]
export default function TableRankPlayer() {
    return (

        <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">

                <thead>
                    <tr className="bg-blue-600">
                        <th className="p-2 text-sm font-semibold text-white">GAME</th>
                        <th className="p-2 text-sm font-semibold text-white">PLAYER</th>
                        <th className="p-2 text-sm font-semibold text-white">SET ACCOUNT</th>
                        <th className="p-2 text-sm font-semibold text-white">TIME</th>
                    </tr>
                </thead>


                <tbody>
                    {
                        listPlayer.map((player, index) => {
                            return (
                                <tr key={index} className={`${index === 0 ? 'bg-[#111111]' : 'bg-[#222222]'}`}>
                                    <td className="px-4 py-5 flex items-center space-x-2 cursor-pointer">
                                        <div className="w-6 h-6 bg-yellow-300"></div>
                                        <span className="text-sm">{player.game}</span>
                                    </td>
                                    <td className="px-4 py-5 text-sm cursor-pointer">{player.player}</td>
                                    <td className="px-4 py-5 text-sm cursor-pointer">{player.setAccount}</td>
                                    <td className="px-4 py-5 text-sm cursor-pointer">{player.time}</td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
