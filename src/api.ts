type PrefecturesApiResult = {
    message: string | null,
    result: {
            prefCode: number,
            prefName: string,
    }[],
}

export async function getPrefectures(): Promise<PrefecturesApiResult> {
    return await import("./data/prefectures.json")
}
