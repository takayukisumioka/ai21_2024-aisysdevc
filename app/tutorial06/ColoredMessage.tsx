import { ReactNode } from "react"

type Props = {
    color: string,
    children: ReactNode
}

export const ColoredMessage = ({color, children}: Props) => {
    const contentStyle = {
        color: color,
        fontSize: "20px"
    }

    return (
        <p style={contentStyle}>{children}</p>
    )
}


