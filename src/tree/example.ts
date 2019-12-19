import { BinarySearchTree } from './BinarySearchTree'
import { AVLTree } from './AVLTree'

console.log('========== 二叉搜索树测试 ==========')
let binaryNodes: number[] = [6, 2, 8, 1, 3, 5]
let myTree: BinarySearchTree = new BinarySearchTree()
binaryNodes.forEach(el => myTree.insert(el))
console.log(`二叉搜索树初始化：datas: ${binaryNodes}`)
myTree.print()

console.log('删除元素 2:')
myTree.delete(2)
myTree.print()

console.log('========== AVL 树测试 ==========')
let avlNodes: number[] = [3, 2, 1, 4, 5, 6, 7, 16, 15, 14, 13, 12, 11, 10, 8, 9]
let myAvlTree: AVLTree = new AVLTree()
avlNodes.forEach(el => myAvlTree.insert(el))
myAvlTree.print()
console.log('========== end ==========')
