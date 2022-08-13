import { createSignal } from 'solid-js'
import { Population } from './lib/population'
import { fetchPopulations } from './api'

type PopulationTransition = {
    code: number
    populations: Population[]
}

function getAllValues(transitions: PopulationTransition[]): number[] {
    return transitions.flatMap(it => it.populations).map(it => it.value)
}

export function createPopulationStore(initialValue: PopulationTransition[]) {
    const [store, setStore] = createSignal<PopulationTransition[]>(initialValue)

    return {
        // FIXME 全ての transitions から min を出してしまっているから、選択中のもののみで計算する
        // FIXME メモ化
        getMin(): number {
            return Math.min(...getAllValues(store()))
        },
        // FIXME 全ての transitions から max を出してしまっているから、選択中のもののみで計算する
        // FIXME メモ化
        getMax(): number {
            return Math.max(...getAllValues(store()))
        },
        async getPopulations(
            code: number,
            fetch: (code: number) => Promise<Population[]> = fetchPopulations
        ): Promise<Population[]> {
            const transition = store().find(it => it.code === code)

            if (transition === undefined) {
                const populations = await fetch(code)
                setStore(it => [...it, { code, populations }])
                return populations
            }

            return transition.populations
        },

        setStore,
    }
}

export const store = createPopulationStore([])
