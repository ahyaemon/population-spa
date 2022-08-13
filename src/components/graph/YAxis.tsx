import { Component, createEffect, createSignal, For } from 'solid-js'
import classes from './YAxis.module.css'
import { calcUnit } from '../../lib/math'
import { sequence } from '../../lib/array'
import { store } from '../../store'

type YAxisProps = {
    codes: number[]
}

export const YAxis: Component<YAxisProps> = props => {
    const [style, setStyle] = createSignal<string>('')
    const [count, setCount] = createSignal<number>(0)
    const [unit, setUnit] = createSignal<number>(0)

    createEffect(() => {
        if (props.codes.length === 0) {
            return
        }

        const min = store.min(props.codes)
        const max = store.max(props.codes)
        const [unit, count] = calcUnit(min, max)
        const n = 300 / (max - min)
        const height = unit * n

        setStyle(`height: ${height}px;`)
        setCount(count)
        setUnit(unit)
    })

    return (
        <div class={classes.yaxis}>
            <div>人口数</div>
            <div>
                <For each={sequence(count() - 1)}>
                    {i => (
                        <div class={classes.scale} style={style()}>
                            <p class={classes.scaleFont}>
                                {unit() * (count() - i - 1)}
                            </p>
                            <div class={classes.bar}></div>
                        </div>
                    )}
                </For>
            </div>
        </div>
    )
}
