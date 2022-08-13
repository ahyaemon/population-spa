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

describe('min', () => {
    test('指定した code のリストに対する Populations の中から最小の値を取得する', () => {
        const store = createPopulationStore(transitions)
        expect(store.min([2, 3])).toStrictEqual(300)
    })
})

describe('max', () => {
    test('指定した code のリストに対する Populations の中から最大の値を取得する', () => {
        const store = createPopulationStore(transitions)
        expect(store.max([2, 3])).toStrictEqual(900)
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
