import { ALGraphInterface, GraphNode } from './types'
import { Queue } from '../list_stack_queue/Queue'

// 拓扑排序
// 建立顶点的入度
function setUpIndegree (graph: ALGraphInterface): {[propName: string]: number} {
    let indegree: {[propName: string]: number} = {}
    let len = graph.vertexs.length
    for (let i = 0; i < len; i++) {
        let node = graph.vertexs[i]
        indegree[node.element] = 0
        for (let j = 0; j < len; j++) {
            if (j === i) continue
            let tmp: GraphNode | null = graph.vertexs[j]
            while (tmp) {
                if (tmp.element === node.element) {
                    indegree[node.element]++
                    break
                }
                tmp = tmp.next
            }
        }
    }

    return indegree
}

function findZeroIndegreeVertex (indegree: {[propName: string]: number}): any {
    let keys = Object.keys(indegree)
    for (let i = 0; i < keys.length; i++) {
        if (indegree[keys[i]] === 0) {
            return keys[i]
        }
    }
}

function updateIndegree (graph: ALGraphInterface, indegree: {[propName: string]: number}, vertex: any) {
    let v: GraphNode | undefined | null = graph.findVertex(parseInt(vertex))
    while (v) {
        indegree[v.element]--
        v = v.next
    }
}

export function topologySort (graph: ALGraphInterface): any[] {
    let vertexs: any[] = []
    let indegree: {[propName: string]: number} = setUpIndegree(graph)
    let v = findZeroIndegreeVertex(indegree)
    while (v) {
        vertexs.push(v)
        delete indegree[v]
        updateIndegree(graph, indegree, v)
        v = findZeroIndegreeVertex(indegree)
    }
    return vertexs
}

// 无权最短路径算法
export function unWeighted (graph: ALGraphInterface, source: any): object {
    const INFINITE = 9999
    let dist: {[propName: string]: number} = {}
    let queue = new Queue()
    // 初始化源顶点到其他顶点的距离
    graph.vertexs.forEach(el => dist[el.element] = INFINITE)
    dist[source] = 0
    let tmp: GraphNode | null | undefined = (graph.findVertex(source) as GraphNode).next
    while (tmp) {
        dist[tmp.element] = 1
        queue.enQueue(tmp.element)
        tmp = tmp.next
    }
    while (!queue.isEmpty()) {
        let ele = queue.deQueue()
        tmp = (graph.findVertex(ele) as GraphNode).next
        while (tmp) {
            if (dist[tmp.element] === INFINITE) {
                dist[tmp.element] = dist[ele] + 1
                queue.enQueue(tmp.element)
            }
            tmp = tmp.next
        }
    }

    return dist
}
