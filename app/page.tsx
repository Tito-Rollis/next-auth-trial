import { AuthFormComponent } from '@/components/AuthForm/page';
import Image from 'next/image';

export default function Home() {
    return (
        <main>
            <AuthFormComponent btnText="Login" isLogin={true} />
        </main>
    );
}
