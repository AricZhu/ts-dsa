import { QueueInterface } from './types'

export class Queue implements QueueInterface {
    private front: number
    private rear: number
    private array: any[]
    constructor () {
        this.front = 0
        this.rear = -1
        this.array = []
    }
    isEmpty (): boolean {
        return this.front > this.rear
    }
    enQueue (val: any): void {
        this.array[++this.rear] = val
    }
    deQueue (): any {
        if (this.isEmpty()) {
            throw new Error('queue is empty!')
        } else {
            return this.array[this.front++]
        }
    }
    printQueue (): void {
        let ret = []
        for (let i = this.front; i <= this.rear; i++) {
            ret.push(this.array[i])
        }
        console.log(ret.join('--->'))
    }
}
