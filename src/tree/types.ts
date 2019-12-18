export class TreeNode {
    element: any
    left: TreeNode | null
    right: TreeNode | null
    constructor (val: any = undefined, left: TreeNode | null = null, right: TreeNode | null = null) {
        this.element = val
        this.left = left
        this.right = right
    }
}

export class AVLNode {
    element: any
    left: AVLNode | null
    right: AVLNode | null
    height: number
    constructor (val: any = undefined, left: AVLNode | null = null, right: AVLNode | null = null, height: number = 0) {
        this.element = val
        this.left = left
        this.right = right
        this.height = height
    }
}

export interface BinarySearchTreeInterface {
    root: TreeNode | null
    makeEmpty (): void
    find (val: any): TreeNode | null
    findMin (): TreeNode | null
    findMax (): TreeNode | null
    insert (val: any): TreeNode
    delete (val: any): TreeNode | null
    print (): void
}

export interface AVLTreeInterface {
    root: AVLNode | null
    insert (val: any): AVLNode
    getHeight (node: AVLNode | null): number
    singleRotateWithLeft (node: AVLNode): AVLNode
    singleRotateWithRight (node: AVLNode): AVLNode
    doubleRotateWithLeft (node: AVLNode): AVLNode
    doubleRotateWithRight (node: AVLNode): AVLNode
    print (): void
}
