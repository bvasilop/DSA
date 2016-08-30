'use strict';

function Tree(val) {
  this.value = val;
  this.children = [];
}

//test for exist and traverse everything even after you find it
//not an optimal solution

Tree.prototype.exists = function(searchVal) {
  var result = false; //result will be a closure

  function existsHelper(node, searchVal) { //helper to manage traversal
    if (node.value === searchVal) return result = true;
    for (var i = 0; i < node.children.length; i++) {
      console.log('ready to test node value:', node.children[i].value);
      existsHelper(node.children[i], searchVal);
    }
  }

  existsHelper(this, searchVal); //call to helper
  return result; //return value after full traversal
};

//Test my tree functions
//var tree = new Tree();
var a = new Tree('a');
var b = new Tree('b');
var c = new Tree('c');
var d = new Tree('d');
var e = new Tree('e');
var q = new Tree('q');
a.children.push(b);
a.children.push(c);
a.children.push(q);
b.children.push(d);
d.children.push(e);

console.log('exists b', a.exists('b'));
//console.log('exists z', a.exists('z'));