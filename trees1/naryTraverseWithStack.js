'use strict';

function Tree(val) {
  this.value = val;
  this.children = [];
}

Tree.prototype.traverse = function() {
  let stack = [];

  function traverseHelper(node) {
    stack.push(node);

    while (stack.length > 0) { //stack not empty
      let top = stack.pop();
      top.children.forEach((child) => {
        stack.push(child);
      });
      console.log(top.value);
    }
  }
  traverseHelper(this);
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
a.traverse();