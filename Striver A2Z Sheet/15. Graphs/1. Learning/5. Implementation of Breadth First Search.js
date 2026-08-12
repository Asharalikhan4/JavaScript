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

  breadthFirstSearch(startNode) {
    if (!this.adjacencyList.has(startNode)) {
      return [];
    }

    const nodeQueue = [startNode];
    const visited = new Set();
    const result = [];

    visited.add(startNode);
    while (nodeQueue?.length > 0) {
      const currentNode = nodeQueue.shift();
      result.push(currentNode);

      const neighbours = this.adjacencyList.get(currentNode);
      for (const neighbour of neighbours) {
        if (!visited.has(neighbour)) {
          visited.add(neighbour);
          nodeQueue.push(neighbour);
        }
      }
    }

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

console.log("BFS from 1 :", graph.breadthFirstSearch(1));
console.log("BFS from 1 :", graph.breadthFirstSearch(2));
