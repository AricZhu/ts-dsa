/*
* 插入排序
* 时间复杂度：O(N * N)
*/
export function insert_sort (arr: number[], n: number): number[] {
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
