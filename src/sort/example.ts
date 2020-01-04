import { insertSort, shellSort, insertHeapEle, heapSort, mergeSort, quickSort } from './index'

console.log('========== 插入排序测试 ==========')
let arr1 = [34, 8, 64, 51, 32, 21]
console.log(`data is: ${arr1}`)
console.log(`after insertSort, data: ${insertSort(arr1, arr1.length)}`)

console.log('========== 希尔排序测试 ==========')
let arr2 = [81, 94, 11, 96, 12, 35, 17, 95, 28, 58, 41, 75, 15]
console.log(`data is: ${arr2}`)
console.log(`after shellSort, data: ${shellSort(arr2, arr2.length)}`)

console.log('========== 堆排序测试 ==========')
let heapElm = [31, 41, 59, 26, 53, 58, 97]
console.log(`data is: ${heapElm}`)
let arr3: number[] = []
heapElm.forEach(el => insertHeapEle(arr3, el))
console.log(`after insert, the heap is: ${arr3}`)
console.log(`after heapSort, data: ${heapSort(arr3, heapElm.length)}`)

console.log('========== 归并排序测试 ==========')
let arr4 = [1, 26, 2, 15, 38, 13, 24, 27]
console.log(`data is: ${arr4}`)
console.log(`after mergeSort, data: ${mergeSort(arr4, arr4.length)}`)

console.log('========== 快速排序测试 ==========')
let arr5 = [8, 1, 4, 9, 0, 3, 5, 2, 7, 6]
console.log(`data is: ${arr5}`)
console.log(`after quickSort, data: ${quickSort(arr5, arr5.length)}`)
console.log('========== end ==========')