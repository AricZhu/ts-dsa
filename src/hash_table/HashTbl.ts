import { HashTblWithSeparateChainInterface } from './types'
import { NodeInterface, ListInterface } from '../list_stack_queue/types'
import { List } from '../list_stack_queue/List'

export class HashTblWithSeparateChain implements HashTblWithSeparateChainInterface {
    size: number
    theLists: ListInterface[]

    constructor (size: number = 13) {
        this.size = size
        this.theLists = Array.from({length: this.size}).map(el => new List())
    }

    calHash (val: number): number {
        return val % this.size
    }

    find (val: number): NodeInterface | null {
        let idx = this.calHash(val)
        return this.theLists[idx].find(val)
    }

    insert (val: number): NodeInterface {
        let idx = this.calHash(val)
        return this.theLists[idx].insert(val)
    }

    print (): void {
        for (let i = 0; i < this.size; i++) {
            console.log(`${i}: ${this.theLists[i].toString()}`)
        }
    }
}
