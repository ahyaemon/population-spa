import { Component, createSignal, For, onMount } from 'solid-js'
import { Prefectures } from './components/Prefectures'
import { Graph } from './components/Graph'
import { Prefecture } from './lib/prefecture'
import { fetchPrefectures } from './api'
import classes from './App.module.css'

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
        <div class={classes.app}>
            <div>人口推移</div>
            <div>
                <Prefectures
                    prefectures={prefectures()}
                    selectedCodes={selectedPrefectureCodes()}
                    setCodes={setSelectedPrefectureCodes}
                />
            </div>
            <div>
                <Graph codes={selectedPrefectureCodes()} />
            </div>
            <div>
                <a href="https://opendata.resas-portal.go.jp/" target="_blank">
                    出典：RESAS（地域経済分析システム）
                </a>
            </div>
            <div>
                <a
                    href="https://github.com/ahyaemon/population-spa"
                    target="_blank"
                >
                    ソースコード（GitHub）
                </a>
            </div>
        </div>
    )
}

export default App
