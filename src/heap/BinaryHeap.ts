import { BinaryHeapInterface } from './types'

class BinaryHeap implements BinaryHeapInterface {
    size: number
    elements: any[]

    constructor () {
        this.size = 0
        this.elements = []
        this.elements[0] = -9999
    }

    isEmpty (): boolean {
        return this.size === 0
    }

    insert (val: any): void {
        let i = ++this.size
        let parent = Math.floor(i / 2)
        while (this.elements[parent] > this.elements[i]) {
            this.elements[i] = this.elements[parent]
            i = parent
            parent = Math.floor(i / 2)
        }
        this.elements[i] = val
    }

    deleteMin (): any {
        if (this.isEmpty()) {
            return
        }
        let ret = this.elements[1]
        let [i, child, last] = [1, 2, this.elements[this.size--]]
        while (child <= this.size && (child + 1) <= this.size) {
            if (this.elements[child] > this.elements[child + 1]) {
                child++
            }
            if (last < this.elements[child]) {
                break
            }
            this.elements[i] = this.elements[child]
            i = child
            child = 2 * i
        }
        if (child > this.size || (child + 1) <= this.size || this.elements[child] > last) {
            this.elements[i] = last
        } else {
            this.elements[i] = this.elements[child]
            this.elements[child] = last
        }

        return ret
    }

    print (): void {
        console.log(this.elements.slice(1, this.size).join(' '))
    }
}
