import { NodeInterface, ListInterface } from '../list_stack_queue/types'

export interface HashTblWithSeparateChainInterface {
    size: number
    theLists: ListInterface[]
    calHash (val: number): number
    find (val: number): NodeInterface | null
    insert (val: number): NodeInterface
    print (): void
}
