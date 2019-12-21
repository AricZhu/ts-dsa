import { HashTblWithSeparateChainInterface, KindOfOpenAddressNode, OpenAddressNode, HashTblWithOpenAddressInterface } from './types'
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

export class HashTblWithOpenAddress implements HashTblWithOpenAddressInterface {
    size: number
    theList: OpenAddressNode[]
    constructor (size: number = 13) {
        this.size = size
        this.theList = Array.from({length: this.size}).map(el => ({element: undefined, info: KindOfOpenAddressNode.Empty} as OpenAddressNode))
    }

    calHash (val: number): number {
        return val % this.size
    }

    find (val: number): OpenAddressNode {
        let pos: number
        let idx: number = 0
        pos = this.calHash(val)
        while (this.theList[pos].info !== KindOfOpenAddressNode.Empty && this.theList[pos].element !== val) {
            pos += 2 * (++idx) - 1
            if (pos >= this.size) {
                pos -= this.size
            }
        }

        return this.theList[pos]
    }

    insert (val: number): void {
        let pos: OpenAddressNode = this.find(val)
        if (pos.info !== KindOfOpenAddressNode.Legitimate) {
            pos.info = KindOfOpenAddressNode.Legitimate
            pos.element = val
        }
    }

    print (): void {
        for (let i = 0; i < this.size; i++) {
            console.log(`${i}: ${this.theList[i].info === KindOfOpenAddressNode.Legitimate ? this.theList[i].element : this.theList[i].info}`)
        }
    }
}
