import { createSignal } from 'solid-js'
import { Population } from './lib/population'
import { fetchPopulations } from './api'

export type PopulationTransition = {
    code: number
    populations: Population[]
}

function getAllValues(transitions: PopulationTransition[]): number[] {
    return transitions.flatMap(it => it.populations).map(it => it.value)
}

export function createPopulationStore(initialValue: PopulationTransition[]) {
    const [store, setStore] = createSignal<PopulationTransition[]>(initialValue)

    const getTransition = async (
        code: number,
        fetch: typeof fetchPopulations = fetchPopulations
    ): Promise<PopulationTransition> => {
        const transition = store().find(it => it.code === code)

        if (transition === undefined) {
            const populations = await fetch(code)
            setStore(it => [...it, { code, populations }])
            return { code, populations }
        }

        return { code, populations: transition.populations }
    }

    return {
        // FIXME メモ化
        min(codes: number[]): number {
            return Math.min(
                ...getAllValues(store().filter(it => codes.includes(it.code)))
            )
        },
        // FIXME メモ化
        max(codes: number[]): number {
            return Math.max(
                ...getAllValues(store().filter(it => codes.includes(it.code)))
            )
        },
        async getTransitionsByCodes(
            codes: number[],
            fetch: typeof fetchPopulations = fetchPopulations
        ): Promise<PopulationTransition[]> {
            const promises = codes.map(code => getTransition(code, fetch))

            return Promise.all(promises)
        },
        setStore,
    }
}

export const store = createPopulationStore([])
