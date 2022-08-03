import {Component, For} from "solid-js";
import {populationApiResult} from "../sample/population";

type Population = {
    year: number,
    value: number,
    rate: number,
}

type PopulationOfAll = Omit<Population, "rate">

type PopulationApiResultType = {
    message: null,
    result: {
        boundaryYear: number,
        data: [
            {
                label: "総人口",
                data: PopulationOfAll[],
            },
            {
                label: "年少人口",
                data: Population[],
            }
        ]
    }
}

function getPopulationsOfAll(populationApiResult: PopulationApiResultType): PopulationOfAll[] {
    return populationApiResult.result.data.find(it => it.label === "総人口")!.data
}

export const Graph: Component = () => {

    const populations = getPopulationsOfAll(populationApiResult as PopulationApiResultType)

    return (
        <div>
            <For each={populations}>{ population =>(
                <div>
                    {population.year}年: {population.value}人<br/>
                </div>
            )}</For>
        </div>
    )
}
