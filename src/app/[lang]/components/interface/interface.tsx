'use client'

import { Snowfall } from "react-snowfall";
import Header from "./header"
import ScrollBar from "./scrollBar"

export default function Interface() {
    return (
        <div className="z-50 fixed w-full h-full pointer-events-none">
            <Snowfall snowflakeCount={20}/>
            <Header/>
            <div className="invisible lg:visible">
                <ScrollBar/>
            </div>
        </div>
    )
}