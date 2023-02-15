const graph = {
  a: ["c", "b"],
  b: ["d"],
  c: ["e"],
  d: ["f"],
  e: [],
  f: [],
};
// =================  depth first search =================== Stack
// ------------- Iterative ----------------
const depthFirstPrint = (graph, source) => {
  const stack = [source];

  while (stack.length > 0) {
    let current = stack.pop();

    console.log(current);

    for (let neighbour of graph[current]) {
      stack.push(neighbour);
    }
  }
};

// -------------- Recursive --------------
const depthFirstPrintRec = (graph, source) => {
  console.log(source);

  for (let neighbour of graph[source]) {
    depthFirstPrintRec(graph, neighbour);
  }
};
// -------------- Recursive -------------- End -
// depthFirstPrintRec(graph, "a");

// ================== Breadth first search =============== Queue

const breadthFristPrint = (graph, source) => {
  const queue = [source];

  while (queue.length > 0) {
    let current = queue.shift();
    console.log(current);

    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
};

// breadthFristPrint(graph,'a');

// *****************  PROBLEMS ************************

/////////////////////

// source - destination
// Time complexity =>
// n = # nodes
// e = # edges
// Time = O(e) => need to traverse each edge so, for worst case it will be O( n + e)
// space = O(n)

// another ways
// n = nodes
// n^2 = edges
// for a cylic graph
// time if O(n^2) if undirected

// &&&&&&&&&&&&&&&&&&&&&& ------  HAS PATH --------- &&&&&&&&&&&&&&&&&&
// ------------- dfs
const hasPathDFS = (graph, src, dst) => {
  if (src === dst) return true;

  for (let neighbour of graph[src]) {
    if (hasPathDFS(graph, neighbour, dst)) return true;
  }
  // if after searching for each node not able to find path return false;
  return false;
};

// console.log(hasPathDFS(graph,'b','e'));
// ------------ bfs
const hasPathBFS = (graph, src, dst) => {
  const queue = [src];

  while (queue.length > 0) {
    const current = queue.shift();

    if (current === dst) return true;

    for (let neighbour of graph[current]) {
      queue.push(neighbour);
    }
  }
  // if queue becomes empty, means no dst found return false;
  return false;
};
// console.log(hasPathBFS(graph,'b','f'));

// -=================== UN-DIRECTED GRAPH TRAVERSAL ==================

const undirectedPath = (edges, nodeA, nodeB) => {
  const graph = buildGraph(edges);
  let visited = [];
  //   console.log(visited);
  return hasPath(graph, nodeA, nodeB, visited);
};

const hasPath = (graph, src, dst, visited) => {
  console.log(src, dst);
  if (src === dst) return true;
  // checking for if the node has been already visited or not.
  if (visited.includes(src)) return false;
  // adding the current source node to visited array;
  visited.push(src);
  for (let neighbour of graph[src]) {
    if (hasPath(graph, neighbour, dst)) return true;
  }
  return false;
};

// $$$$$$$$$$$$$$$$ BUILD GRAPH $$$$$$$$$$$$$$$$$$$$
const buildGraph = (edges) => {
  let graph = {};

  for (let edge of edges) {
    const [a, b] = edge;

    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};

const edges = [
  ["i", "j"],
  ["k", "i"],
  ["m", "k"],
  ["k", "l"],
  ["o", "n"],
];
// console.log("Graph",buildGraph(edges));
// console.log(undirectedPath(edges,'l','o'))

///////////////// 0000000000000----------------- CONNECTED COMPONENTS --------------0000000000000000000///////////////

const connectedComponentsCount = (graph) => {
  let visited = new Set();
  let count = 0;

  for (let node in graph) {
    if (explore(graph, node, visited) === true) {
      count += 1;
    }
  }
  return count;
};
const explore = (graph, current, visited) => {
  if (visited.has(current)) return false;

  visited.add(current);

  for (let neighbour of graph[current]) {
    explore(graph, neighbour, visited);
  }
  // return true if we have explored all nodes of current components;
  return true;
};
// -------------------------------------------------------------------

// &&&&&&&&&&&&&&&& (((((((((((((-------- Largest component -----------))))))))))))) &&&&&&&&&&&&&

const largestCOmponent = (graph) => {
  let longest = 0;

  let visited = new Set();

  for (let node in graph) {
    const size = exploreSize(graph, node, visited);
    if (size > longest) longest = size;
  }
  return longest;
};

const exploreSize = (graph, node, visited) => {
  if (visited.has(node)) return 0;

  visited.add(node);

  let size = 1;

  for (let neighbour of graph[node]) {
    size += exploreSize(graph, neighbour, visited);
  }

  return size;
};

// 900909000000000000 SMALLEST PATH 909099999999999

const buildGraphNew = (edges) => {
  const graph = {};

  for (let edge of edges) {
    const [a, b] = edge;
    if (!(a in graph)) graph[a] = [];
    if (!(b in graph)) graph[b] = [];
    graph[a].push(b);
    graph[b].push(a);
  }
  return graph;
};
const shortestPath = (edges, nodeA, nodeB) => {
  const graph = buildGraphNew(edges);
  const visited = new Set([nodeA]); // initializing set with current node i.e nodeA

  const queue = [[nodeA, 0]];

  while (queue.length > 0) {
    const [node, distance] = queue.shift();

    if (node === nodeB) return distance;

    for (let neighbour of graph[node]) {
      if (!visited.has(neighbour)) {
        visited.set(neighbour);
        queue.push([neighbour, distance + 1]);
      }
    }
  }
  // if not found any shortest path b/w nodeA and nodeB return -1;
  return -1;
};





///////////////// ISLANDS COUNT /////////////////////////////


