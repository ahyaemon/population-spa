import { Component, For } from 'solid-js'
import classes from './YAxis.module.css'
import { calcUnit } from '../../lib/math'
import { sequence } from '../../lib/array'

type YAxisProps = {
    min: number
    max: number
}

export const YAxis: Component<YAxisProps> = props => {
    const [unit, count] = calcUnit(props.min, props.max)
    const n = 300 / (props.max - props.min)
    const height = unit * n

    const style = `height: ${height}px;`

    return (
        <div class={classes.yaxis}>
            <div>人口数</div>
            <div>
                <For each={sequence(count - 1)}>
                    {i => (
                        <div class={classes.scale} style={style}>
                            <p class={classes.scaleFont}>
                                {unit * (count - i - 1)}
                            </p>
                            <div class={classes.bar}></div>
                        </div>
                    )}
                </For>
            </div>
        </div>
    )
}
