class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.adjList = new Map();
  }
  addVertex(v) {
    this.adjList.set(v, []);
  }
  addEdge(v, w) {
    this.adjList.get(v).push(w);
    this.adjList.get(w).push(v); // doing for undirected graph
  }
  printGraph() {
    let keys = this.adjList.keys();
    for (let v of keys) {
      let eList = this.adjList.get(v);
      let data = "";
      for (let e in eList) {
        data = data + eList + ' ';
      }
      console.log(v + "->" + data);
    }
  }
}

var g = new Graph(4);
g.addVertex("a");
g.addVertex("b");
g.addVertex("c");
g.addVertex("d");
g.addEdge("a", "b");
g.addEdge("b", "c");
g.addEdge("c", "d");
g.addEdge("d", "a");
g.printGraph();
