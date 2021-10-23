function getRandomInt(max: number): number {
    return Math.floor(Math.random() * max);
}

function swap<T>(arr: T[], idx1: number, idx2: number): void {
    const temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function shuffleArray<T>(arr: T[]): T[] {
    const shuffledArr: T[] = [...arr];
    let lastItemIdx = arr.length - 1;

    while (lastItemIdx > 0) {
        let nextIdx = getRandomInt(lastItemIdx);
        swap(shuffledArr, nextIdx, lastItemIdx--);
    }

    return shuffledArr;
}

export default shuffleArray;
