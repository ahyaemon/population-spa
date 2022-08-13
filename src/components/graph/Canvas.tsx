import { Component, createEffect, createSignal, Match, Switch } from 'solid-js'
import { FromTo, getFromToList } from '../../lib/population'
import classes from './Canvas.module.css'
import { Line } from './Line'
import { store } from '../../store'

type LineProps = {
    codes: number[]
}

export const Canvas: Component<LineProps> = props => {
    const [codeExists, setCodeExists] = createSignal<boolean>(false)
    const [fromToList, setFromToList] = createSignal<FromTo[]>([])

    createEffect(async () => {
        if (props.codes.length === 0) {
            setCodeExists(false)
            return
        }
        setCodeExists(true)
        const populations = await store.getPopulations(props.codes[0])
        setFromToList(getFromToList(populations))
    })

    return (
        <Switch>
            <Match when={codeExists()}>
                <div class={classes.canvas}>
                    <Line fromToList={fromToList()} />
                </div>
            </Match>
            <Match when={!codeExists()}>
                <div class={classes.canvas}>empty</div>
            </Match>
        </Switch>
    )
}
