import { TreeNode, BinarySearchTreeInterface } from './types'

export class BinarySearchTree implements BinarySearchTreeInterface {
    root: TreeNode | null
    constructor (val: any = undefined, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.root = new TreeNode(val, left, right)
    }
    makeEmpty (): void {
        this.root = null
    }
    find (val: any): TreeNode | null {
        return this.findByNode(val, this.root)
    }
    private findByNode (val: any, node: TreeNode | null): TreeNode | null {
        if (node === null || node.element === val) {
            return node
        } else if (node.element > val) {
            return this.findByNode(val, node.left)
        } else {
            return this.findByNode(val, node.right)
        }
    }
    findMin (): TreeNode | null {
        return this._findMinByNode(this.root)
    }
    private _findMinByNode (node: TreeNode | null): TreeNode | null {
        if (node) {
            while (node.left) {
                node = node.left
            }
        }

        return node
    }
    findMax (): TreeNode | null {
        let node = this.root
        if (node) {
            while (node.right) {
                node = node.right
            }
        }

        return node
    }
    insert (val: any): TreeNode {
        return this.root = this._insertByNode(val, this.root)
    }
    private _insertByNode (val: any, node: TreeNode | null): TreeNode {
        if (node === null) {
            node = new TreeNode(val)
        }
        if (node.element > val) {
            node.left = this._insertByNode(val, node.left)
        } else if (node.element < val) {
            node.right = this._insertByNode(val, node.right)
        }

        return node
    }
    delete (val: any): TreeNode | null {
        return this.root = this._deleteByNode(val, this.root)
    }
    private _deleteByNode (val: any, node: TreeNode | null): TreeNode | null {
        if (node === null) {
            return null
        }
        if (val < node.element) {
            node.left = this._deleteByNode(val, node.left)
        } else if (val > node.element) {
            node.right = this._deleteByNode(val, node.right)
        } else {
            if (!node.left && !node.right) {
                node = null
            } else if (node.left && !node.right) {
                node = node.left
            } else if (!node.left && node.right) {
                node = node.right
            } else {
                let temp = this._findMinByNode(node.right)
                node.element = (temp as TreeNode).element
                node.right = this._deleteByNode(temp, node.right)
            }
        }

        return node
    }

    print (): void {
        this._printByNode(this.root, 0)
    }

    private _printByNode (node: TreeNode | null, tabIndex: number): void {
        let tabStr: string = '  '.repeat(tabIndex) + (tabIndex > 0 ? ' ' + '|--' : '')
        if (node === null) {
            return console.log(tabStr + 'null')
        }
        console.log(tabStr + node.element)
        if (node.left || node.right) {
            this._printByNode(node.left, tabIndex + 1)
            this._printByNode(node.right, tabIndex + 1)
        }
    }
}
