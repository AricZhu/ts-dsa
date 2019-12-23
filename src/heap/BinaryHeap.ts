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
        // TODO
    }

    print (): void {
        console.log(this.elements.slice(1, this.size).join(' '))
    }
}
