Skip to content
This repository
Search
Pull requests
Issues
Gist
 @rebeccapeltz
 Unwatch 1
  Star 0
 Fork 0 rebeccapeltz/nodetest
 Code  Issues 0  Pull requests 0  Wiki  Pulse  Graphs  Settings
Branch: master Find file Copy pathnodetest/stacks/followup/inclass-queue-with-optimize.js
590fb06  on May 23
@rebeccapeltz rebeccapeltz add middleware
1 contributor
RawBlameHistory     38 lines (32 sloc)  910 Bytes
"use strict";

function QueueNoOptimize() {
  var array = [];
  this.queue = array.push.bind(array);
  this.dequeue = array.shift.bind(array);
  this.hasNext = function() {
    return !!(array.length);
  }
}

var qp = new QueueNoOptimize();
console.log("QueueNoOptimize queue it up:",qp.queue(1));
console.log("QueueNoOptimize dequeue it:", qp.dequeue());
console.log("QueueNoOptimize should report false for has next:",qp.hasNext());
//------------------------------//

function Queue() {
  let array = [];
  let front = 0;

  this.queue = array.push.bind(array);
  this.dequeue = function() {
    let next = array[front];  //get the 1 item
    array[front] = null;  //set 1st item to null
    front ++;  //change the location of first item (note array still contains 1st item as null)
    return next;  //return 1st item
  }
  this.hasNext = function() {
    return !!(array.length);
  }
}

var q = new Queue();
console.log("Queue queue it up:",q.queue(1));
console.log("Queue dequeue it:", q.dequeue(2));
console.log("Queue should report 'false' for has next:",q.hasNext());
Status API Training Shop Blog About
© 2016 GitHub, Inc. Terms Privacy Security Contact Help
