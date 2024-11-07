"use client"

export const App = () => {
    const onClickButton = () => {
        alert()
    }

    return (
        <>
            <h1>こんにちは！</h1>
            <p>おげんきですか？</p>
            <button onClick={onClickButton}>ボタン</button>
        </>
    )
}