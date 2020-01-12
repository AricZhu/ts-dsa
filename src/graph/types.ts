export class GraphNode {
    element: string | number
    next: GraphNode | null
    constructor (val: string | number) {
        this.element = val
        this.next = null
    }
}

export class GraphWeightNode {
    element: string | number
    weight: number
    next: GraphWeightNode | null
    constructor (val: string | number, weight: number = 0) {
        this.element = val
        this.weight = weight
        this.next = null
    }
}

export interface ALGraphInterface {
    vertexs: GraphNode[],
    addVertex (val: any): void,
    addEdge (from: any, to: any): void,
    findVertex (val: any): GraphNode | undefined,
    print (): void
}

export interface ALWeightGraphInterface {
    vertexs: GraphWeightNode[],
    addVertex (val: any): void,
    addEdge (from: any, to: any, weight: number): void,
    findVertex (val: any): GraphWeightNode | undefined,
    print (): void
}
