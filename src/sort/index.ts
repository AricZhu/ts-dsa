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

// 堆排序
// 插入一个元素并保持堆序
export function insertHeapEle (arr: number[], val: number): void {
    if (arr.length === 0) {
        arr[1] = val
        return
    }
    let iPos = arr.length
    let pPos = Math.floor(iPos / 2)
    while (pPos > 0 && val > arr[pPos]) {
        arr[iPos] = arr[pPos]
        iPos = pPos
        pPos = Math.floor(iPos / 2)
    }
    arr[iPos] = val
}

// 堆排序
export function heapSort (arr: number[], n: number): number[] {
    let size = n
    while (size >= 1) {
        [arr[1], arr[size]] = [arr[size], arr[1]]
        size--
        filterDown(arr, size)
    }

    return arr
}

// 调整堆的根元素，使其保持堆序
function filterDown (arr: number[], size: number): void {
    let [iPos, val] = [1, arr[1]]
    while (iPos * 2 + 1 <= size) {
        let [leftChild, rightChild] = [iPos * 2, iPos * 2 + 1]
        if (val > arr[leftChild] && val > arr[rightChild]) {
            break
        } else if (arr[leftChild] > arr[rightChild]) {
            arr[iPos] = arr[leftChild]
            iPos = leftChild
        } else {
            arr[iPos] = arr[rightChild]
            iPos = rightChild
        }
    }
    if (iPos * 2 + 1 <= size || iPos * 2 > size || val > arr[iPos * 2]) {
        arr[iPos] = val
    } else {
        arr[iPos] = arr[2 * iPos]
        arr[2 * iPos] = val
    }
}
