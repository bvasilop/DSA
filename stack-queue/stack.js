'use strict';
//LIFO
function Stack() {
  this.items = [];
}
Stack.prototype.push = Array.prototype.push.bind(this);
Stack.prototype.pop = Array.prototype.pop.bind(this);
Stack.prototype.peek = function() {
  if (this.items === null) return null;
  return this.items[this.items.length - 1];
};
Stack.prototype.size = function() {
  this.items.length;
};

Stack.prototype.isEmpty = function() {
  this.items.length == 0;
};

Stack.prototype.clear = function() {
  this.items = [];
};
Stack.prototype.print = function() {
  console.log(this.items.toString());
};




let stack1 = new Stack();
stack1.push('a');
stack1.push('b');
console.log('SIZE', stack1.size());
console.log('PRINT', stack1.print());
console.log('PEEK', stack1.peek());
console.log('ISEMPTY', stack1.peek());
console.log('POP', stack1.pop());
console.log('CLEAR', stack1.clear());
console.log('SIZE', stack1.size());
console.log(stack1.items);
