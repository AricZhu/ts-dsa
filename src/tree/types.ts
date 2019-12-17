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
