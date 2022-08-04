import {Component} from "solid-js";

type BarProps = {
    min: number,
    max: number,
    from: number,
    to: number,
}

export const Bar: Component<BarProps> = (props) => {
    const { min, max, from, to } = props
    return (
        <div>
            {from} - {to}
        </div>
    )
}
