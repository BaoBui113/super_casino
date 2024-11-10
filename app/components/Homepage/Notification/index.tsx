import React from 'react'
import NotificationItem from './notificationItem'
const listNoti =
    [
        {
            title: '공지사항',
            contents: [
                'SA게임 점검 안내 (9/9)',
                '일부게임 점검 안내 (8/30)',
                '전체 시스템 서버 점검 안내 (8/28)',
                'SA게임 점검 안내 (8/19)'
            ]
        },
        {
            title: '이벤트',
            contents: [
                '[한가위 이벤트] 풍성하게 즐기는 추석 EVENT',
                '[UNION 게임] 런칭기념 실시간 올인쿠폰 5% EVENT - 종료',
                '두근두근 전화데이트 EVENT',
                '[JACKPOT EVENT] 가즈아 잭팟 이벤트 !'
            ]
        },

    ]
export default function Notification() {
    return (
        <div className='max-w-[1520px] mx-auto p-4'>
            <div className='flex gap-6'>
                {
                    listNoti.map((noti, index) => {
                        return (
                            <NotificationItem key={index} title={noti.title} contents={noti.contents} />
                        )
                    })
                }
            </div>

        </div>
    )
}
