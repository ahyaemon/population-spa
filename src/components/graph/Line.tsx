import {
    Component,
    createEffect,
    createSignal,
    For,
    Match,
    Switch,
} from 'solid-js'
import {
    FromTo,
    getFromToList,
    getPopulationsOfAll,
} from '../../lib/population'
import classes from './Line.module.css'
import { Bar } from './Bar'
import { getPopulation } from '../../api'

type LineProps = {
    codes: number[]
}

export const Line: Component<LineProps> = props => {
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
        const populationApiResult = await getPopulation(props.codes[0])
        const populations = getPopulationsOfAll(populationApiResult)
        setFromToList(getFromToList(populations))
        setMin(Math.min(...populations.map(p => p.value)))
        setMax(Math.max(...populations.map(p => p.value)))
    })

    return (
        <Switch>
            <Match when={codeExists()}>
                <div class={classes.graph}>
                    <For each={fromToList()}>
                        {fromTo => (
                            <Bar min={min()} max={max()} fromTo={fromTo} />
                        )}
                    </For>
                </div>
            </Match>
            <Match when={!codeExists()}>
                <div class={classes.graph}>empty</div>
            </Match>
        </Switch>
    )
}
