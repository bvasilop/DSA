
'use strict';

//greet - on the prototype need an instance
//sayGoodBye - on the function - need
//sayName - hasOwnProperty  - need instance

//http://www.nfriedly.com/techblog/2009/06/advanced-javascript-objects-arrays-and-array-like-objects/

function Person(name){
  this.name = name;
  this.sayName = function(){
    return ('my name is ' +this.name);
  }
}

Person.prototype.greet = function(who){
 return ('hi to ' + who + ' from ' + this.name);
}

//sayGoodBye is not on the prototype
Person.sayGoodBye = function (){
  //console.log(this);
  return ('bye from ' + this.name);
}

console.log('>>>> execute functions');
var person = new Person('George');
console.log('Person:',person.greet('Bob'));
console.log('Person:', person.sayName());
//name of function will be output
console.log('Person:',Person.sayGoodBye());

//repurposing greet and sayGoodBye
function Animal(name){
  this.name = name;
}
//call
console.log('>>>> execute .call')
var animal = new Animal('Florence');

console.log('Animal: ', person.greet.call(animal,'Heidi'));
console.log('Animal: ', person.sayName.call(animal));
//name of animal will be output
console.log('Animal: ', Person.sayGoodBye.call(animal));

//  bind
console.log('>>>> execute with bind')
console.log('bind greet:',person.greet.bind(animal,'Josh')());

// apply vs call
// set up a function that takes an array to see the differnce

function List(){
  this.alist = [];
  this.addToList = function(arr){
    this.alist.push(arr);
    return this.alist;
  }

}
var list = new List();
list.addToList([1,2,3]);



var tester1 = {alist:[1,2,3]};
var listCall = new List();
console.log("using call: ",listCall.addToList.call(tester1, ['a','b','c']));

var tester2 = {alist:[1,2,3]};
var listApply = new List();
console.log("using apply:",listApply.addToList.apply(tester2, ['a','b','c']));
