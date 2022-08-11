import { Component, createEffect, createSignal, Match, Switch } from 'solid-js'
import { FromTo, getFromToList } from '../../lib/population'
import classes from './Canvas.module.css'
import { Line } from './Line'
import { getPopulations } from '../../store'

type LineProps = {
    codes: number[]
}

export const Canvas: Component<LineProps> = props => {
    const [codeExists, setCodeExists] = createSignal<boolean>(false)
    const [min, setMin] = createSignal<number>(0)
    const [max, setMax] = createSignal<number>(0)
    const [fromToList, setFromToList] = createSignal<FromTo[]>([])

    createEffect(async () => {
        if (props.codes.length === 0) {
            setCodeExists(false)
            return
        }
        setCodeExists(true)
        const populations = await getPopulations(props.codes[0])
        setFromToList(getFromToList(populations))
        setMin(Math.min(...populations.map(p => p.value)))
        setMax(Math.max(...populations.map(p => p.value)))
    })

    return (
        <Switch>
            <Match when={codeExists()}>
                <div class={classes.canvas}>
                    <Line min={min()} max={max()} fromToList={fromToList()} />
                </div>
            </Match>
            <Match when={!codeExists()}>
                <div class={classes.canvas}>empty</div>
            </Match>
        </Switch>
    )
}
