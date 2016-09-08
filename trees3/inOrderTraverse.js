'use strict';

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
BinarySearchTree.prototype.indent = function() {
  function indentHelper(node, indent) {
    if (!node) return; //base
    console.log(indent + node.value); //location of operation
    indentHelper(node.left, indent + ' ');
    indentHelper(node.right, indent + ' ');
  }
  indentHelper(this, '  ');
};
BinarySearchTree.prototype.add = function(node) {
  this.insertNode(this, node);
  return this;
};
BinarySearchTree.prototype.insertNode = function(tree, node) {
  if (tree) {
    if (tree.value < node.value) {
      if (tree.right) {
        this.insertNode(tree.right, node);
      } else {
        tree.right = node;
      }
    } else {
      if (tree.left) {
        this.insertNode(tree.left, node);
      } else {
        tree.left = node;
      }
    }
  } else {
    tree = node;
  }
  return tree;
};



BinarySearchTree.prototype.traverse = function(value) {
  if (value == this.value) {
    console.log(value);
    return true;
  } else if (value < this.value) {
    if (this.left == null)
      return false;
    else
      return this.left.contains(value);
  } else if (value > this.value) {
    if (this.right == null)
      return false;
    else
      return this.right.contains(value);
  }
  return false;
};


var root = new BinarySearchTree(10);
root.add(new BinarySearchTree(20)).add(new BinarySearchTree(30));
root.add(new BinarySearchTree(5)).add(new BinarySearchTree(8));
root.add(new BinarySearchTree(3)).add(new BinarySearchTree(9));
root.add(new BinarySearchTree(2));
root.add(new BinarySearchTree(1));
//root.indent();
root.traverse();