import { BinaryHeap } from './BinaryHeap'

console.log('========== 二叉堆测试 ==========')
let myBinaryHeap = new BinaryHeap()
console.log(`insert data: ${[13, 21, 16, 24, 31, 19, 68, 65, 26, 32]}`)
let data1 = [13, 21, 16, 24, 31, 19, 68, 65, 26, 32]
data1.forEach(el => myBinaryHeap.insert(el))
myBinaryHeap.print()
console.log('insert data: 14')
myBinaryHeap.insert(14)
myBinaryHeap.print()
console.log(`delete min value: ${myBinaryHeap.deleteMin()}`)
myBinaryHeap.print()
console.log('========== end ==========')
