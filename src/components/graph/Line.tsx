import { Component, createEffect, createSignal, For } from 'solid-js'
import { Bar } from './Bar'
import { FromTo, getFromToList, Population } from '../../lib/population'
import classes from './Line.module.css'

type LineProps = {
    min: number
    max: number
    populations: Population[]
    color: string
}

export const Line: Component<LineProps> = props => {
    const [fromToList, setFromToList] = createSignal<FromTo[]>([])

    createEffect(() => {
        setFromToList(getFromToList(props.populations))
    })

    return (
        <div class={classes.line}>
            <For each={fromToList()}>
                {fromTo => (
                    <Bar
                        min={props.min}
                        max={props.max}
                        fromTo={fromTo}
                        color={props.color}
                    />
                )}
            </For>
        </div>
    )
}
