'use strict';

function Tree(val) {
  this.value = val;
  this.children = [];
}

//test for exist and leave if you find it

Tree.prototype.exists = function(searchVal) {
  var result = false; // local result is set on every frame
  console.log('current node value:', this.value); // value on current node
  if (this.value === searchVal) return true; // test to pop us out
  for (var i = 0; i < this.children.length; i++) { //iterate through node children
    console.log('ready to test node value:', this.children[i].value);
    result = this.children[i].exists(searchVal); // return here after processing node
    if (result) return true; // if you make it hear without returning false you found it, 
    // otherwise keep looking
  }
  return false; //if you made it hear you've looked at everything and not found a match
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
console.log('exists z', a.exists('z'));