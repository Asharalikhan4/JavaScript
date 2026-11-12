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
}

const graph = new UndirectedUnweightedGraph();

graph.addEdge(1, 2);
graph.addEdge(1, 3);
graph.addEdge(2, 4);
graph.addEdge(2, 5);
graph.addEdge(3, 4);
graph.addEdge(4, 5);

graph.print();
