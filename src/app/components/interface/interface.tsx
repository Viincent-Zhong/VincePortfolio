'use client'

import { Snowfall } from "react-snowfall";
import Header from "./header"

export default function Interface() {
    return (
        <div className="fixed w-full h-full">
            <Snowfall snowflakeCount={20}/>
            <Header/>
        </div>
    )
}