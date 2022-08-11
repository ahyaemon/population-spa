import { Component, createSignal, For, onMount } from 'solid-js'
import { Prefectures } from './components/Prefectures'
import { Graph } from './components/Graph'
import { Prefecture } from './lib/prefecture'
import { fetchPrefectures } from './api'

const App: Component = () => {
    const [prefectures, setPrefectures] = createSignal<Prefecture[]>([])
    const [selectedPrefectureCodes, setSelectedPrefectureCodes] = createSignal<
        number[]
    >([])

    onMount(async () => {
        const prefecturesApiResult = await fetchPrefectures()
        setPrefectures(
            prefecturesApiResult.result.map(r => ({
                code: r.prefCode,
                name: r.prefName,
            }))
        )
    })

    return (
        <div>
            人口推移
            <Prefectures
                prefectures={prefectures()}
                setCodes={setSelectedPrefectureCodes}
            />
            <Graph codes={selectedPrefectureCodes()} />
        </div>
    )
}

export default App
