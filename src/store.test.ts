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

const transition3 = {
    code: 3,
    populations: [
        { year: 2000, value: 500 },
        { year: 2010, value: 400 },
        { year: 2020, value: 300 },
    ],
}

const transitions = [transition1, transition2, transition3]

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

describe('getTransitions', () => {
    test('すでに存在する code の場合、それに対応する transition を取得する', async () => {
        const store = createPopulationStore(transitions)

        const result = await store.getTransitionsByCodes([1])

        expect(result).toStrictEqual([transition1])
    })

    test('存在しない code の場合、fetch してから transition を取得する', async () => {
        const store = createPopulationStore(transitions)

        const transition4 = {
            code: 4,
            populations: [
                { year: 2000, value: 100 },
                { year: 2010, value: 200 },
                { year: 2020, value: 300 },
            ],
        }

        const result = await store.getTransitionsByCodes(
            [transition4.code],
            async () => transition4.populations
        )

        expect(result).toStrictEqual([transition4])
    })
})
