import { calcUnit } from './math'

describe('calcUnit', () => {
    test('min と max から、一つあたりの高さと繰り返し数を取得する', () => {
        const [unit, count] = calcUnit(5143, 24996)

        expect(unit).toBe(3000)
        expect(count).toBe(6)
    })
})
