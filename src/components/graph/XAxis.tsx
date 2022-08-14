import { Component, createEffect, createSignal, For, Show } from 'solid-js'
import classes from './XAxis.module.css'
import { store } from '../../store'

function showYear(i: number, step: number, length: number): boolean {
    if (i % step !== 0) {
        return false
    }

    return i <= length - 3
}

export const XAxis: Component = () => {
    const step = 3
    const [style, setStyle] = createSignal<string>('')

    createEffect(() => {
        const years = store.getYears()

        if (years.length === 0) {
            return
        }

        const width = 400 / years.length
        setStyle(`width: ${width}px;`)
    })

    return (
        <div class={classes.xaxis}>
            <div class={classes.axis}>
                <For each={store.getYears()}>
                    {(year, i) => {
                        return (
                            <div class={classes.scale} style={style()}>
                                <Show
                                    when={showYear(
                                        i(),
                                        step,
                                        store.getYears().length
                                    )}
                                >
                                    <p class={classes.scaleFont}>{year}</p>
                                    <div class={classes.bar}></div>
                                </Show>
                            </div>
                        )
                    }}
                </For>
            </div>
            <div class={classes.title}>年度</div>
        </div>
    )
}
