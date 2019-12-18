import { BinarySearchTree } from './BinarySearchTree'

console.log('===== 二叉搜索树测试 =====')
let rootVal = 6
let myTree: BinarySearchTree = new BinarySearchTree(rootVal)
let leafs: number[] = [2, 8, 1, 3, 5]
leafs.forEach(el => myTree.insert(el))
console.log(`二叉搜索树初始化：root: ${rootVal}, leafs: ${leafs}`)
myTree.print()

console.log('删除元素 2:')
myTree.delete(2)
myTree.print()
console.log('===== end =====')
