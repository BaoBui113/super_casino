"use client";
import React from 'react'
import logo from '@/app/assets/logo.png'
import Image from 'next/image';
import avatar from '@/app/assets/icon/ic_avatar.svg'
import { SearchIcon } from '../SearchIcon';
import Input from '../Input';
import { Button, Popover, PopoverContent, PopoverTrigger } from '@nextui-org/react';
import HeaderBottom from './headerBottom';
import LoginForm from '../Homepage/Login';
import { useAuth } from '@/app/context/AuthContext';
import { IProfile } from '@/app/type';
import ic_logout from '@/app/assets/icon/ic_logout.svg'
import { useRouter } from 'next/navigation';
const ProfileUser = ({ user }: { user: IProfile }) => {
    const { logout } = useAuth();
    return (
        <div className='flex items-center gap-4 cursor-pointer'>
            <div className='flex flex-col gap-1'>
                <span className='text-white font-semibold'>{user.MEM_LID}</span>
            </div>
            <Popover placement="bottom" showArrow={true}>
                <PopoverTrigger>
                    <div className='relative w-10 h-10'>
                        <Image src={avatar} alt='avatar' fill className='object-cover' />
                    </div>
                </PopoverTrigger>
                <PopoverContent className='px-4 py-2 flex flex-col gap-1 text-black'>
                    <span className='my-2'>{user.MEM_LID}</span>
                    <span>{user.HP_NO}</span>
                    <Button onClick={logout} startContent={
                        <div className='relative w-4 h-4'>
                            <Image src={ic_logout} alt='logout' fill />
                        </div>
                    } variant='light'>Logout</Button>
                </PopoverContent>
            </Popover>

        </div>
    )
}
export default function Header() {
    const { user, onOpenLogin } = useAuth();
    const router = useRouter();
    return (
        <>
            <header className='sticky top-0 left-0 right-0 z-50 bg-black'>
                <div className='border-b-2 border-solid border-gray-500'>
                    <div className='max-w-[1520px] mx-auto px-4 flex justify-between items-center py-[10px]'>
                        <div onClick={() => {
                            router.push('/')
                        }} className='relative w-[162px] h-[52px] cursor-pointer'>
                            <Image src={logo} alt='logo' fill />
                        </div>
                        <div className='w-[60%]'>
                            <Input startContext={
                                <SearchIcon />
                            } />
                        </div>
                        {!!user ? <ProfileUser user={user} /> : <Button onPress={onOpenLogin} className='bg-[#1D719D80] border border-solid border-[#64DAFE] text-white w-[175px] h-12 rounded px-0'>
                            로그인
                        </Button>}

                    </div>
                </div>
                <HeaderBottom />
            </header>
            <LoginForm />
        </>

    )
}
