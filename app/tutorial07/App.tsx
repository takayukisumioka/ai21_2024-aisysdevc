"use client"
import { ColoredMessage } from "./ColoredMessage"
import { useState } from "react"

export const App = () => {
    const [num, setNum] = useState(0)

    const onClickButton1 = () => {
        setNum(num + 1)
    }

    return (
        <>
            <h1 style={{color: "red"}}>こんにちは！</h1>
            <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です！</ColoredMessage>
            <button onClick={onClickButton1}>+1</button>
            <button onClick={() => {alert("ボタン2")}}>ボタン2</button>
            <p>{num}</p>
        </>
    )
}