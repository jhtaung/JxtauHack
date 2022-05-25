class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

function buildTree(arr) {
  // Corner Case
  if (arr.length === 0 || arr[0] === "N") return null;

  // Create the node of the tree
  let node = new Node(arr[0]);

  // Push the node to the queue
  let queue = [];
  let start = 0;
  queue.push(node);

  // Starting from the second element
  let i = 1;
  while (queue.length !== start && i < arr.length) {
    // Get and remove the front of the queue
    let currNode = queue[start];
    start++;

    // Get the current node's value from the array
    let currVal = arr[i];

    // If the left child is not null
    if (currVal !== "N") {
      // Create the left child for the current node
      currNode.left = new Node(currVal);

      // Push it to the queue
      queue.push(currNode.left);
    }

    // console.log("left: ", currVal);

    // For the right child
    i++;
    if (i >= arr.length) break;
    currVal = arr[i];

    // console.log("right: ", currVal);

    // If the right child is not null
    if (currVal !== "N") {
      // Create the right child for the current node
      currNode.right = new Node(currVal);

      // Push it to the queue
      queue.push(currNode.right);
    }
    i++;
  }

  return node;
}

function bfs(tree) {
  let res = [];
  if (tree == null) {
    return res;
  }

  let queue = [tree];

  while (queue.length > 0) {
    let node = queue.shift();
    res.push(node.data);

    if (node.left === null && node.right === null) {
      continue;
    }
    if (node.left !== null) {
      queue.push(node.left);
    }
    if (node.right !== null) {
      queue.push(node.right);
    }
  }

  return res;
}

function dfs(node, arr) {
  if (node === null) return;
  // arr.push(node.data); // pre order
  dfs(node.left, arr);
  arr.push(node.data); // in order
  dfs(node.right, arr);
  return arr;
}

function main() {
  values = [88, 97, 56, 41, 27, 16, 95, 54, 28];
  let tree = buildTree(values);

  console.log(values.join(" "));
  console.log(tree);

  // let res = bfs(tree);
  let res = dfs(tree, []);
  console.log(res.join(" "));
}

main();

