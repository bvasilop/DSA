"use strict";

//FIFOq
function Queue() {
  this.items = [];
}
Queue.prototype.enqueue = function(element) {
  this.items.push(element);
};
Queue.prototype.dequeue = function() {
  return this.items.shift();
};
Queue.prototype.front = function() {
  return this.items[0];
};
Queue.prototype.isEmpty = function() {
  return this.items.length == 0;
};
Queue.prototype.clear = function() {
  this.items = [];
};
Queue.prototype.size = function() {
  return this.items.length;
};
Queue.prototype.print = function() {
  console.log(this.items.toString());
};
let q1 = new Queue();
console.log('NQ',q1.enqueue('a'));
console.log('NQ',q1.enqueue('b'));
console.log('PRINT',q1.print());
console.log('DQ',q1.dequeue());
console.log('FRONT',q1.front());
console.log('ISEMPTY',q1.isEmpty());
console.log('CLEAR',q1.clear());
console.log('SIZE',q1.size());
