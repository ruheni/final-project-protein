import { PrismaClient } from '@prisma/client'
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)!;
  const email = session?.user?.email!;
  console.log(session);
  console.log("REQUEST")
  const body = await request.json();
  console.log(body);
  const result = await prisma.protein.create({
    data: {
      name: body.name,
      date: body.date,
      count: body.count,
      author: { connect: { email: email } },
    },
  });
  return NextResponse.json(result);
}

export async function GET(request: Request) {
  const session = await getServerSession(authOptions)!;
  const authorID = session?.user?.email!;
  console.log(session);
  console.log(request);
  const result = await prisma.protein.findMany({
    where: {
      authorId: authorID,
    }
  });
  let resp = NextResponse.json(result);
  console.log("RESP")
  console.log(resp)
  return resp;
}