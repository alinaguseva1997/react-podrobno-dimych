import React, {useEffect, useState} from "react";

export type PropsType = {}

export const Clock: React.FC<PropsType> = (props) => {

    const [date, setDate] = useState(new Date())

    useEffect(()=> {
        setInterval(()=>{
            setDate(new Date())
        }, 1000)
    })

    return <div>
        <span>{date.getHours()}</span>
        :
        <span>{date.getMinutes()}</span>
        :
        <span>{date.getSeconds()}</span>
    </div>
}