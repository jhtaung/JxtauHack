'use strict';

class Node {
    constructor(data) {
        this.data = data;
        this.left = null;
        this.right = null;
    }
}

class Solution {
    // Function to convert a binary tree into its mirror tree.
    mirror(node) {
        // your code here
        if (node === null) { return node; }
        let left = this.mirror(node.left);
        let right = this.mirror(node.right);
        
        node.left = right;
        node.right = left;
        return node;
    }
}

function buildTree(str) {
    let arr = str.split(' ');

    // Corner Case
    if (arr.length === 0 || arr[0] === "N") return null;

    // Create the node of the tree
    let node = new Node(parseInt(arr[0]));

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
            currNode.left = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.left);
        }

        console.log('left: ', currVal);

        // For the right child
        i++;
        if (i >= arr.length) break;
        currVal = arr[i];

        console.log('right: ', currVal);

        // If the right child is not null
        if (currVal !== "N") {

            // Create the right child for the current node
            currNode.right = new Node(parseInt(currVal));

            // Push it to the queue
            queue.push(currNode.right);
        }
        i++;
    }

    return node;
}

function dfs(node, res) {
    if (node === null) return;
    dfs(node.left, res);
    res.push(node.data);
    dfs(node.right, res);
}

function main() {
    let input = '1 3 2 4 5';
    let tree = buildTree(input);
    
    // let obj = new Solution();
    // obj.mirror(tree);

    let res = [];
    dfs(tree, res);

    let output = '';
    for (let i = 0; i < res.length; i++) {
        output += res[i] + " ";
    }

    console.log(tree);
    console.log('input: ' + input);
    console.log('output: ' + output);
}

main();