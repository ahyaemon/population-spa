import {Component, For } from 'solid-js';
import {prefecturesApiResult} from "./sample/prefectures";
import {Prefectures} from "./components/Prefectures";
import {Line} from "./components/graph/Line";

const App: Component = () => {
    const prefectures = prefecturesApiResult.result.map(r => ({ code: r.prefCode, name: r.prefName }))

    return (
        <div>
            人口推移
            <Prefectures prefectures={prefectures}/>
            <Line/>
        </div>
    );
};

export default App;
