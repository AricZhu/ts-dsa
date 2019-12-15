import { StackInterface } from './types'

export class Stack implements StackInterface {
    private top: number
    private array: any[]
    constructor () {
        this.top = -1
        this.array = []
    }
    isEmpty (): boolean {
        return this.top === -1
    }
    makeEmpty (): void {
        this.top = -1
    }
    push (val: any): void {
        this.array[++this.top] = val
    }
    pop (): void {
        if (this.isEmpty()) {
            throw new Error('stack is empty!')
        } else {
            return this.array[this.top--]
        }
    }
}
