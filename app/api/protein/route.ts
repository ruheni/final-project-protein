import { PrismaClient } from '@prisma/client'
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

export async function POST(request: Request) {
  const session = await getServerSession(authOptions)!;
  const email = session?.user?.email!;
  console.log(session);
  console.log(request);
  const result = await prisma.protein.create({
    data: {
      name: "chicken",
      author: { connect: { email: email } },
    },
  });
  return NextResponse.json(result);
}