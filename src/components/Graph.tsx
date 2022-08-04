import {Component, For} from "solid-js";
import {getFromToList, getPopulationsOfAll, PopulationApiResultType} from "../lib/population";
import {populationApiResult} from "../sample/population";
import classes from "./Graph.module.css"
import {Bar} from "./graph/Bar";

export const Graph: Component = () => {

    const populations = getPopulationsOfAll(populationApiResult as PopulationApiResultType)
    const min = Math.min(...populations.map(p => p.value))
    const max = Math.max(...populations.map(p => p.value))
    const fromToList = getFromToList(populations)

    return (
        <div class={classes.graph}>
            <For each={fromToList}>{ fromTo =>(
                <Bar min={min} max={max} from={fromTo.from} to={fromTo.to}/>
            )}</For>
        </div>
    )
}

