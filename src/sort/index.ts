/*
* 插入排序
* 时间复杂度：O(N * N)
*/
// 插入排序
export function insertSort (arr: number[], n: number): number[] {
    if (n <= 1) {
        return arr
    }
    for (let i = 1; i < n; i++) {
        let [temp, j] = [arr[i], i - 1]
        for (; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = temp
    }

    return arr
}

// 希尔排序
export function shellSort (arr: number[], n: number): number[] {
    for (let incr = Math.floor(n / 2); incr > 0; incr = Math.floor(incr / 2)) {
        for (let i = incr; i < n; i++) {
            let [tmp, j] = [arr[i], i - incr]
            for (; j >= 0 && arr[j] > tmp; j -= incr) {
                arr[j + incr] = arr[j]
            }
            arr[j + incr] = tmp
        }
    }
    return arr
}
