"use client"
import { ColoredMessage } from "./ColoredMessage"

export const App = () => {
    const onClickButton = () => {
        alert()
    }

    return (
        <>
            <h1 style={{color: "red"}}>こんにちは！</h1>
            <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です！</ColoredMessage>
            <button onClick={onClickButton}>ボタン</button>
            <button onClick={() => {alert("ボタン2")}}>ボタン2</button>
        </>
    )
}