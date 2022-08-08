import {Component, For, splitProps} from "solid-js";
import classes from "./Prefectures.module.css"

type PrefecturesProps = {
    prefectures: {code: number, name: string }[]
}

export const Prefectures: Component<PrefecturesProps> = (props) => {

    const [ local ] = splitProps(props, ["prefectures"])

    return (
        <div class={classes.prefectures}>
            <For each={local.prefectures}>{ prefecture =>
                <label class={classes.item}>
                    <input type="checkbox"/>
                    {prefecture.name}
                </label>
            }</For>
        </div>
    )
}
