'use strict';
//always preorder

function BinarySearchTree(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}
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
  console.log('in add what is returned', tree.value)
  return tree;
};
BinarySearchTree.prototype.traverse = function() {
  var result = [];
  var node = this;
  var traverse = function(node) {
    result.push(node.value);
    node.left && traverse(node.left);
    node.right && traverse(node.right);
  };
  traverse(node);
  return result;
};


var root = new BinarySearchTree(10);
root.add(new BinarySearchTree(20)).add(new BinarySearchTree(30));
root.add(new BinarySearchTree(5)).add(new BinarySearchTree(8));
root.add(new BinarySearchTree(3)).add(new BinarySearchTree(9));
root.add(new BinarySearchTree(2));
root.add(new BinarySearchTree(1));
//root.indent();
console.log('traverse (preorder)', root.traverse());