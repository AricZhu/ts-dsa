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

// 归并排序
export function mergeSort (arr: number[], n: number): number[] {
    if (n === 1) {
        return arr
    }
    let arrL = mergeSort(arr.slice(0, Math.floor(n / 2)), Math.floor(n / 2))
    let arrR = mergeSort(arr.slice(Math.floor(n / 2), n), n - Math.floor(n / 2))
    let [lPtr, rPtr, idx] = [0, 0, 0]
    arr = []
    for (; lPtr < arrL.length && rPtr < arrR.length;) {
        if (arrL[lPtr] < arrR[rPtr]) {
            arr[idx++] = arrL[lPtr++]
        } else {
            arr[idx++] = arrR[rPtr++]
        }
    }
    arr = arr.concat(arrL.slice(lPtr, arrL.length))
    arr = arr.concat(arrR.slice(rPtr, arrR.length))

    return arr
}

// 快速排序
export function quickSort (arr: number[], n: number): number[] {
    _quickSort(arr, 0, n - 1)
    return arr
}

function _insertSort (arr: number[], start: number, end: number): void {
    if (end - start <= 0) {
        return
    }
    for (let i = start + 1; i <= end; i++) {
        let [j, temp] = [i - 1, arr[i]]
        for (; j >= start && arr[j] > temp; j--) {
            arr[j + 1] = arr[j]
        }
        arr[j + 1] = temp
    }
}

function _quickSort (arr: number[], start: number, end: number): void {
    if (end - start <= 10) {
        _insertSort(arr, start, end)
        return
    }
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] > Math.min(arr[start], arr[end]) && arr[mid] < Math.max(arr[start], arr[end])) {
        [arr[mid], arr[end]] = [arr[end], arr[mid]]
    } else if (arr[start] > Math.min(arr[mid], arr[end]) && arr[start] < Math.max(arr[mid], arr[end])) {
        [arr[start], arr[end]] = [arr[end], arr[start]]
    }
    mid = end
    let [i, j] = [start, end - 1]
    while (i < j) {
        while (arr[i] < arr[mid]) {
            i++
        }
        while (arr[j] > arr[mid]) {
            j--
        }
        if (i < j) {
            [arr[i], arr[j]] = [arr[j], arr[i]]
            i++
            j--
        } else {
            [arr[i], arr[mid]] = [arr[mid], arr[i]]
            mid = i
            break
        }
    }
    _quickSort(arr, start, mid - 1)
    _quickSort(arr, mid + 1, end)
}
