import { PrismaClient } from '@prisma/client'
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { NextResponse } from "next/server";

const prisma = new PrismaClient()

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  console.log(session);
  console.log(request);
  const result = await prisma.protein.create({
    data: {
      name: "chicken",
      author: { connect: { email: session?.user?.email } },
    },
  });
  return NextResponse.json(result);
}