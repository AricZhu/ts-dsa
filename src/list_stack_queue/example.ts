import { List } from './List'
import { ListInterface } from './types'
import { Stack } from './Stack'
import { Queue } from './Queue'

console.log('========== 链表结构测试 ==========')
let myList: ListInterface = new List()
console.log('create myList with header: undefined')

let c: any[] = [1, 2, 3, 4, 'a', 'b', 'c']
let pos: any = null
c.forEach(el => {
    pos = myList.insert(el)
})
console.log('insert [1, 2, 3, 4, "a", "b", "c"] to myList:')
myList.print()

myList.delete(1)
myList.delete(3)
myList.delete('c')
console.log('delete 1, 3, "c": ')
myList.print()

console.log('find val=4: ')
console.log(JSON.stringify(myList.find(4)))

console.log('========== 栈结构测试 ==========')
let myStack = new Stack()
console.log('元素 1 入栈.')
myStack.push('1')
console.log('元素 1 出栈: ')
console.log(myStack.pop())
console.log(`栈是否为空: ${myStack.isEmpty()}`)

console.log('========== 队列结构测试 ==========')
let myQueue = new Queue()
console.log('[1, 2, 3, 4, "a", "b", "c"] to myQueue:')
let q1: any[] = [1, 2, 3, 4, 'a', 'b', 'c']
q1.forEach(el => myQueue.enQueue(el))
myQueue.printQueue()
console.log(`dequeue an element: ${myQueue.deQueue()}`)
myQueue.printQueue()

console.log('========== end ==========')
