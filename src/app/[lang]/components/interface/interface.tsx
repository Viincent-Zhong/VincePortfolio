'use client'

import { Snowfall } from "react-snowfall";
import Header from "./header"
import ScrollBar from "./scrollBar"

interface Props {
    dictionary: any;
}

export default function Interface({dictionary}: Props) {
    return (
        <div className="z-50 fixed w-full h-full pointer-events-none">
            <Snowfall snowflakeCount={20} color="#ffebee"/>
            <Header/>
            <div className="invisible lg:visible">
                <ScrollBar dictionary={dictionary}/>
            </div>
        </div>
    )
}