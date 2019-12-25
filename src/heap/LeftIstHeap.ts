import { LeftIstHeapNodeInterface, LeftIstHeapInterface } from './types'

export class LeftIstHeapNode implements LeftIstHeapNodeInterface {
    element: any
    left: LeftIstHeapNodeInterface | null
    right: LeftIstHeapNodeInterface | null
    npl: number
    constructor (val: any) {
        this.element = val
        this.left = null
        this.right = null
        this.npl = 0
    }
}

export class LeftIstHeap implements LeftIstHeapInterface {
    root: LeftIstHeapNodeInterface | null

    constructor () {
        this.root = null
    }

    merge (h2: LeftIstHeapInterface): void {
        this.root = this._merge(this.root, h2.root)
    }

    _merge (h1: LeftIstHeapNodeInterface | null, h2: LeftIstHeapNodeInterface | null): LeftIstHeapNodeInterface | null {
        if (!h1) {
            return h2
        }
        if (!h2) {
            return h1
        }
        if (h1.element > h2.element) {
            [h1, h2] = [h2, h1]
        }
        if (!h1.left) {
            h1.left = h2
        } else {
            h1.right = this._merge(h1.right, h2) as LeftIstHeapNodeInterface
            if (h1.left.npl < h1.right.npl) {
                [h1.left, h1.right] = [h1.right, h1.left]
            }
            h1.npl = h1.right.npl + 1
        }

        return h1
    }

    insert (val: any): void {
        let s = new LeftIstHeapNode(val)
        this.root = this._merge(this.root, s)
    }

    deleteMin (): LeftIstHeapNodeInterface | null {
        if (!this.root) {
            return null
        }
        let [ret, left, right] = [this.root, this.root.left, this.root.right]
        this.root = this._merge(left, right)

        return ret
    }

    print (): void {
        this._print(this.root, 0)
    }

    _print (node: LeftIstHeapNodeInterface | null, tabIdx: number) {
        let prex = '|--'
        let tab = '    '.repeat(tabIdx)
        if (!node) {
            return console.log(tab + prex + 'null(-1)')
        } else if (tabIdx === 0) {
            console.log(node.element + `(${node.npl})`)
        } else {
            console.log(tab + prex + node.element + `(${node.npl})`)
        }
        this._print(node.left, tabIdx + 1)
        this._print(node.right, tabIdx + 1)
    }
}
