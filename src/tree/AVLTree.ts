import { AVLNode, AVLTreeInterface } from './types'

export class AVLTree implements AVLTreeInterface {
    root: AVLNode | null
    constructor () {
        this.root = null
    }

    insert (val: any): AVLNode {
        return this.root = this._insertByNode(val, this.root)
    }
    private _insertByNode (val: any, node: AVLNode | null): AVLNode {
        if (node === null) {
            node = new AVLNode(val)
        } else if (val < node.element) {
            node.left = this._insertByNode(val, node.left)
            if (this.getHeight(node.left) - this.getHeight(node.right) === 2) {
                if (val < node.left.element) {
                    node = this.singleRotateWithLeft(node)
                } else {
                    node = this.doubleRotateWithLeft(node)
                }
            }
        } else if (val > node.element) {
            node.right = this._insertByNode(val, node.right)
            if (this.getHeight(node.right) - this.getHeight(node.left) === 2) {
                if (val > node.right.element) {
                    node = this.singleRotateWithRight(node)
                } else {
                    node = this.doubleRotateWithRight(node)
                }
            }
        }

        node.height = Math.max(this.getHeight(node.left), this.getHeight(node.right)) + 1

        return node
    }

    getHeight (node: AVLNode | null): number {
        if (node === null) {
            return -1
        }
        return node.height
    }

    singleRotateWithLeft (k2: AVLNode): AVLNode {
        let k1: AVLNode = k2.left as AVLNode
        k2.left = k1.right
        k1.right = k2

        k2.height = Math.max(this.getHeight(k2.left), this.getHeight(k2.right)) + 1
        k1.height = Math.max(this.getHeight(k1.left), k2.height) + 1

        return k1
    }

    singleRotateWithRight (k2: AVLNode): AVLNode {
        let k1: AVLNode = k2.right as AVLNode
        k2.right = k1.left
        k1.left = k2

        k2.height = Math.max(this.getHeight(k2.left), this.getHeight(k2.right)) + 1
        k1.height = Math.max(k2.height, this.getHeight(k1.right)) + 1

        return k1
    }

    doubleRotateWithLeft (k3: AVLNode): AVLNode {
        k3.left = this.singleRotateWithRight(k3.left as AVLNode)
        return this.singleRotateWithLeft(k3)
    }

    doubleRotateWithRight (k3: AVLNode): AVLNode {
        k3.right = this.singleRotateWithLeft(k3.right as AVLNode)
        return this.singleRotateWithRight(k3)
    }

    print (): void {
        this._printByNode(this.root, 0)
    }

    private _printByNode (node: AVLNode | null, tabIndex: number): void {
        let tabStr: string = '  '.repeat(tabIndex) + (tabIndex > 0 ? ' ' + '|--' : '')
        if (node === null) {
            return console.log(tabStr + 'null')
        }
        console.log(tabStr + node.element + `(${node.height})`)
        if (node.left || node.right) {
            this._printByNode(node.left, tabIndex + 1)
            this._printByNode(node.right, tabIndex + 1)
        }
    }
}
