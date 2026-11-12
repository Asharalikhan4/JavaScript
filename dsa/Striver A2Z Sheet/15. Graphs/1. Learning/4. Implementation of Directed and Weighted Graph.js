class DirectedWeightedGraph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addVertex(vertex) {
    if (!this.adjacencyList.has(vertex)) {
      this.adjacencyList.set(vertex, []);
    }
  }

  addEdge(source, destination, weight) {
    this.addVertex(source);
    this.addVertex(destination);

    const sourceEdges = this.adjacencyList.get(source);
    if (!sourceEdges.find((edge) => edge.node === destination)) {
      sourceEdges.push({ node: destination, weight: weight });
    }
  }

  print() {
    for (const [vertex, edges] of this.adjacencyList) {
      const formattedEdges = edges
        .map((edge) => `${edge.node} (weight: ${edge.weight})`)
        .join(", ");

      console.log(`${vertex} -> ${formattedEdges}`);
    }
  }
}

const graph = new DirectedWeightedGraph();

graph.addEdge(1, 2, 10);
graph.addEdge(1, 3, 15);
graph.addEdge(2, 4, 5);
graph.addEdge(2, 5, 20);
graph.addEdge(3, 4, 25);
graph.addEdge(4, 5, 30);

graph.print();
