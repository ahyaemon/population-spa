import { Population, PopulationOfAll } from './lib/population'

type PrefecturesApiResult = {
    message: string | null
    result: {
        prefCode: number
        prefName: string
    }[]
}

export async function getPrefectures(): Promise<PrefecturesApiResult> {
    return import('./data/prefectures.json')
}

type PopulationApiResult = {
    message: null
    result: {
        boundaryYear: number
        data: [
            {
                label: '総人口'
                data: PopulationOfAll[]
            },
            {
                label: '年少人口'
                data: Population[]
            }
        ]
    }
}

export async function getPopulation(
    code: number
): Promise<PopulationApiResult> {
    return import(`./data/${code}.json`)
}
