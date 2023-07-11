import Card from "@/components/home/card";
import AddLog from "./add-log";
import React, { useState } from 'react';
import ListLogs from "./list-log";

interface Props {
    userEmail: string;
}

export default async function LoggedIn(props: Props) {
    const features = [
        {
          title: "Your Logs",
          large: true,
          demo: 
          <>
            {/* @ts-expect-error Server Component */}
            <ListLogs userEmail={props.userEmail} />
          </>
        },
        {
          title: "Log Intake",
          demo: <AddLog/>
        }
      ];
      
    return (
        <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, demo, large }) => (
            <Card
              key={title}
              title={title}
              demo={demo}
              large={large}
            />
          ))}
          </div>
    )
}
