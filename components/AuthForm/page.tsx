'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

type Props = {
    btnText: string;
    isLogin: boolean;
};

type Response = {
    message: string;
    data: {
        name: FormDataEntryValue | null;
        email: FormDataEntryValue | null;
        password: string;
    };
};

export const AuthFormComponent = (props: Props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // The input data must be appended on FormData()
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('password', password);

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch('api/register', {
                method: 'POST',
                body: formData,
            });
            const data: Response = await res.json();

            if (data.message === 'Email already exist') return alert('Email already exist');

            return data;
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="grid place-items-center h-full">
            <div className="shadow-lg p-5 shadow-stone-800 rounded-lg border-4 border-cyan-500">
                <h1 className="text-xl font-bold my-4">Enter the details</h1>

                <form onSubmit={submitHandler} className="flex flex-col gap-3" action="">
                    {!props.isLogin && (
                        <input onChange={(e) => setName(e.target.value)} required type="text" placeholder="Fullname" />
                    )}
                    <input onChange={(e) => setEmail(e.target.value)} required type="text" placeholder="Email" />
                    <input
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        type="password"
                        placeholder="Password"
                    />
                    <button className="text-slate-100 bg-cyan-500 py-2" type="submit">
                        {props.btnText}
                    </button>

                    <Link className="text-sm mt-3" href={props.isLogin ? '/register' : '/login'}>
                        {props.isLogin ? `Don't` : 'Already'} have account {props.isLogin && 'yet'}?{' '}
                        <span className="underline">{props.isLogin ? 'Register' : 'Login'}</span>
                    </Link>
                </form>
            </div>
        </div>
    );
};
