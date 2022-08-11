import { FromTo, getFromToList, Population } from './population'

describe('getFromToList', () => {
    test('人口推移から From To のリストを作成', () => {
        const populations: Population[] = [
            { year: 2010, value: 1000 },
            { year: 2015, value: 1500 },
            { year: 2020, value: 2000 },
        ]

        const expected: FromTo[] = [
            { from: 1000, to: 1500 },
            { from: 1500, to: 2000 },
        ]

        expect(getFromToList(populations)).toStrictEqual(expected)
    })
})
