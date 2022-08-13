import { Component, createEffect, createSignal, For } from 'solid-js'
import classes from './Canvas.module.css'
import { Line } from './Line'
import { PopulationTransition, store } from '../../store'

type LineProps = {
    codes: number[]
}

export const Canvas: Component<LineProps> = props => {
    const [transitions, setTransitions] = createSignal<PopulationTransition[]>()

    createEffect(async () => {
        setTransitions(await store.getTransitionsByCodes(props.codes))
    })

    return (
        <div class={classes.canvas}>
            <For each={transitions()}>
                {transition => <Line populations={transition.populations} />}
            </For>
        </div>
    )
}
