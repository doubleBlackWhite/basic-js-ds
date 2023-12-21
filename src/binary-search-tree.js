const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = this._addRecursive(this.rootNode, data);
  }

  _addRecursive(node, data) {
    if (node === null) {
      return new Node(data);
    }

    if (data < node.data) {
      node.left = this._addRecursive(node.left, data);
    } else if (data > node.data) {
      node.right = this._addRecursive(node.right, data);
    }

    return node;
  }

  has(data) {
    return this._hasRecursive(this.rootNode, data);
  }

  _hasRecursive(node, data) {
    if (node === null) {
      return false;
    }

    if (data === node.data) {
      return true;
    } else if (data < node.data) {
      return this._hasRecursive(node.left, data);
    } else {
      return this._hasRecursive(node.right, data);
    }
  }

  find(data) {
    return this._findRecursive(this.rootNode, data);
  }

  _findRecursive(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      return node;
    } else if (data < node.data) {
      return this._findRecursive(node.left, data);
    } else {
      return this._findRecursive(node.right, data);
    }
  }

  remove(data) {
    this.rootNode = this._removeRecursive(this.rootNode, data);
  }

  _removeRecursive(node, data) {
    if (node === null) {
      return null;
    }

    if (data === node.data) {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const minRight = this._findMin(node.right);
        node.data = minRight.data;
        node.right = this._removeRecursive(node.right, minRight.data);
        return node;
      }
    } else if (data < node.data) {
      node.left = this._removeRecursive(node.left, data);
    } else {
      node.right = this._removeRecursive(node.right, data);
    }

    return node;
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }

    return currentNode.data;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let currentNode = this.rootNode;
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }

    return currentNode.data;
  }

  _findMin(node) {
    while (node.left !== null) {
      node = node.left;
    }
    return node;
  }
}

module.exports = {
  BinarySearchTree
};


