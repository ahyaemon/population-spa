import { Component, For } from 'solid-js'
import { Bar } from './Bar'
import { FromTo } from '../../lib/population'

type LineProps = {
    fromToList: FromTo[]
}

export const Line: Component<LineProps> = props => {
    return (
        <For each={props.fromToList}>{fromTo => <Bar fromTo={fromTo} />}</For>
    )
}
