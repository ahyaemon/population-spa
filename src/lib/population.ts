export type Population = {
    year: number
    value: number
}

export type FromTo = {
    from: number
    to: number
}

export function getFromToList(populations: Population[]): FromTo[] {
    return populations
        .slice(1)
        .map((p, i) => ({ from: populations[i].value, to: p.value }))
}
