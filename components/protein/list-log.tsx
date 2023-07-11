import React, { useState } from 'react';
import { PrismaClient } from '@prisma/client'
import Card from '../home/card';

const prisma = new PrismaClient()

interface Props {
    userEmail: string;
}

export default async function ListLogs(props: Props) {
    const prismaResult = await prisma.user.findFirst({
        where: {
            email: props.userEmail
        },
        include:{
            proteinLogs: true
        }
    });

    console.log(prismaResult);

    return (
        <>
                    <ul>
                        {prismaResult?.proteinLogs.map(result => <li key={result.id}>{result.date} - {result.name} - {result.count}</li>)}
                    </ul>
        </>
    )
}