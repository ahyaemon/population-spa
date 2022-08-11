import { Component, For } from 'solid-js'
import { Bar } from './Bar'
import { FromTo } from '../../lib/population'

type LineProps = {
    min: number
    max: number
    fromToList: FromTo[]
}

export const Line: Component<LineProps> = props => {
    return (
        <For each={props.fromToList}>
            {fromTo => <Bar min={props.min} max={props.max} fromTo={fromTo} />}
        </For>
    )
}
