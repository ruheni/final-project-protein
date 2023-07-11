import React, { useState } from 'react';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

interface Props {
    authorID: string;
}

export default async function ListLogs(props: Props) {
    const results = await prisma.protein.findMany({
        where: {
        authorId: props.authorID,
        }
    });

    return (
        <div>
            {results.map(result => <div>{result.id}</div>)}
        </div>
    )
}