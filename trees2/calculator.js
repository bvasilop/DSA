function calculator() {
  this.result = null;
}

calculator.prototype.add = function(val) {
  if (this.result === null) this.result = val;
  else parseFloat(this.result += val);
  return this; // this gives chaining
};

calculator.prototype.multiply = function(val) {
  if (this.result === null) this.result = val;
  else(parseFloat(this.result *= val));
  return this; // this gives chaining
};

calculator.prototype.subtract = function(val) {
  if (this.result === null) this.result = val;
  else(parseFloat(this.result -= val));
  return this; // this gives chaining
};

//what happens if val is 0
calculator.prototype.divide = function(val) {
  if (this.result === null) this.result = val;
  else(parseFloat(this.result /= val));
  return this; // this gives chaining

};
calculator.prototype.clear = function() {
  this.result = null;
  return this;
};


function fibSeries(n) {
  var f = [];
  for (var c = 0; c <= n; ++c) {
    f.push((c < 2) ? c : f[c - 1] + f[c - 2]);
  }
  return f;
}

calculator.prototype.fibonacci = function() {
  if (!Number.isInteger(this.result)) {
    console.log('must be an integer for this function');
    return;
  }
  var series = fibSeries(this.result);
  console.log(series);
  return series[series.length - 1];
};

function factorialHelper(n) {
  var f = 1;
  for (var c = 1; c <= n; ++c) f *= c;
  return f;
}
calculator.prototype.factorial = function() {
  return factorialHelper(this.result);
};

var calculator1 = new calculator();
calculator1.add(2);
console.log('add', calculator1.result);
calculator1.add(2).divide(2);
console.log('add 2 divide 2', 'answer:', calculator1.result);

//what happens if the result is not an integer
var calculator2 = new calculator();
calculator2.add(2);
console.log('add', calculator1.result);
calculator1.add(2).divide(3);
console.log('add 2 divide 2', 'answer:', calculator1.result);

//how to initialize the value result
//divide by 0
//floating results
//floating inputs

var calculator3 = new calculator();
calculator1.add(2);
console.log('add 2', calculator3.result);
console.log('clear add 1', calculator3.clear().add(1).result);
console.log('clear add 3.1 subtract 1.2', calculator3.clear().add(3.1).subtract(1.2).result);
console.log('clear add 3 divide 2', calculator3.clear().add(3).divide(2).result);
console.log('clear add 3 multiply 3', calculator3.clear().add(3).multiply(3.2).result);
// console.log('add 2', 'answer:', calculator1.result);

var calculator4 = new calculator();
console.log('add 5 fib', calculator4.add(5).fibonacci());
console.log('clear add 5 factorial', calculator4.clear().add(5).factorial());