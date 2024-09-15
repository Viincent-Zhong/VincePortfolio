'use client'

import { Snowfall } from "react-snowfall";
import Header from "./header"
import ScrollBar from "./scrollBar"

export default function Interface() {
    return (
        <div className="fixed w-full h-full z-10">
            <Snowfall snowflakeCount={20}/>
            <Header/>
            <div className="invisible lg:visible">
                <ScrollBar/>
            </div>
        </div>
    )
}