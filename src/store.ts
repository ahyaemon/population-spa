import { createSignal } from 'solid-js'
import { Population } from './lib/population'
import { fetchPopulations } from './api'

type PopulationTransition = {
    code: number
    populations: Population[]
}

const [store, setStore] = createSignal<PopulationTransition[]>([])

export async function getPopulations(code: number): Promise<Population[]> {
    const transition = store().find(it => it.code === code)

    if (transition === undefined) {
        const populations = await fetchPopulations(code)
        setStore(it => [...it, { code, populations }])
        return populations
    }

    return transition.populations
}
