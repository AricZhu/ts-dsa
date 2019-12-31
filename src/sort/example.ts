import { insertSort, shellSort } from './index'

let arr1 = [34, 8, 64, 51, 32, 21]
console.log(`data is: ${arr1}`)
console.log(`after insertSort, data: ${insertSort(arr1, arr1.length)}`)

let arr2 = [81, 94, 11, 96, 12, 35, 17, 95, 28, 58, 41, 75, 15]
console.log(`data is: ${arr2}`)
console.log(`after shellSort, data: ${shellSort(arr2, arr2.length)}`)
