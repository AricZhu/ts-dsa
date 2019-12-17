import { TreeNode } from './types'
import { BinarySearchTree } from './BinarySearchTree'

let myTree: BinarySearchTree = new BinarySearchTree(6)

let data: number[] = [2, 8, 1, 3, 5]
data.forEach(el => myTree.insert(el))
console.log('二叉搜索树初始化：')
myTree.print()

console.log('删除元素 2:')
myTree.delete(2)
myTree.print()
