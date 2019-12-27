import { BinaryHeap } from './BinaryHeap'
import { LeftIstHeap  } from './LeftIstHeap'
import { BinaryQueueNode, BinaryQueue } from './BinaryQueue'

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

console.log('========== 左式堆测试 ==========')
let h1 = new LeftIstHeap()
console.log(`h1 insert data: ${[3, 10, 8, 21, 14, 17, 23, 26]}`)
let d1 = [3, 10, 8, 21, 14, 17, 23, 26]
d1.forEach(el => h1.insert(el))
console.log('h1: ')
h1.print()

let h2 = new LeftIstHeap()
console.log(`h2 insert data: ${[6, 12, 7, 18, 24, 37, 18, 33]}`)
let d2 = [6, 12, 7, 18, 24, 37, 18, 33]
d2.forEach(el => h2.insert(el))
console.log('h2: ')
h2.print()

console.log('merge h2 into h1:')
h1.merge(h2)
h1.print()

console.log('========== 二项队列测试 ==========')
console.log('init myBQ1:')
let myBQ1 = new BinaryQueue()
myBQ1.currentSize = 3
myBQ1.theTree[0] = null
myBQ1.theTree[1] = new BinaryQueueNode(16)
myBQ1.theTree[1].leftChild = new BinaryQueueNode(18)
myBQ1.theTree[2] = new BinaryQueueNode(12)
myBQ1.theTree[2].leftChild = new BinaryQueueNode(24)
myBQ1.theTree[2].leftChild.nextSibling = new BinaryQueueNode(51)
myBQ1.theTree[2].leftChild.leftChild = new BinaryQueueNode(65)
myBQ1.print()

console.log('init myBQ2:')
let myBQ2 = new BinaryQueue()
myBQ2.currentSize = 3
myBQ2.theTree[0] = new BinaryQueueNode(13)
myBQ2.theTree[1] = new BinaryQueueNode(14)
myBQ2.theTree[1].leftChild = new BinaryQueueNode(26)
myBQ2.theTree[2] = new BinaryQueueNode(23)
myBQ2.theTree[2].leftChild = new BinaryQueueNode(24)
myBQ2.theTree[2].leftChild.nextSibling = new BinaryQueueNode(51)
myBQ2.theTree[2].leftChild.leftChild = new BinaryQueueNode(65)
myBQ2.print()

console.log('merge myBQ2 into myBQ1.')
myBQ1.mergeBinQueue(myBQ2)
console.log('after merge, the myBQ1:')
myBQ1.print()
console.log('after merge, the myBQ2:')
myBQ2.print()
console.log('========== end ==========')
