class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BFS {
  constructor() {
    this.root = null;
  }

  insert(value, curNode = this.root) {
    const node = new Node(value);

    if (!this.root) {
      this.root = node;
      return node;
    }

    if (!curNode) {
      return node;
    }

    if (value < curNode.value) {
      if (curNode.left) {
        return this.insert(value, curNode.left);
      } else {
        curNode.left = node;
      }
    } else if (value > curNode.value) {
      if (curNode.right) {
        return this.insert(value, curNode.right);
      } else {
        curNode.right = node;
      }
    }

    return curNode;
  }
}

const bfs = new BFS();

bfs.insert(3);
bfs.insert(3);
bfs.insert(3);
bfs.insert(8);
bfs.insert(5);
bfs.insert(10);
bfs.insert(2);

console.log(JSON.stringify(bfs));
