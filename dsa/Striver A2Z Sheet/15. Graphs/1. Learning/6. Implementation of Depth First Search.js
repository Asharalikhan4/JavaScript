class UndirectedUnweightedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(source, destination) {
    this.addVertex(source);
    this.addVertex(destination);

    if (!this.adjacencyList.get(source).includes(destination)) {
      this.adjacencyList.get(source).push(destination);
    }

    if (!this.adjacencyList.get(destination).includes(source)) {
      this.adjacencyList.get(destination).push(source);
    }
  }

  print() {
    for (const [vertex, neighbors] of this.adjacencyList) {
      console.log(`${vertex} -> ${neighbors.join(", ")}`);
    }
  }

  depthFirstSearch(startNode) {
    if (!this.adjacencyList.has(startNode)) {
      return [];
    }

    const visited = new Set();
    const result = [];

    const dfs = (currentNode) => {
      visited.add(currentNode);
      result.push(currentNode);

      const neighbors = this.adjacencyList.get(currentNode);

      for (const neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfs(neighbor);
        }
      }
    };

    dfs(startNode);
    return result;
  }
}

const graph = new UndirectedUnweightedGraph();

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);

graph.print();

console.log("DFS from 1 :", graph.depthFirstSearch(1));
console.log("DFS from 2 :", graph.depthFirstSearch(2));
