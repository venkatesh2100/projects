import { NextRequest } from "next/server";
import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

export async function POST(req: NextRequest) {

  const body = await req.json();
  try{
    const user=await client.user.create({
      data: {
        username: body.username,
        password: body.password,
      },
    });
    return Response.json({
      message: "Hi this backend post signup is working",
      body:user
    });
  }catch(e){
    return Response.error();
  }


}
