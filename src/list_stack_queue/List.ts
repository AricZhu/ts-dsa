import { NodeInterface, ListInterface } from './types'

export class NodeElement implements NodeInterface {
    element: any
    next: NodeInterface | null
    constructor (val: any = undefined) {
        this.element = val
        this.next = null
    }
}

export class List implements ListInterface {
    header: NodeInterface
    constructor () {
        this.header = new NodeElement(undefined)
    }
    isEmpty (): boolean {
        return this.header.next === null
    }
    isLast (pos: NodeInterface): boolean {
        return pos.next === null
    }
    find (val: any): NodeInterface | null {
        let pos: NodeInterface | null = this.header.next
        while (pos !== null && pos.element !== val) {
            pos = pos.next
        }

        return pos
    }
    delete (val: any): NodeInterface | null {
        let pos: NodeInterface | null = null
        let prev: NodeInterface = this.findPrevious(val)
        if (!this.isLast(prev)) {
            pos = prev.next
            prev.next = (pos as NodeInterface).next
        }

        return pos
    }
    findPrevious (val: any): NodeInterface {
        let pos: NodeInterface = this.header
        while (pos.next && pos.next.element !== val) {
            pos = pos.next
        }

        return pos
    }
    insert (val: any): NodeInterface {
        let newPos: NodeInterface = new NodeElement(val)
        let temp = this.header
        while (temp.next) {
            temp = temp.next
        }
        temp.next = newPos

        return newPos
    }
    toString (): string {
        let ret: string[] = []
        let pos: NodeInterface | null = this.header
        while (pos) {
            ret.push(String(pos.element))
            pos = pos.next
        }
        return ret.join(' ---> ')
    }
    print (): void {
        console.log(this.toString())
    }
}
