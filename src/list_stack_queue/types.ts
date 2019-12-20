// list（表）结构的类型定义
export interface NodeInterface {
    element: any
    next: NodeInterface | null
}

export interface ListInterface {
    header: NodeInterface
    isEmpty (): boolean
    isLast (pos: NodeInterface): boolean
    find (val: any): NodeInterface | null
    delete (val: any): NodeInterface | null
    findPrevious (val: any): NodeInterface
    insert (val: any): NodeInterface
    toString (): string
    print (): void
}

// stack（栈）结构的类型定义
export interface StackInterface {
    isEmpty (): boolean
    makeEmpty (): void
    push (val: any): void
    pop (): any
}

// queue（队列）结构的类型定义
export interface QueueInterface {
    isEmpty (): boolean
    enQueue (val: any): void
    deQueue (): any
    printQueue (): void
}
