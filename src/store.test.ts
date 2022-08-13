import { createPopulationStore } from './store'

const transition1 = {
    code: 1,
    populations: [
        { year: 2000, value: 100 },
        { year: 2010, value: 50 },
        { year: 2020, value: 300 },
    ],
}

const transition2 = {
    code: 2,
    populations: [
        { year: 2000, value: 300 },
        { year: 2010, value: 900 },
        { year: 2020, value: 400 },
    ],
}

const transitions = [transition1, transition2]

describe('getMin', () => {
    test('複数のPopulationTransitionの中から最小の値を見つけられる', () => {
        const store = createPopulationStore(transitions)
        expect(store.getMin()).toStrictEqual(50)
    })
})

describe('getMax', () => {
    test('複数のPopulationTransitionの中から最大の値を見つけられる', () => {
        const store = createPopulationStore(transitions)
        expect(store.getMin()).toStrictEqual(50)
    })
})

describe('getPopulations', () => {
    test('すでに存在する code の場合、それに対応する populations を取得する', async () => {
        const store = createPopulationStore(transitions)

        const populations = await store.getPopulations(1)

        expect(populations).toStrictEqual(transition1.populations)
    })

    test('存在しない code の場合、fetch してから populations を取得する', async () => {
        const store = createPopulationStore(transitions)

        const populationForCode3 = [
            { year: 2010, value: 100 },
            { year: 2020, value: 200 },
        ]

        const populations = await store.getPopulations(
            3,
            async () => populationForCode3
        )

        expect(populations).toStrictEqual(populationForCode3)
    })
})
