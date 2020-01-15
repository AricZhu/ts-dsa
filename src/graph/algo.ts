import { ALGraphInterface, GraphNode, ALWeightGraphInterface, GraphWeightNode } from './types'
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
const INFINITE = 9999
export function unWeighted (graph: ALGraphInterface, source: any): object {
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

// Dijkstra 算法
function findMinDistVertex (dist: {[propName: string]: {know: boolean, dist: number}}) {
    let ret = undefined
    let minVal = INFINITE
    for (let key in dist) {
        if (!dist[key].know && dist[key].dist < minVal) {
            minVal = dist[key].dist
            ret = key
        }
    }

    return ret
}
function updateDist (graph: ALWeightGraphInterface, dist: {[propName: string]: {know: boolean, dist: number}}, vertex: string | number): void {
    let tmp: GraphWeightNode | undefined | null = (graph.findVertex(vertex) as GraphWeightNode).next
    while (tmp) {
        if (dist[vertex].dist + tmp.weight < dist[tmp.element].dist) {
            dist[tmp.element].dist = dist[vertex].dist + tmp.weight
        }
        tmp = tmp.next
    }
}
export function Dijkstra (graph: ALWeightGraphInterface, source: any): object {
    let dist: {[propName: string]: {know: boolean, dist: number}} = {}
    // 初始化源顶点到其他顶点的距离
    graph.vertexs.forEach(el => dist[el.element] = {know: false, dist: INFINITE})
    dist[source].dist = 0
    let v
    while (v = findMinDistVertex(dist)) {
        dist[v].know = true
        updateDist(graph, dist, v)
    }
    return dist
}

// Prim 算法
function updateDv (graph: ALWeightGraphInterface, vertex: number | string, dist: {[propName: string]: {know: boolean, dv: number, pv: string | number}}) {
    let v: GraphWeightNode | null = graph.findVertex(vertex) as GraphWeightNode
    let pv = v.element
    v = v.next
    while (v) {
        if (!dist[v.element].know && v.weight < dist[v.element].dv) {
            dist[v.element].dv = v.weight
            dist[v.element].pv = pv
        }
        v = v.next
    }
}

function findMinEdgeVertex (dist: {[propName: string]: {know: boolean, dv: number, pv: string | number}}) {
    let newVertex = ''
    let minEdge = INFINITE
    for (let key in dist) {
        if (!dist[key].know && dist[key].dv < minEdge) {
            newVertex = key
            minEdge = dist[key].dv
        }
    }

    return newVertex
}

function printDist (dist: {[propName: string]: {know: boolean, dv: number, pv: string | number}}) {
    console.log('v\tknow\tdv\tpv')
    for (let key in dist) {
        console.log(`${key}\t${dist[key].know}\t${dist[key].dv}\t${dist[key].pv}`)
    }
}

export function Prim (graph: ALWeightGraphInterface, vertex: number | string): {[propName: string]: {know: boolean, dv: number, pv: string | number}} {
    let dist: {[propName: string]: {know: boolean, dv: number, pv: string | number}} = {}
    for (let i = 0; i < graph.vertexs.length; i++) {
        if (graph.vertexs[i].element === vertex) {
            dist[graph.vertexs[i].element] = {know: true, dv: 0, pv: ''}
        } else {
            dist[graph.vertexs[i].element] = {know: false, dv: INFINITE, pv: ''}
        }
    }
    updateDv(graph, vertex, dist)
    let newVertex
    while (newVertex = findMinEdgeVertex(dist)) {
        dist[newVertex].know = true
        updateDv(graph, newVertex, dist)
    }

    printDist(dist)
    return dist
}

// Kruskal 算法
function setUpEdges (graph: ALWeightGraphInterface): (string | number)[][] {
    let edges: (string | number)[][] = []
    graph.vertexs.forEach(el => {
        let tmp = el.next
        while (tmp) {
            edges.push([el.element, tmp.element, tmp.weight])
            tmp = tmp.next
        }
    })

    return edges
}

function isFinish (dist: {[propName: string]: {know: boolean, dv: number, pv: string | number}}): Boolean {
    for (let key in dist) {
        if (!dist[key].know) {
            return false
        }
    }

    return true
}

function findMinEdges (edges: (string|number)[][], dist: {[propName: string]: {know: boolean, dv: number, pv: string | number}}): (string|number)[] {
    while (edges.length) {
        let minIdx: number = -1
        let minVal: number | string = INFINITE
        edges.forEach((el, idx) => {
            if (el[2] < minVal) {
                minIdx = idx
                minVal = el[2]
            }
        })
        if (minIdx !== -1) {
            let ele = edges[minIdx]
            if (dist[ele[0]].know && dist[ele[1]].know) {
                edges.splice(minIdx)
            } else {
                let ret = edges[minIdx]
                edges.splice(minIdx)
                return ret
            }
        }
    }
    return []
}

function updateDistEdge (from: string | number, to: string | number, weight: number, dist: {[propName: string]: {know: boolean, dv: number, pv: string | number}}): void {
    dist[from].know = true
    dist[to].know = true
    dist[from].dv = weight
    dist[to].dv = weight
}

export function Kruskal (graph: ALWeightGraphInterface): {[propName: string]: {know: boolean, dv: number, pv: string | number}} {
    let dist: {[propName: string]: {know: boolean, dv: number, pv: string | number}} = {}
    for (let i = 0; i < graph.vertexs.length; i++) {
        dist[graph.vertexs[i].element] = {know: false, dv: INFINITE, pv: ''}
    }
    let edges = setUpEdges(graph)
    while (!isFinish(dist)) {
        let [from, to, weight] = findMinEdges(edges, dist)
        updateDistEdge(from, to, Number(weight), dist)
    }

    printDist(dist)
    return dist
}
