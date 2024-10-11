import { NextResponse } from "next/server";
import{   PrismaClient }from '@repo/db/client';

const client = new PrismaClient(); // Proper instantiation

export const GET = async () => {
    try {
        await client.user.create({
            data: {
                email: "asd",
                name: "adsads"
            }
        });

        return NextResponse.json({
            message: "User created successfully"
        });
    } catch (error) {
        return NextResponse.json({
            error: "Failed to create user",
            details: error.message
        }, { status: 500 });
    }
};
