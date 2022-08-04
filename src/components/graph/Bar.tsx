import {Component} from "solid-js";
import classes from "./Bar.module.css"

type BarProps = {
    min: number,
    max: number,
    from: number,
    to: number,
}

export const Bar: Component<BarProps> = (props) => {
    const { min, max, from, to } = props
    const n = (max - min) / 300
    const isAscendant = to - from >= 0

    const top = isAscendant ? to : from
    const marginTop = (max - top) / n
    const height = Math.abs(to - from) / n
    const direction = isAscendant ? "bottom" : "top"

    const lineBoxStyles = `
        margin-top: ${marginTop}px;
        height: ${height}px;
        background-image: linear-gradient(to right ${direction}, transparent 48%, black 48%, black 52%, transparent 52%);
    `

    return (
        <div class={classes.bar}>
            <div class={classes.lineBox} style={lineBoxStyles}></div>
        </div>
    )
}
