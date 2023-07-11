import React, { useState } from 'react';
import { PrismaClient } from '@prisma/client'

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
            <div>
                {prismaResult?.proteinLogs.map(result => <div key={result.id}>{result.name}</div>)}
            </div>
        </>
    )
}