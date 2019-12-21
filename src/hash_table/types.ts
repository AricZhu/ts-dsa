import { NodeInterface, ListInterface } from '../list_stack_queue/types'

export enum KindOfOpenAddressNode {
    Legitimate = 'Legitimate', Empty = 'Empty', Deleted = 'Deleted'
}

export interface OpenAddressNode {
    element: any
    info: KindOfOpenAddressNode
}

export interface HashTblWithSeparateChainInterface {
    size: number
    theLists: ListInterface[]
    calHash (val: number): number
    find (val: number): NodeInterface | null
    insert (val: number): NodeInterface
    print (): void
}

export interface HashTblWithOpenAddressInterface {
    size: number
    theList: OpenAddressNode[]
    calHash (val: number): number
    find (val: number): OpenAddressNode
    insert (val: number): void
    print (): void
}
