import { Component, createEffect, createSignal, For } from 'solid-js'
import classes from './Canvas.module.css'
import { Line } from './Line'
import { PopulationTransition, store } from '../../store'
import { colors } from '../../lib/colors'

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
                {(transition, i) => (
                    <Line
                        min={store.min(props.codes)}
                        max={store.max(props.codes)}
                        populations={transition.populations}
                        color={colors[i()]}
                    />
                )}
            </For>
        </div>
    )
}
