import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

export async function POST(req: NextApiRequest, res: NextApiResponse) {
    try {
        const { name, email, password } = await req.body;
        return NextResponse.json({ message: 'Success', data: { name, email, password } });
    } catch (error) {
        return res.status(500).json({ message: 'Post failed', payload: req });
    }
}

const url = 'https://jsonplaceholder.typicode.com/todos';

// export async function GET() {
//     try {
//         const api = await fetch(url).then((response) => response.json());
//         return NextResponse.json(api);
//     } catch (error) {
//         console.log(error);
//     }
// }
