import { Population } from './lib/population'

type PrefecturesApiResult = {
    message: string | null
    result: {
        prefCode: number
        prefName: string
    }[]
}

export async function fetchPrefectures(): Promise<PrefecturesApiResult> {
    return import('./data/prefectures.json')
}

export type PopulationApiResult = {
    message: null
    result: {
        boundaryYear: number
        data: [
            {
                label: '総人口'
                data: Population[]
            },
            {
                label: '年少人口'
                data: Population[]
            }
        ]
    }
}

export async function fetchPopulation(
    code: number
): Promise<PopulationApiResult> {
    return import(`./data/${code}.json`)
}

function isAll(data: { label: string }): boolean {
    return data.label === '総人口'
}

export async function fetchPopulations(code: number): Promise<Population[]> {
    const populationApiResult = await fetchPopulation(code)

    const all = populationApiResult.result.data.find(isAll)
    if (all) {
        return all.data
    }
    return []
}
