import { ALGraphInterface } from './types'

// 拓扑排序
// 建立顶点的入度
function setUpIndegree (graph: ALGraphInterface): object {
    let indegree = {}
    let len = graph.vertexs.length
    for (let i = 0; i < len; i++) {
        let node = graph.vertexs[i]
        indegree[node.element] = 0
        for (let j = 0; j < len; j++) {
            if (j === i) continue
            let tmp = graph.vertexs[j]
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

function findZeroIndegreeVertex (indegree: object): any {
    let keys = Object.keys(indegree)
    for (let i = 0; i < keys.length; i++) {
        if (indegree[keys[i]] === 0) {
            return keys[i]
        }
    }
}

function updateIndegree (graph: ALGraphInterface, indegree: object, vertex: any) {
    let v = graph._findVertex(parseInt(vertex))
    while (v) {
        indegree[v.element]--
        v = v.next
    }
}

export function topologySort (graph: ALGraphInterface): any[] {
    let vertexs: any[] = []
    let indegree: {} = setUpIndegree(graph)
    let v = findZeroIndegreeVertex(indegree)
    while (v) {
        vertexs.push(v)
        delete indegree[v]
        updateIndegree(graph, indegree, v)
        v = findZeroIndegreeVertex(indegree)
    }
    return vertexs
}
