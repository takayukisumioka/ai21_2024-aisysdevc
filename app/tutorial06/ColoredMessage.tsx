import { ReactNode } from "react"

type Props = {
    color: string,
    children: ReactNode
}

export const ColoredMessage = (props: Props) => {
    const contentStyle = {
        color: props.color,
        fontSize: "20px"
    }

    return (
        <p style={contentStyle}>{props.children}</p>
    )
}


