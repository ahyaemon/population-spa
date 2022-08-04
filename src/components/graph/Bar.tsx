import {Component, onMount} from "solid-js";
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

    const height = Math.abs(to - from) / n
    const lineBoxStyles = `margin-top: 100px; height: ${height}px`

    let a: HTMLDivElement

    onMount(() => {
        console.log(a)
    })

    return (
        <div class={classes.bar} ref={a}>
            <div class={classes.lineBox} style={lineBoxStyles}></div>
        </div>
    )
}
