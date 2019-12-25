export interface BinaryHeapInterface {
    size: number
    elements: any[]
    isEmpty (): boolean
    insert (val: any): void
    deleteMin (): any
    print (): void
}

export interface LeftIstHeapNodeInterface {
    element: any
    left: LeftIstHeapNodeInterface | null
    right: LeftIstHeapNodeInterface | null
    npl: number
}

export interface LeftIstHeapInterface {
    root: LeftIstHeapNodeInterface | null
    merge (h2: LeftIstHeapInterface): void
    insert (val: any): void
    deleteMin (): LeftIstHeapNodeInterface | null
    print (): void
}
