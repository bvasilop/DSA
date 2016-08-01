

//https://github.com/getify/You-Dont-Know-JS/tree/master/this%20%26%20object%20prototypes
'use strict';

//greet - on the prototype need an instance
//sayGoodBye - on the function - need
//sayName - hasOwnProperty  - need instance

//http://www.nfriedly.com/techblog/2009/06/advanced-javascript-objects-arrays-and-array-like-objects/

//Create a function that uses 'this'
Person.all = [];

function Person(name){
  this.name = name;
  this.sayName = function(){
    return ('my name is ' +this.name);
  }
  Person.all.push(this);
}
Person.count = function(){
  return this.all.length;
}

//Add a function to the prototype that uses this and a param
Person.prototype.greet = function(who){
 return ('hi to ' + who + ' from ' + this.name);
}

//sayGoodBye is not on the prototype - static method
// Person.sayGoodBye = function (){
//   console.log('this',this);  //generally don't use 'this' in a class function
//   return ('bye from ' + this.name);
// }
//


console.log('>>>> execute functions');
var person = new Person('George');
console.log('Person:',person.greet('Bob'));
console.log('Person:', person.sayName());

console.log('count', Person.count());

//repurposing greet
function Animal(name){
  this.name = name;
  this.all =[];  //duck typing 'if it walks like a duck and talks like a duck'
}
//call
console.log('>>>> execute .call')
var animal = new Animal('Florence');

console.log('call Animal: ', person.greet.call(animal,'Heidi'));
console.log('call Animal: ', person.sayName.call(animal));

//you can call class function but it's data is from Person
console.log('call class count Animal: ', Person.count.call(animal));

console.log('apply Animal: ', person.greet.apply(animal,['Heidi']));
console.log('applyAnimal: ', person.sayName.apply(animal));


//  bind
console.log('>>>> execute with bind')
console.log('bind greet:',person.greet.bind(animal,'Josh')());

// apply vs call
// set up a function that takes an array to see the differnce

function List(){
  this.alist = [];
  this.addToList = function(item){
    this.alist.push(item);
    return this.alist;
  }

}
var list = new List();
list.addToList([1,2,3]);
console.log('list:',list);


var tester1 = {alist:[1,2,3]};
var listCall = new List();
console.log("using call: ",listCall.addToList.call(tester1, ['a','b','c']));

var tester2 = {alist:[1,2,3]};
var listApply = new List();
console.log("using apply:",listApply.addToList.apply(tester2, ['a','b','c']));
