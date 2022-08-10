import {Component, createSignal, For, onMount} from "solid-js";
import {
    FromTo,
    getFromToList,
    getPopulationsOfAll,
} from "../../lib/population";
import classes from "./Line.module.css"
import {Bar} from "./Bar";
import {getPopulation} from "../../api";

export const Line: Component = () => {

    const [min, setMin] = createSignal<number>(0)
    const [max, setMax] = createSignal<number>(0)
    const [fromToList, setFromToList] = createSignal<FromTo[]>([])

    onMount(async () => {
        const populationApiResult = await getPopulation(1)
        const populations = getPopulationsOfAll(populationApiResult)
        setFromToList(getFromToList(populations))
        setMin(Math.min(...populations.map(p => p.value)))
        setMax(Math.max(...populations.map(p => p.value)))
    })

    return (
        <div class={classes.graph}>
            <For each={fromToList()}>{ fromTo =>(
                <Bar min={min()} max={max()} fromTo={fromTo}/>
            )}</For>
        </div>
    )
}

