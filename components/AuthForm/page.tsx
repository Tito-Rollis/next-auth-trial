'use client';

import Link from 'next/link';
import { FormEvent, useState } from 'react';

type Props = {
    btnText: string;
    isLogin: boolean;
};

export const AuthFormComponent = (props: Props) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const submitHandler = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const res = await fetch('api/register', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password }),
            });
            const data = res.json();

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
