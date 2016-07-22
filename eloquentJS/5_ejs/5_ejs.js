// EloquentJS - Ch. 5 - Higher Order Functions

// Abstraction

// declare total and count variables to 0 and 1
// write loop to increment count by one while count <=10
// console log result after loop is finished
var total = 0, count = 1;
while(count <= 10){
  total = total + count;
  count = count + 1;
}
console.log(total);

// write a range function which takes two arguments and outputs an array with all the elements in such range
// write a sum function which takes an array as an argument and sums all of the elememnts in any given array
function range(x, y){
  var arrayOutput = [];
  for (i = x; i <= y; i++){
    arrayOutput.push(i);
  }
  return arrayOutput;
}
function sum(array){
  var total = 0;
  for(i = 0; i < array.length; i++){
    total = total + array[i];
  }
  return total;
}

// can we do a better job of abstracting our function?
function logEach(array){
for(var i = 0; i < array.length; i++){
  console.log(array[i]);
}
}
// could we do even better?
function forEach(array, action){
for(var i = 0; i < array.length; i++){
  action(array[i]);
}
}
// how about for numbers?
var numbers = [1, 2, 3, 4, 5], sum = 0;
forEach(numbers, function(number) {
sum += number;
}); // here we are creating a function argument on the fly
// this forEach script develops on the one above as it is declared there
console.log(sum);
// but forEach for arrays already exists in JS...


// higher order functions

// we can have functions that create other functions
function greaterThan(n){
return function(m){ return m > n };
}
var greaterThan10 = greaterThan(10);

// we can have functions that change other functions
function noisy(f){
  return function(arg){
    console.log("calling with", arg);
    var val = f(arg);
    console.log("called with", arg, "- got", val);
    return val;
  };
}

// we can have functions that provide new types of control flow
function unless(test, then){
  if(!test) then();
}
function repeat(times, body){
  for (var i = 0; i < times; i++) body(i);
}
repeat(3, function(n){
  unless(n % 2, function(){
    console.log(n, "is even");
  });
});

// this function showcases the 'use' of the apply method.
// the apply method can be used to such that we can pass an array-like data type to another function
function transparentWrapping(f){
  return function(){
    return f.apply(null, arguments);
  }
} // it's a useless function though


// JSON

// higher order functions that somehow apply a function to the elements of an array are highly used in JS. the forEach() method is the most primitive such function. there are a number of other variants available as methods on other arrays.

// as random as it may seem, here is a 'JSON' object, or so it seems:
[
  {
    "name" : "Emma de Milliano",
    "sex" : "f",
    "born": 1876,
    "died" : 1956,
    "father" : "Petrus de Milliano",
    "mother" : "Sophia va Damme",

  },
  {
    "..." : "..."
  }
];
// JSON : javascript object notation. widely used as a data storage and communication format on the web.
// JSON is similar to JS's way of writing objects, and with a few restrictions. all property names have to be surrounded by double quotes, and only simple data expressions are allowed - no function calls, variables, or anything that involves actual computation. comments are not allowed in JSON.

// JS gives us functions, JSON.strigify and JSON.parse, that convert data from and to this format. the first takes a JS value and returns a JSON-encoded string. the second takes such a string and converts it to the value it encodes.

var string = JSON.stringify({name: "X", born: 1980});
console.log(string);
console.log(JSON.parse(string).name);
console.log(JSON.parse(string).born);

require(['extras/ancestry.js'], function(){
function filter(array, test){
  var passed = [];
  for(var i = 0; i < array.length; i++){
    if (test(array[i]))
      passed.push(array[i])
  }
  return passed;
}
console.log(filter(ancestry, function(person){
  return person.born > 1900 && person.born < 1925;
}));
});







