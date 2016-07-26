
'use strict';

//greet - on the prototype need an instance
//sayGoodBye - on the function - need
//sayName - hasOwnProperty  - need instance

http://www.nfriedly.com/techblog/2009/06/advanced-javascript-objects-arrays-and-array-like-objects/

function Person(name){
  this.name = name;
  this.sayName = function(){
    return ('my name is %s',this.name);
  }
}

Person.prototype.greet = function(){
 return ('hi from %s',this.name);
}

//sayGoodBye is not on the prototype
Person.sayGoodBye = function (){
  //console.log(this);
  return ('bye from %s',this.name);
}

var person = new Person('George');
console.log('Person:',person.greet());
console.log('Person:', person.sayName());
console.log('Person:',Person.sayGoodBye());

//repurposing greet and sayGoodBye
function Animal(name){
  this.name = name;
}

var animal = new Animal('Florence');

console.log('Animal: ', person.greet.call(animal));
console.log('Animal: ', person.sayName.call(animal));
console.log('Animal: ', Person.sayGoodBye.call(animal));
