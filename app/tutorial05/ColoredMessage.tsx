type Props = {
    color: string,
    message: string
}

export const ColoredMessage = (props: Props) => {
    const contentStyle = {
        color: props.color,
        fontSize: "20px"
    }

    return (
        <p style={contentStyle}>{props.message}</p>
    )
}


