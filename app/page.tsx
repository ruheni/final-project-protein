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
import ListLogs from "@/components/protein/list-log";

export default async function Home() {
  const session = await getServerSession(authOptions);

  return (
    <>
      <div className="z-10 w-full max-w-xl px-5 xl:px-0">
          {session ? (
            <div> 
              <h1>Welcome {session?.user?.name}</h1>
              {/* @ts-expect-error Server Component */}
              <ListLogs authorID={session?.user?.id} />
            </div>
            ) : (
            <DefaultHomeText />
            )
          }
      </div>
    </>
  );
}