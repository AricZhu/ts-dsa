import { NodeInterface } from '../list_stack_queue/types'

export interface ALGraphInterface {
    vertexs: NodeInterface[],
    addVertex (val: any): void,
    addEdge (from: any, to: any): void,
    print (): void
}
