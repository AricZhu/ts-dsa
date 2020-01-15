import { ALGraph, ALWeightGraph } from './ALGraph'
import { topologySort, unWeighted, Dijkstra, Prim, Kruskal } from './algo'

console.log('========== 邻接表图 测试 ==========')
let alGraph = new ALGraph()
let data1 = [1, 2, 3, 4, 5, 6, 7]
console.log(`add vertexs: ${[data1]}`)
data1.forEach(el => alGraph.addVertex(el))
let edges1 = [[1, 2], [1, 4], [1, 3], [2, 4], [2, 5], [3, 6], [4, 6], [4, 7], [4, 3], [5, 4], [5, 7], [7, 6]]
console.log(`add edges: ${edges1.map(el => `(${el[0]},${el[1]})`)}`)
edges1.forEach(el => alGraph.addEdge(el[0], el[1]))
console.log('the al graph is: ')
alGraph.print()

console.log('========== 拓扑排序 测试 ==========')
let toposort = topologySort(alGraph)
console.log(`topology sort: ${toposort}`)

console.log('========== 无权最短路径算法 测试 ==========')
let alGraph2 = new ALGraph()
let data2 = ['v1', 'v2', 'v3', 'v4', 'v5', 'v6', 'v7']
data2.forEach(el => alGraph2.addVertex(el))
let edges2 = [['v1', 'v2'], ['v1', 'v4'], ['v3', 'v1'], ['v2', 'v4'], ['v2', 'v5'], ['v3', 'v6'], ['v4', 'v6'], ['v4', 'v7'], ['v4', 'v3'], ['v4', 'v5'], ['v5', 'v7'], ['v7', 'v6']]
edges2.forEach(el => alGraph2.addEdge(el[0], el[1]))
console.log(`the unWeighted is: ${JSON.stringify(unWeighted(alGraph2, 'v3'))}`)

console.log('========== Dijkstra 算法 测试 ==========')
let alGraph3 = new ALWeightGraph()
data2.forEach(el => alGraph3.addVertex(el))
let edges3 = [['v1', 'v2', 2], ['v1', 'v4', 1], ['v3', 'v1', 4], ['v2', 'v4', 3], ['v2', 'v5', 10],
    ['v3', 'v6', 5], ['v4', 'v6', 8], ['v4', 'v7', 4], ['v4', 'v3', 2], ['v4', 'v5', 7], ['v5', 'v7', 6], ['v7', 'v6', 1]]
edges3.forEach(el => alGraph3.addEdge(el[0], el[1], el[2] as number))
console.log(`the weighted graph is: `)
alGraph3.print()
console.log(`the Dijkstra is: ${JSON.stringify(Dijkstra(alGraph3, 'v1'))}`)

console.log('========== Prim 算法 测试 ==========')
console.log('the Prim is: ')
edges3.forEach(el => alGraph3.addEdge(el[1], el[0], el[2] as number))
Prim(alGraph3, 'v1')

console.log('========== Kruskal 算法 测试 ==========')
let alGraph4 = new ALWeightGraph()
data2.forEach(el => alGraph4.addVertex(el))
let edges4 = [['v1', 'v2', 2], ['v1', 'v4', 1], ['v3', 'v1', 4], ['v2', 'v4', 3], ['v2', 'v5', 10],
    ['v3', 'v6', 5], ['v4', 'v6', 8], ['v4', 'v7', 4], ['v4', 'v3', 2], ['v4', 'v5', 7], ['v5', 'v7', 6], ['v7', 'v6', 1]]
edges4.forEach(el => alGraph4.addEdge(el[0], el[1], el[2] as number))
console.log('the Kruskal is: ')
Kruskal(alGraph4)
console.log('========== end ==========')
