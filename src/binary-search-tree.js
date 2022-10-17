const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  rootElement;
  nodes;

  constructor() {
    this.rootElement = null;
    this.nodes = [];
  }

  root() {
    return this.rootElement;
  }

  log() {
    console.log(this.rootElement);
  }

  add(data) {
    if (this.nodes.includes(data)) return;

    this.nodes.push(data);

    if (this.rootElement) {
      let current = this.rootElement;
      while (current) {
        if (data < current.data) {
          if (current.left) {
            current = current.left;
          } else {
            current.left = new Node(data);
            return;
          }
        } else {
          if (current.right) {
            current = current.right;
          } else {
            current.right = new Node(data);
            return;
          }
        }
      }
    } else {
      this.rootElement = new Node(data);
    }
  }

  has(data) {
    return this.nodes.includes(data);
  }

  find(data) {
    if (!this.nodes.includes(data)) {
      return null;
    }

    let current = this.rootElement;
    while (current) {
      if (data === current.data) {
        return current;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  remove(data) {
    if (!this.nodes.includes(data)) return;

    this.nodes = this.nodes.filter(value => value !== data);

    let current = this.rootElement;

    if (current.data === data) {
      current = null;
      return;
    }

    while (current) {
      if (current.left && data === current.left.data) {
        current.left = null;
        return;
      }
      if (current.right && data === current.right.data) {
        current.right = null;
        return;
      }

      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
  }

  min() {
    let min = this.rootElement.data;
    this.nodes.forEach(value => {
      if (value < min) {
        min = value;
      }
    })
    return min;
  }

  max() {
    let max = 0;
    this.nodes.forEach(value => {
      if (value > max) {
        max = value;
      }
    })
    return max;
  }
}

module.exports = {
  BinarySearchTree
};