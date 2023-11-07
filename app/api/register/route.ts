import { connectMongodb } from '@/lib/mongodb';
import { User } from '@/models/user';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

export async function POST(req: Request) {
    try {
        await connectMongodb();
        // Get the body property that will be posted from Frontend
        // !IMPORTANT, you have to use .formData() instead of req.json() for getting form data input
        const body = await req.formData();
        const name = body.get('name');
        const email = body.get('email');
        const password = body.get('password');

        //Hashed the password
        const hashedPassword = await bcrypt.hash(password?.toString()!, 10);

        // Checking if email is already exist
        const userExist = await User.findOne({ email });
        if (userExist) {
            return NextResponse.json(
                {
                    message: 'Email already exist',
                    data: { name, email, password: hashedPassword },
                },
                { status: 400 }
            );
        }

        //insert the properties into the Database
        await User.create({ name, email, password });

        // Return the response
        return NextResponse.json({ message: 'Success', data: { name, email, password: hashedPassword } });
    } catch (error) {
        console.log('error inside get route', error);
        // if (error instanceof Error) {
        //     return new Response(error.message, { status: 500 });
        // }

        return new Response('Internal Server Error', { status: 500 });
    }
}
