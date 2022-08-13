import { Component, createEffect, createSignal, For } from 'solid-js'
import { Bar } from './Bar'
import { FromTo, getFromToList, Population } from '../../lib/population'
import classes from './Line.module.css'

type LineProps = {
    populations: Population[]
}

export const Line: Component<LineProps> = props => {
    const [fromToList, setFromToList] = createSignal<FromTo[]>([])

    createEffect(() => {
        setFromToList(getFromToList(props.populations))
    })

    return (
        <div class={classes.line}>
            <For each={fromToList()}>{fromTo => <Bar fromTo={fromTo} />}</For>
        </div>
    )
}
