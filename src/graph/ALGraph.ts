import { GraphNode, GraphWeightNode, ALGraphInterface, ALWeightGraphInterface } from './types'

export class ALGraph implements ALGraphInterface {
    vertexs: GraphNode[]
    constructor () {
        this.vertexs = []
    }
    findVertex (val: any): GraphNode | undefined {
        return this.vertexs.find(el => el.element === val)
    }
    addVertex (val: any): void {
        if (!this.findVertex(val)) {
            this.vertexs.push(new GraphNode(val))
        }
    }
    addEdge (from: any, to: any): void {
        let vertex = this.findVertex(from)
        if (vertex) {
            let tmp = vertex
            while (tmp.next && tmp.element !== to) {
                tmp = tmp.next
            }
            if (tmp.element !== to) {
                tmp.next = new GraphNode(to)
            }
        }
    }
    print (): void {
        for (let [i, len] = [0, this.vertexs.length]; i < len; i++) {
            let [ele, tmp]: [(string | number)[], GraphNode | null] = [[this.vertexs[i].element], this.vertexs[i].next]
            while (tmp) {
                ele.push(tmp.element)
                tmp = tmp.next
            }
            console.log(ele.join(' ---> '))
        }
    }
}

export class ALWeightGraph implements ALWeightGraphInterface {
    vertexs: GraphWeightNode[]
    constructor () {
        this.vertexs = []
    }
    addVertex (val: any): void {
        if (!this.findVertex(val)) {
            this.vertexs.push(new GraphWeightNode(val))
        }
    }
    addEdge (from: any, to: any, weight: number): void {
        let v = this.findVertex(from)
        if (v) {
            let tmp = v
            while (tmp.next) {
                tmp = tmp.next
            }
            tmp.next = new GraphWeightNode(to, weight)
        }
    }
    findVertex (val: any): GraphWeightNode | undefined {
        return this.vertexs.find(el => el.element === val)
    }
    print (): void {
        for (let [i, len] = [0, this.vertexs.length]; i < len; i++) {
            let ele: string[] = [`${this.vertexs[i].element}(${this.vertexs[i].weight})`]
            let tmp: GraphWeightNode | null = this.vertexs[i].next
            while (tmp) {
                ele.push(`${tmp.element}(${tmp.weight})`)
                tmp = tmp.next
            }
            console.log(ele.join(' ---> '))
        }
    }
}
