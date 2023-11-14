import { AuthFormComponent } from '@/components/AuthForm/page';
import { FormEvent } from 'react';
import { useSession } from 'next-auth/react';

export default function Register() {
    return <AuthFormComponent btnText="Register" isLogin={false} />;
}
