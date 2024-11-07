"use client"

export const App = () => {
    const onClickButton = () => {
        alert()
    }

    const contentStyle = {
        color: "blue",
        fontSize: "20px"
    }

    return (
        <>
            <h1 style={{color: "red"}}>こんにちは！</h1>
            <p style={contentStyle}>おげんきですか？</p>
            <button onClick={onClickButton}>ボタン</button>
            <button onClick={() => {alert("ボタン2")}}>ボタン2</button>
        </>
    )
}