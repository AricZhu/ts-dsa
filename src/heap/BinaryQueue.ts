import { BinaryQueueNodeInterface, BinaryQueueInterface } from './types'

export class BinaryQueueNode implements BinaryQueueNodeInterface {
    element: any
    leftChild: BinaryQueueNodeInterface | null
    nextSibling: BinaryQueueNodeInterface | null

    constructor (val: any) {
        this.element = val
        this.leftChild = null
        this.nextSibling = null
    }
}

export class BinaryQueue implements BinaryQueueInterface {
    currentSize: number
    theTree: (BinaryQueueNodeInterface | null)[]

    constructor () {
        this.currentSize = 0
        this.theTree = []
    }

    mergeBinQueue (H: BinaryQueueInterface):void {
        let carry: BinaryQueueNodeInterface | null = null
        this.currentSize += H.currentSize
        for (let i = 0; i < this.currentSize; i++) {
            switch (Number(!!this.theTree[i]) + Number(!!H.theTree[i]) * 2 + Number(!!carry) * 4) {
                // h1 for this.theTree[i], h2 for H.theTree[i]
                case 0: /* none exists */
                    break
                case 1: /* only h1 exists */
                    break
                case 2: /* only h2 exists */
                    this.theTree[i] = H.theTree[i]
                    H.theTree[i] = null
                    break
                case 3: /* only h1, h2 exists */
                    carry = this.mergeNode(this.theTree[i], H.theTree[i])
                    this.theTree[i] = H.theTree[i] = null
                    break
                case 4: /* only carry exists */
                    this.theTree[i] = carry
                    carry = null
                    break
                case 5: /* only h1, carry exists */
                    carry = this.mergeNode(this.theTree[i], carry)
                    this.theTree[i] = null
                    break
                case 6: /* only h2, carry exists */
                    carry = this.mergeNode(H.theTree[i], carry)
                    H.theTree[i] = null
                    break
                case 7: /* h1, h2, carry exists */
                    let temp = this.theTree[i]
                    this.theTree[i] = carry
                    carry = this.mergeNode(temp, H.theTree[i])
                    temp = H.theTree[i] = null
                    break
            }
        }
    }

    mergeNode (h1: BinaryQueueNodeInterface | null, h2: BinaryQueueNodeInterface | null): BinaryQueueNodeInterface | null {
        if (!h1) {
            return h2
        }
        if (!h2) {
            return h1
        }
        if (h1.element > h2.element) {
            return this.mergeNode(h2, h1)
        }
        h2.nextSibling = h1.leftChild
        h1.leftChild = h2

        return h1
    }

    deleteMin (): BinaryQueueNodeInterface | null {
        if (!this.currentSize) {
            return null
        }
        let [minIdx, minNode, minVal]: [number, BinaryQueueNodeInterface | null, number] = [0, null, 9999]
        for (let i = 0; i < this.currentSize; i++) {
            if (this.theTree[i] && (this.theTree[i] as BinaryQueueNodeInterface).element < minVal ) {
                [minIdx, minNode, minVal] = [i, this.theTree[i], (this.theTree[i] as BinaryQueueNodeInterface).element]
            }
        }
        let oldNode = (minNode as BinaryQueueNodeInterface).leftChild
        this.theTree[minIdx] = null
        let newH = new BinaryQueue()
        newH.currentSize = minIdx
        for (let j = minIdx - 1; j >= 0; j--) {
            newH.theTree[j] = oldNode
            oldNode = (oldNode as BinaryQueueNodeInterface).nextSibling
        }
        this.mergeBinQueue(newH)

        minNode && (minNode.leftChild = null)
        return minNode
    }

    print (): void {
        for (let i = 0; i < this.currentSize; i++) {
            console.log(`${i}: ${JSON.stringify(this.theTree[i])}`)
        }
    }
}
