import Card from "@/components/home/card";
import AddLog from "@/components/protein/add-log";
import DefaultHomeCards from "@/components/home/default-home-cards";
import Balancer from "react-wrap-balancer";
import { DEPLOY_URL } from "@/lib/constants";
import { Github, Twitter } from "@/components/shared/icons";
import WebVitals from "@/components/home/web-vitals";
import ComponentGrid from "@/components/home/component-grid";
import Image from "next/image";
import { nFormatter } from "@/lib/utils";
import prisma from "@/lib/prisma";
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import DefaultHomeText from "@/components/home/default-home-text";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
          {session ? (
            <h1>hi</h1>) : (
            <DefaultHomeText />)
          }
      </div>
    </>
  );
}