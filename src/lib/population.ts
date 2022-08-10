export type Population = {
    year: number,
    value: number,
    rate: number,
}

export type PopulationOfAll = Omit<Population, 'rate'>

export type PopulationApiResultType = {
    message: null,
    result: {
        boundaryYear: number,
        data: [
            {
                label: '総人口',
                data: PopulationOfAll[],
            },
            {
                label: '年少人口',
                data: Population[],
            }
        ]
    }
}

export function getPopulationsOfAll(
    populationApiResult: PopulationApiResultType,
): PopulationOfAll[] {
    const one = populationApiResult.result.data.find((it) => it.label === '総人口')
    if (one) {
        return one.data
    }
    return []
}

export type FromTo = {
    from: number,
    to: number,
}

export function getFromToList(populations: PopulationOfAll[]): FromTo[] {
    return populations
        .slice(1)
        .map((p, i) => ({ from: populations[i].value, to: p.value }))
}
