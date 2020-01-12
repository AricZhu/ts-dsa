export class GraphNode {
    element: string | number
    next: GraphNode | null
    constructor (val: string | number) {
        this.element = val
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
