import { Component, For } from 'solid-js'
import classes from './Prefectures.module.css'
import { colors } from '../lib/colors'

type PrefecturesProps = {
    prefectures: { code: number; name: string }[]
    selectedCodes: number[]
    setCodes: (callback: (codes: number[]) => number[]) => void
}

export const Prefectures: Component<PrefecturesProps> = props => {
    const addCode = (code: number) => {
        props.setCodes(codes => [...codes, code])
    }

    const removeCode = (code: number) => {
        props.setCodes(codes => codes.filter(it => it !== code))
    }

    return (
        <div class={classes.prefectures}>
            <For each={props.prefectures}>
                {prefecture => {
                    return (
                        <label
                            class={classes.item}
                            style={createStyle(
                                props.selectedCodes,
                                prefecture.code
                            )}
                        >
                            <input
                                type="checkbox"
                                onClick={e => {
                                    if (e.currentTarget.checked) {
                                        addCode(prefecture.code)
                                    } else {
                                        removeCode(prefecture.code)
                                    }
                                }}
                            />
                            {prefecture.name}
                        </label>
                    )
                }}
            </For>
        </div>
    )
}

function createStyle(codes: number[], code: number): string {
    const index = codes.indexOf(code)
    const color = index === -1 ? 'black' : colors[index]
    return `color: ${color};`
}
