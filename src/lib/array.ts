export function sequence(n: number): number[] {
    return Array.from({ length: n }, (v, k) => k)
}
