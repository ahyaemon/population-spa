import { Component, For, splitProps } from 'solid-js'
import classes from './Prefectures.module.css'

type PrefecturesProps = {
    prefectures: { code: number; name: string }[]
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
                {prefecture => (
                    <label class={classes.item}>
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
                )}
            </For>
        </div>
    )
}
