import {Component, createSignal, onMount} from 'solid-js';
import {Prefectures} from "./components/Prefectures";
import {Graph} from "./components/Graph";
import {Prefecture} from "./lib/prefecture";
import {getPrefectures} from "./api";

const App: Component = () => {

    const [prefectures, setPrefectures] = createSignal<Prefecture[]>([])

    onMount(async () => {
        const prefecturesApiResult = await getPrefectures()
        setPrefectures(prefecturesApiResult.result.map(r => ({ code: r.prefCode, name: r.prefName })))
    })

    return (
        <div>
            人口推移
            <Prefectures prefectures={prefectures()}/>
            <Graph/>
        </div>
    );
};

export default App;
