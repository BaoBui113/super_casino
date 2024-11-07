import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from "@nextui-org/react";
import logo from '@/app/assets/logo.png'
import Image from 'next/image';
import { Controller, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Input from '../../Input';
import { EyeSlashFilledIcon } from '../EyeSlashFilledIcon';
import { EyeFilledIcon } from '../EyeFilledIcon';
import { handleLogin } from '@/app/api/login';
import { toast } from 'react-toastify';
import { useAuth } from '@/app/context/AuthContext';

const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup.string().required("Password is required"),
});
export type FormLoginType = yup.InferType<typeof schema>;
export default function LoginForm({ isOpen, onOpenChange }: { isOpen: boolean, onOpenChange: () => void }) {
    const { login } = useAuth();
    const [isVisible, setIsVisible] = React.useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const toggleVisibility = () => setIsVisible(!isVisible);

    const { control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit = async (data: FormLoginType) => {
        setIsLoading(true);
        await handleLogin(data).then((res) => {
            if (res.status === '0') {
                const authUser = JSON.stringify({
                    GAME_ALIAS: res.GAME_ALIAS,
                    HP_NO: res.HP_NO,
                    MEM_ID: res.MEM_ID,
                    MEM_LID: res.MEM_LID,
                })
                login(authUser);
                toast.success('Login Success');
                onOpenChange();
            }
            else {
                toast.error(res.message);
            }
            setIsLoading(false);
        }).catch((error) => {
            console.log("error", error);
            setIsLoading(false);
        });

    };
    return (
        <>
            <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent className='rounded bg-black max-w-xs'>
                    {() => (
                        <>
                            <ModalHeader className="flex justify-center mt-[30px]">
                                <div className='relative w-[140px] h-[42px]'>
                                    <Image src={logo} alt='logo' fill />
                                </div>
                            </ModalHeader>
                            <ModalBody>
                                <form className='mb-6' onSubmit={handleSubmit(onSubmit)}>
                                    <Controller
                                        name="username"
                                        control={control}
                                        render={({ field }) => (
                                            <>
                                                <Input
                                                    underline
                                                    className='mb-6'
                                                    classNameInput='bg-transparent focus:bg-transparent'
                                                    {...field}
                                                    placeholder="아이디"
                                                    title='아이디'
                                                    errorMessage={errors.username?.message}
                                                />
                                            </>
                                        )}
                                    />
                                    <Controller
                                        name="password"
                                        control={control}
                                        render={({ field }) => (
                                            <Input
                                                underline
                                                className='mb-12'
                                                classNameInput='bg-transparent focus:bg-transparent'
                                                {...field}
                                                placeholder="비밀번호"
                                                title='비밀번호'
                                                errorMessage={errors.password?.message}
                                                type={isVisible ? "text" : "password"}
                                                endContext={
                                                    <>
                                                        {!!field.value && (
                                                            <button className="focus:outline-none" type="button" onClick={toggleVisibility} aria-label="toggle password visibility">
                                                                {isVisible ? (
                                                                    <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                                ) : (
                                                                    <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                                                                )}
                                                            </button>
                                                        )}
                                                    </>
                                                }
                                            />
                                        )}
                                    />
                                    <Button isLoading={isLoading} style={{
                                        background: "linear-gradient(180deg, #0565A0 0%, #0074BD 18%, #0074BD 81%, #0565A0 100%)"
                                    }} type="submit" className='w-full h-[50px] text-white rounded'>
                                        로그인
                                    </Button>
                                </form>
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    )
}
