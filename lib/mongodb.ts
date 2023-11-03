import mongoose from 'mongoose';

export const connectMongodb = async () => {
    try {
        await mongoose.connect(process.env.DB_URI!);
    } catch (error) {}
};
