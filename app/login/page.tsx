import { signIn } from 'next-auth/react';

import { AuthFormComponent } from '@/components/AuthForm/page';

export default function LoginPage() {
    return <AuthFormComponent isLogin={true} btnText="Login" />;
}
