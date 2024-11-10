import React from 'react'
import ButtonPayment from '../components/Payment/ButtonPayment'
import NoticeDeposit from '../components/Payment/Deposit/NoticeDeposit'
import PaymentForm from '../components/Payment/PaymentForm'

export default function Deposit() {
    return (
        <div className='max-w-[1520px] mx-auto px-4'>
            <div className='flex flex-col mb-12'>
                <span className='font-extrabold text-3xl leading-[42px]'>Balance</span>
                <span className='font-bold text-xl leading-7'>입금 신청</span>
            </div>
            <div className='max-w-[890px]'>
                <div className='flex justify-between items-center mb-14'>
                    <span className='text-xl font-bold leading-6'>입금 계좌</span>
                    <ButtonPayment>고객센터 문의</ButtonPayment>
                </div>
                <PaymentForm status='deposit' />
            </div>
            <div className='mt-12 mb-20'>
                <NoticeDeposit />
            </div>
        </div>
    )
}
