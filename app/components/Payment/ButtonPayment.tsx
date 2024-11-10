import { Button } from '@nextui-org/react'
import React from 'react'

export default function ButtonPayment({ children, classNames, onClick, type = 'button' }: { children: React.ReactNode, classNames?: string, onClick?: () => void, type?: 'button' | 'submit' }) {
    return (
        <Button type={type} onClick={onClick} className={`px-4 py-[10px] rounded text-black font-normal leading-5 text-xs ${classNames}`} style={
            {
                backgroundColor: 'rgba(100, 218, 254, 1)',
                color: 'rgba(17, 17, 17, 1)',
            }
        }>{children}</Button>
    )
}
