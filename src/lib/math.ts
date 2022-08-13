export function calcUnit(
    min: number,
    max: number
): [unit: number, count: number] {
    const divided = Math.floor((max - min) / 5)
    const digit = divided.toString().length
    const n = 10 ** (digit - 1)
    const unit = Math.floor(divided / n) * n
    const count = Math.floor((max - min) / unit)
    return [unit, count]
}
