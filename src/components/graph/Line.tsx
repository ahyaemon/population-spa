import { Component, createEffect, createSignal, For } from 'solid-js'
import { Bar } from './Bar'
import { FromTo, getFromToList, Population } from '../../lib/population'

type LineProps = {
    populations: Population[]
}

export const Line: Component<LineProps> = props => {
    const [fromToList, setFromToList] = createSignal<FromTo[]>([])

    createEffect(() => {
        setFromToList(getFromToList(props.populations))
    })

    return <For each={fromToList()}>{fromTo => <Bar fromTo={fromTo} />}</For>
}
