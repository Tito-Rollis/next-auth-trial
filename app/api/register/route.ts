import { connectMongodb } from '@/lib/mongodb';
import { User } from '@/models/user';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        await connectMongodb();
        // Get the body property that will be posted from Frontend
        const { name, email, password } = await req.body;

        //Hashed the password
        const hashedPassword = await bcrypt.hash(password, 10);

        //insert the properties into the Database
        await User.create({ name, email, password });

        // Return the response
        return NextResponse.json({ message: 'Success', data: { name, email, password: hashedPassword } });
    } catch (error) {
        return res.status(500).json({ message: 'Post failed', payload: req });
    }
}
