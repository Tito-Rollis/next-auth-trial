import { connectMongodb } from '@/lib/mongodb';
import { User } from '@/models/user';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { pages } from 'next/dist/build/templates/app-page';

type Body = {
    email?: string;
    password?: string;
};

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        CredentialsProvider({
            // The name to display on the sign in form (e.g. 'Sign in with...')
            name: 'Credentials',
            // The credentials is used to generate a suitable form on the sign in page.
            // You can specify whatever fields you are expecting to be submitted.
            // e.g. domain, username, password, 2FA token, etc.
            // You can pass any HTML attribute to the <input> tag through the object.
            // Leave it {} if you use custom
            credentials: {},
            async authorize(credentials) {
                await connectMongodb();
                const { email } = credentials as { email: string; password: string };
                const UserEmail = await User.findOne({ email });

                // Check is user exist
                if (UserEmail) {
                    // Any object returned will be saved in `user` property of the JWT
                    return UserEmail;
                } else {
                    // If you return null then an error will be displayed advising the user to check their details.
                    return null;

                    // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
                }
            },
        }),
    ],
    pages: {
        signIn: '/login',
    },
});

export { handler as GET, handler as POST };
