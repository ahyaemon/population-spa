import { sequence } from './array'

describe('sequence', () => {
    test('0 始まりで n 個の連続した整数のリストを作成する', () => {
        expect(sequence(3)).toStrictEqual([0, 1, 2])
    })
})
