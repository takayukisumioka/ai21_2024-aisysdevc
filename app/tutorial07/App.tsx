"use client"
import { ColoredMessage } from "./ColoredMessage"
import { useState } from "react"

export const App = () => {
    const [num, setNum] = useState(0)

    const onClickButton1 = () => {
        setNum(num + 1)
    }

    const onClickButton2 = () => {
        // setNum(num + 1) 引数を値で渡すと
        // setNum(num + 1) 関数生成時の変数の値が使われる

        setNum((num) => num + 1) // 引数に関数の形で渡すと
        setNum((num) => num + 1) // 最新状態の変数の値が使われる
    }

    return (
        <>
            <h1 style={{color: "red"}}>こんにちは！</h1>
            <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です！</ColoredMessage>
            <button onClick={onClickButton1}>+1</button>
            <button onClick={onClickButton2}>+2</button>
            <p>{num}</p>
        </>
    )
}