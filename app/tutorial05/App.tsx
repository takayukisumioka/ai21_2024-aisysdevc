"use client"
import { ColoredMessage } from "./ColoredMessage"

export const App = () => {
    const onClickButton = () => {
        alert()
    }

    return (
        <>
            <h1 style={{color: "red"}}>こんにちは！</h1>
            <ColoredMessage />
            <button onClick={onClickButton}>ボタン</button>
            <button onClick={() => {alert("ボタン2")}}>ボタン2</button>
        </>
    )
}