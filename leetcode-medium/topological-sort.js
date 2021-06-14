function Graph () {
  this.graph = {};
  this.visited = {};
  this.stack = [];
}

Graph.prototype.addEdge = function (node, adj) {
  if (!this.graph[node]) {
    this.graph[node] = [];
  }
  this.graph[node].push(adj);
}

Graph.prototype.topologicalSort = function () {
  for (let node in this.graph) {
    if (!this.visited[node]) {
      this.topologicalSortUtil(node);
    }
  }
  
  return this.stack;
}

Graph.prototype.topologicalSortUtil = function (node) {
  this.visited[node] = true;
  
  if (this.graph[node]) {
    for (let dep of this.graph[node]) {
      if (!this.visited[dep]) {
        this.topologicalSortUtil(dep);
      }
    }
  }
  
  this.stack.push(node);
}