





const airports = 'PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM'.split(' ');   // nodes/ vertices => 

const routes = [  // vertexes pointing to each other // unidirected or 
    ['PHX', 'LAX'],
    ['PHX', 'JFK'],
    ['JFK', 'OKC'],
    ['JFK', 'HEL'],
    ['JFK', 'LOS'],
    ['MEX', 'LAX'],
    ['MEX', 'BKK'],
    ['MEX', 'LIM'],
    ['MEX', 'EZE'],
    ['LIM', 'BKK'],
];


// graph resprestation = > adjacencyList means => {} 
// matrix []

const graph = new Map();


function addVertex(vertex) {
    // create a new node;
    graph.set(vertex,[]);  // node , value => vertex =>  
}

function addEdge(src,dst){
    // connection between two node/vertexed;
    graph.get(src).push(dst);
    graph.get(dst).push(src);  // setting connection from both sides =

    // map = > get, set, has => key-value
}


airports.forEach(addVertex);
routes.forEach(route => addEdge(...route))
let visited = [];

function dfs(graph,node){
    // iterate over graph => graph and node
    // node
    let impact = 0;
    let isVisited = visited.includes(node);
    if(isVisited) return 0;
    let adjList = graph.get(node);
    visited.push(node);  // visited => push into it
    for(let v of adjList){
 
        impact+=dfs(graph,v);
    }
    return impact+1;
}
let maxImpact = -Infinity;
for(let i=0;i<airports.length;i++){
    let impact = dfs(graph,airports[i]);
    maxImpact = Math.max(maxImpact,impact);
}
console.log(maxImpact);




































// // The graph
// const adjacencyList = new Map();// { }

// // Add node/ vertex
// function addNode(airport) {
//     adjacencyList.set(airport, []);
// }

// // Add edge, undirected
// function addEdge(origin, destination) {
//     adjacencyList.get(origin).push(destination);  // {1:[]} method // origin delhi => ['chd','bglr'] =>  
//     adjacencyList.get(destination).push(origin);
// }

// // Create the Graph
// airports.forEach(addNode);
// routes.forEach(route => addEdge(...route))
// // console.log(adjacencyList);

// function bfs(start){

//     const visited = new Set(); // to keep track of visited nodes/vertices

//     const queue = [start];

//     while(queue.length>0){

//         const airport = queue.shift();
//         const destinations = adjacencyList.get(airport);

//         for(const destination of destinations){

//             if(destination==='BKK'){
//                 console.log('found it');
//             }

//             if(!visited.has(destination)){
//                 visited.add(destination);
//                 queue.push(destination);
//             }
//         }
//     }

// }
// // bfs('PHX');
// // depth first search (dfs);
// // depth first search will go as far into the graph as possible until it reaches
// // a node without any children, at which point it backtracks and continue the process.
// // The algorithm can be implemented with a recusive function that keeps track of
// // previously visited nodes. if a node has not been visited
// // we call the function recursively.

// function dfs(start,visited = new Set()){
//     console.log(start);

//     visited.add(start);

//     const destinations = adjacencyList.get(start);
//     for(const destination of destinations){

//         if(destination === 'BKK'){
//             console.log('DFS found bangkok');
//             return;
//         }

//         if(!visited.has(destination)){
//             dfs(destination,visited);
//         }
//     }
// }
// dfs('PHX');

// // // Time complexity => O(V+W) or O(N);

// // const airports = "PHX BKK OKC JFK LAX MEX EZE HEL LOS LAP LIM".split(" ");

// // const routes = [
// //   ["PHX", "LAX"],
// //   ["PHX", "JFK"],
// //   ["JFK", "OKC"],
// //   ["JFK", "HEL"],
// //   ["JFK", "LOS"],
// //   ["MEX", "LAX"],
// //   ["MEX", "BKK"],
// //   ["MEX", "LIM"],
// //   ["MEX", "EZE"],
// //   ["LIM", "BKK"],
// // ];
// // // [[]] => i=o;i<n;i++ => airports[i] === [j] mat[i][j] = 1;

// // const adjacencyList = new Map(); // provides api mp.get(key);

// // function addVertex(airport) {
// //   adjacencyList.set(airport, []); // originally it will be empty
// // }
// // function addEdge(origin, destination) {
// //   adjacencyList.get(origin).push(destination); ///  undirected =>  origin => delhi => {delhi:[chd,nagpur, up,shimla]}
// //   adjacencyList.get(destination).push(origin); ///  origin shimla => {shimla:[chd,rampur,delhi]}
// // }

// // airports.forEach(addVertex); // => it will create all the vertexex with current => airport

// // routes.forEach((route) => addEdge(...route));
// // console.log(adjacencyList); // representing a graph => 
// // // mat => [], 
// // // let arr = ['a','b'];
// // // console.log(...arr);

// // /// two approach to travese =>
// // // 1. dfs => depth first search =>
// // // 2. bfs => breath first search

// // function bfs(origin){
// //         // to set the visited thing => a => every node i have to travese => keep track of all the nodes we have explored or visited
// //         let visited = new Set(); // => track =
// //         let queue = [origin];
// //         while(queue.length>0){
// //             let destinations = adjacencyList.get(origin);
// //             queue.shift(origin);
// //             for(let destination of destinations){ // delhi:[up,mp,chd] 
// //                 if(destination==='JFK'){
// //                     console.log(origin,destination,'found the route');
// //                 }
// //                 if(!visited.has(destination)){
// //                     visited.add(destination);
// //                     queue.push(destination);
// //                     console.log(destination);
// //                 }
// //             }
// //         }
// // }
// // bfs('PHX')
