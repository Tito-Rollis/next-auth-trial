import LoginFormComponent from '@/components/LoginForm/page';
import Image from 'next/image';

export default function Home() {
    return (
        <main className="bg-stone-800 h-screen w-screen">
            <LoginFormComponent />
        </main>
    );
}
