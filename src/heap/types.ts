export interface BinaryHeapInterface {
    size: number
    elements: any[]
    isEmpty (): boolean
    insert (val: any): void
    deleteMin (): any
    print (): void
}