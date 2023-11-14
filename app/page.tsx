import { AuthFormComponent } from '@/components/AuthForm/page';
import { SessionProviderComponent } from './SessionProvider';

export default function Home() {
    return (
        <main>
            <AuthFormComponent btnText="Login" isLogin={true} />
        </main>
    );
}
