'use client';

import { useRouter } from 'next/navigation';

import { useSession, signOut } from 'next-auth/react';

export function DashboardComponent() {
    const { data: session, status } = useSession();
    const route = useRouter();

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (status === 'unauthenticated') {
        return route.push('/login');
    }

    const signOutHandler = async () => await signOut({ callbackUrl: '/login' });
    return (
        <div className="shadow-lg p-5 shadow-stone-800 rounded-lg border-4 border-cyan-500">
            <h1>
                Name: <span className="font-bold">{session?.user?.name}</span>
            </h1>
            <h1>
                Email: <span className="font-bold">{session?.user?.email}</span>
            </h1>
            <button onClick={signOutHandler} className="text-slate-100 bg-orange-500 w-full mt-4 py-2" type="submit">
                Logout
            </button>
        </div>
    );
}
