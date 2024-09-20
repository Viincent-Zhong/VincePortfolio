'use client'

import { Rings } from 'react-loader-spinner'

export default function Loading()
{
    return (
        <div className="w-screen h-screen flex flex-row justify-center items-center bg-main">
            <Rings color="#6f4f28" width={160} height={160}/>
        </div>
    );
}