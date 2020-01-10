import { ALGraph } from './ALGraph'
import { topologySort } from './algo'

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

console.log('========== end ==========')
