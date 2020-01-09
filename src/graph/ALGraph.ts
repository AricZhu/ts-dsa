import { NodeInterface } from '../list_stack_queue/types'
import { NodeElement } from '../list_stack_queue/List'
import { ALGraphInterface } from './types'

export class ALGraph implements ALGraphInterface {
    vertexs: NodeInterface[]
    constructor () {
        this.vertexs = []
    }
    _findVertex (val: any): NodeInterface | undefined {
        return this.vertexs.find(el => el.element === val)
    }
    addVertex (val: any): void {
        if (!this._findVertex(val)) {
            this.vertexs.push(new NodeElement(val))
        }
    }
    addEdge (from: any, to: any): void {
        let vertex = this._findVertex(from)
        if (vertex) {
            let tmp = vertex
            while (tmp.next && tmp.element !== to) {
                tmp = tmp.next
            }
            if (tmp.element !== to) {
                tmp.next = new NodeElement(to)
            }
        }
    }
    print (): void {
        for (let [i, len] = [0, this.vertexs.length]; i < len; i++) {
            let [ele, tmp]: [NodeInterface[], NodeInterface | null] = [[this.vertexs[i].element], this.vertexs[i].next]
            while (tmp) {
                ele.push(tmp.element)
                tmp = tmp.next
            }
            console.log(ele.join(' ---> '))
        }
    }
}
