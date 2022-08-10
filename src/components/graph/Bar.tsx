import {Component, createEffect, createSignal, splitProps} from "solid-js";
import classes from "./Bar.module.css"
import {FromTo} from "../../lib/population";

type BarProps = {
    min: number,
    max: number,
    fromTo: FromTo,
}

function createStyle(min: number, max: number, fromTo: FromTo): string {
    const n = (max - min) / 300
    const isAscendant = fromTo.to - fromTo.from >= 0

    const top = isAscendant ? fromTo.to : fromTo.from
    const marginTop = (max - top) / n
    const height = Math.abs(fromTo.to - fromTo.from) / n
    const direction = isAscendant ? "bottom" : "top"

    return `
        margin-top: ${marginTop}px;
        height: ${height}px;
        background-image: linear-gradient(to right ${direction}, transparent 48%, black 48%, black 52%, transparent 52%);
    `
}

export const Bar: Component<BarProps> = (props) => {

    const [ local ] = splitProps(props, ["min", "max", "fromTo"])
    const [style, setStyle] = createSignal<string>("")

    createEffect(() => {
        setStyle(createStyle(local.min, local.max, local.fromTo))
    })

    return (
        <div class={classes.bar}>
            <div class={classes.lineBox} style={style()}></div>
        </div>
    )
}
