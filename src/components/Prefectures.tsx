import {Component, For} from "solid-js";
import classes from "./Prefectures.module.css"

type PrefecturesProps = {
    prefectures: {code: number, name: string }[]
}

export const Prefectures: Component<PrefecturesProps> = (props) => {

    const prefectures = props.prefectures

    return (
        <div class={classes.prefectures}>
            <For each={prefectures}>{ prefecture =>
                <label class={classes.item}>
                    <input type="checkbox"/>
                    {prefecture.name}
                </label>
            }</For>
        </div>
    )
}