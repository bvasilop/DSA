//reference more oriented to front end
//https://www.nczonline.net/blog/2009/04/13/computer-science-in-javascript-linked-list/
module.exports = function() {
  this._length = 0;
  this._head = null;
  this._tail = null;
};
  //add to end o flist
module.exports.prototype.add = function(data) {

  //create a new node, place data in
  var node = {
      data: data,
      next: null
    },
    //used to traverse the structure
    current = null;
  //special case: no items in the list yet
  if (this._head === null) {
    this._head = node;
    this._tail = node;
  } else {
    current = this._head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
    this._tail = node;
  }
  //update the count
  this._length++;
};

//get by index value O(N)
module.exports.prototype.get = function(index) {
  if (this._head === null) throw Error('uninitialized');
  if (index === 0) return this._head.data;
  var current = this._head.next;
  for (var i = 1; i < index; i++) {
    if (current === null) throw Error('not found');
    current = current.next;
  }
  return current.data;
};

//insert at any point in array with O(N) but insert at 0 is 1
module.exports.prototype.insert = function(data, index) {
  if (index >= this._length) throw Error('index out of bounds');
  var node = {
      data: data,
      next: null
    },
    current = this._head;
  for (var i = 0; i < index; i++) {
    current = current.next;
  }
  node.next = current;
  this._head = node;
  this._length++;
};

// O(N) but you can remove without restructuring
// if index is 0 it O(1)
module.exports.prototype.remove = function(index) {
  if (index >= this._length) throw Error('index out of bounds');
  var current = this._head;
  for (var i = 0; i < index; i++) {
    current = current.next;
  }
  current = current.next;
  this._head = current;
  this._length--;
};


//add array to end of list
module.exports.prototype.addArray = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    this.add(arr[i]);
  }
};

//get size
module.exports.prototype.size = function() {
  return this._length;
};

//output as a an array for easy inspection
module.exports.prototype.toArray = function() {
  var arr = [],
    current = this._head;
  if (current == null) return arr;
  for (var i = 0; i < this._length; i++) {
    arr.push(current.data);
    current = current.next;
  }
  return arr;
};


// var linkedList = new LinkedList();
// linkedList.addArray(['a', 'b', 'c']); // abc
//
//
// linkedList.insert('d', 0); //dabc
// console.log('after insert at 0', linkedList.toArray());
// linkedList.remove(0); //abc
// linkedList.remove(2);
// console.log('after remove 0 and 2', linkedList.toArray()); //bc
// console.log('size after remove', linkedList.size()); //should be 2
// console.log('data at 1', linkedList.get(1)); //should be 'c'
