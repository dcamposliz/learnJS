require('./04_data.js');

/*
	Data Structures: Objects and Arrays

	simple data types: numbers, booleans, strings.

	more complex data types, known as data structures, are arrays and objects.
*/


console.log("//--------------DATASETS--------------//");


var array_1 = [1,2,3,4,5,6];
console.log(array_1);
console.log(array_1[0]);
console.log(array_1[3-1]);

console.log("//--------------PROPERTIES--------------//");

console.log(Math.max(1,3,4,35432));

// this does not work the same way with arrays
var array_2 = [2,3,4,5,6,7,8,9];
var maxArray_2 = Math.max.apply(null, array_2);
console.log(maxArray_2);

// this evalueates to error: 		> null.length;

//some notes:

	// most common ways to access properties in JS are with a dot "." and square brackets "[]". e.g. value.x and value[x]
	// the dot fetches and the brackets evaluate
	// And because property names can be any string, if you want to access a property named “2” or “John Doe”, you must use square brackets: value[2] or value["John Doe"].
	// elements in an array are stored in properties

// we use the dot to retrieve properties rather than the brackets because the dot is easier / faster to write
console.log(array_2.length);
console.log(array_2["length"]);

console.log("//--------------METHODS--------------//");

// there are methods also within the set of array and string object properties 	

var doh = "Doh";
console.log(typeof doh.toUpperCase); // here we are outputting the type of function that toUpperCase is, and we are calling it with the dot notation... now let's call it with the brackets:
console.log(typeof doh["toUpperCase"]); // also evaluates to 'function'. let's run it:

console.log(doh.toUpperCase()); // we need to include the parenthesis for the function to evaluate
console.log(doh.toLowerCase()); // similar thing

// some array method examples:

var mack = [];
mack.push("Mack"); // using push to include values at the end of an array
mack.push("the");
mack.push("knife");
console.log(mack);
console.log(mack.join(" ")); // flattening array of strings to a single string
console.log(mack.pop()); // removing the last value at the end of the array
console.log(mack);

	// notice how the join method behaves differently from push or pop as it does not permanently affect the nature of the mack object


// OBJECTS
console.log("OBJECTS");

var day1 = {
	squirrel: false,
	events: [
		"work",
		"touched tree",
		"pizza",
		"running",
		"television"
	]
};

console.log(day1);
console.log(day1.squirrel);
console.log(day1.events);
console.log(day1.events[2]);
console.log(day1.wolf);
day1.wolf = false;
console.log(day1.wolf);
console.log(day1);
delete day1.wolf; // delete operator deletes the property of the object
console.log(day1);
console.log("wolf" in day1);
console.log("squirrel" in day1); // in operator returns boolean value to indicate whether the object has a property


// we'll create a journal to keep track of what turns Jacques into a squirrel
var journal_old = [
	// element [0] in array
	{
		events: ["work", "touched tree", "pizza", "running", "television"],
		squirrel: false
	},
	// element [1] in array
	{
		events: ["work", "..."],
		squirrel: false
	},
	// element [2] in array
	{
		events: ["weekend", "..."],
		squirrel: true
	},
	// and so on
];

console.log("//--------------MUTABILITY--------------//");

// object values can be modified
// values in numbers, strings, and booleans are immutable -- they can be combined to derive new values, which is different. For example, we cannot change a string to replace "cat" for "rat", we'd have to re-declare the variable altogether


// When we have two numbers, 120 and 120, we can consider them precisely the same number, whether or not they refer to the same physical bits. But with objects, there is a difference between having two references to the same object and having two different objects that contain the same properties. Consider the following code:

var object1 = {value: 10};
var object2 = object1;
var object3 = {value: 10};

console.log(object1 == object2);
console.log(object1 == object3);
console.log(object1 === object3);

object1.value = 15;
console.log(object2.value);
console.log(object3.value);

// there is no "deep" object comparison operator (to compare object's properties) built into JS, but it can be written



// THE LYCANTHEROPE'S LOG

// here we define a journal_old_2 array and a function which pushes object elements into the journal array

var journal_old_2 = [];
console.log(journal_old_2); // just checking things out in the console

function addEntry(events, didIturnIntoASquirrel){
	journal_old_2.push({
		events: events,
		squirrel: didIturnIntoASquirrel
	});
}
console.log(addEntry); // just checking things out in the console

// entry 1
addEntry(["work","touched tree","pizza","running","television"],false);
// entry 2
addEntry(["work","ice cream","cauliflower","lasagna","touched tree","brushed teeth"],false);
// entry 3
addEntry(["weekend","cycling","break","peanuts","beer"],false);

console.log(journal_old_2);

console.log("//--------------FURTHER ARRAYOLOGY--------------//");

var todoList = [];
function rememberTo(task){
	todoList.push(task);
}
function whatIsNext(){
	return todoList.shift(); // returns and removes the element to the beginning of an array
}
function urgentlyRememberTo(task){
	todoList.unshift(task); // adds element to the beginning of an array
}

// indexOf() and lastIndexOf()
var array23 = [1,2,3,4,5,6];
console.log(array23.indexOf(2));
console.log(array23.lastIndexOf(4));

console.log("//--------------STRINGS AND THEIR PROPERTIES--------------//");

var myString = "Fido";
myString.myProperty = "value";
console.log(myString.myProperty);


console.log("coconuts".slice(4, 7));
console.log("coconut".indexOf("u"));

console.log("one two three".indexOf("ee"));

console.log("  okay \n ".trim());

var string = "abc";
console.log(string.length);
console.log(string.charAt(0));
console.log(string[1]);

console.log("//--------------THE ARGUMENTS OBJECT--------------//");

function argumentCounter() {
  console.log("You gave me", arguments.length, "arguments.");
}
argumentCounter("Straw man", "Tautology", "Ad hominem");


// function addEntry(squirrel) {
//   var entry = {events: [], squirrel: squirrel};
//   for (var i = 1; i < arguments.length; i++)
//     entry.events.push(arguments[i]);
//   journal.push(entry);
// }
// addEntry(true, "work", "touched tree", "pizza", "running", "television");

console.log("//--------------THE MATH OBJECT--------------//");

var someArray = [1,2,3,4,5];

console.log(someArray);

console.log(Math.max(someArray)); // this math function does not naturally work on arrays, but numbers separated by comma ","
console.log(Math.max(1,2,3,4,5));
console.log(Math.min(someArray)); // same here
console.log(Math.min(1,2,3,4,5));

console.log(Math.max.apply(null, someArray)); // but after some hacking...
console.log(Math.sqrt(81));

// we can also do trigonometry

function randomPointOnCircle(radius){
	var randomNum = Math.random();
	var angle = randomNum * 2 * Math.PI;
	
	console.log("Math.random() evaluates to ", randomNum);
	console.log("Math.PI evaluates to ", Math.PI);
	console.log("angle evaluates to ", angle);

	return {
		x: radius * Math.cos(angle),
		y: radius * Math.sin(angle)
	}
}

console.log(randomPointOnCircle(2));

console.log("Math.floor and Math.random and some more operations evaluates to ", Math.floor(Math.random() * 10));


console.log("//--------------THE GLOBAL OBJECT--------------//");

// var myGlobalVar = 10;
// console.log("myGlobalVar" in window);
// console.log(window.myGlobalVar);


console.log("//--------------EXERCISES--------------//");

// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.

function range(start, end){
	var rangeArray = [];
	for (i = start; i <= end; i++){
		rangeArray.push(i);
	}
	return rangeArray;
}

//-------------------------------------

// Next, write a sum function that takes an array of numbers and returns the sum of these numbers. Run the previous program and see whether it does indeed return 55.

function sum(array){
	var total = 0;
	for (i = 0; i < array.length; i++){
			total = total + array[i];
	}
	return total;
}

//-------------------------------------

// modify your range function to take an optional third argument that indicates the “step” value used to build up the array. If no step is given, the array elements go up by increments of one, corresponding to the old behavior.

function range2(start, end, step){
	var rangeArray = [];
	if (step == undefined){
		step = 1;
	}
	for (i = start; i <= end; i = i + step){
		rangeArray.push(i);
	}
	return rangeArray;
} // does not work with negative step values but too lazy to fix that

//-------------------------------------

// reverseArray, takes an array as argument and produces a new array that has the same elements in the inverse order.

function reverseArray(array){
	var reversedArray = [];
	for (i = array.length - 1; i >= 0; i--){
		reversedArray.push(array[i]);
	}
	return reversedArray;
}

//-------------------------------------

// reverseArrayInPlace, does what the reverse method does: it modifies the array given as argument in order to reverse its elements.

function reverseArrayInPlace(array){
	var limit = array.length; // declaring limit to fix arraylength value
	var clockDown = limit;
	for (i = 0; i < limit - 1; i++){
		var transArray = array.slice(i, limit - 1);
		clockDown = clockDown - 1;
		array.splice(i, clockDown);
		array = array.concat(transArray);
	}
	return array;
}

//-------------------------------------

// Write a function arrayToList that builds up a data structure like the previous one when given [1, 2, 3] as argument

	// e.g.

		//	var list = {
		//		value : 1,
		//		rest : {
		//			value : 2,
		//			rest : {
		//				value : 3,
		//				rest : null
		//			}
		//		}
		//	}


function recurS(n){
	if (n==0){
		return "Done";
	} else {
		console.log(n);
		return recurS(n-1);
	}
}

function arrayChopper(array){
	if(array.length == 0){
		return "Done";
	} else {
		console.log(array.pop());
		return arrayChopper(array);
	}
}

function flippedArrayChopper(array){
	if (array.length == 0){
		return "Done"
	} else {
		console.log(array.shift());
		return flippedArrayChopper(array);
	}
}

function arrayToList(array){
	if (array.length == 0){
		return null;
	} else {
		var list = new Object();
		list.value = array.shift();
		list.rest = arrayToList(array);
	}
	return list;
}

//-------------------------------------

// and write a listToArray function that produces an array from a list.

function listToArray(list){
	var newArray = [];
	function addElements (list){
		newArray.push(list.value);
		if (list.rest == null){
			return null;
		} else {
			addElements(list.rest);
		}
	}
	addElements(list);
	return newArray;
}

//-------------------------------------

// Also write the helper functions prepend, which takes an element and a list and creates a new list that adds the element to the front of the input list

var david = {
	firstName: "David",
	lastName: "Campos"
}

function prepend(element, list){
	// creates new list
	var newList = {};
	// adds element to the front of the input list
	newList[element] = element;
	// adds elements of the list given as argument
	var rounds = Object.keys(list).length;
	for(i = 0; i < rounds; i++){
		var name = Object.keys(david)[i];
		console.log(name);
		newList[name] = david[name];
	}
	return newList;
}

//-------------------------------------

// and nth, which takes a list and a number and returns the element at the given position in the list, or undefined when there is no such element.

function nth(list, number){
	var returnedKey = Object.keys(list)[number];
	var returnedValue = list[returnedKey];
	// -- out
	return returnedKey + " : " + returnedValue;
}

//-------------------------------------

// Write a function, deepEqual, that takes two values and returns true only if they are the same value or are objects with the same properties whose values are also equal when compared with a recursive call to deepEqual.

function deepEqual(list1, list2){
	var list1Length = Object.keys(list1).length;
	var list2Length = Object.keys(list2).length;
	if(list1 === list2){
		return true;
	}else if(typeof list1 != typeof list2 || list1Length != list2Length){
		return false;
	} else {
		var listLength = list1Length - 1;
		for(i = 0; i < listLength; i++){
			// list1 key-value pair
			var returnedKey1 = Object.keys(list1)[i];
			var returnedValue1 = list1[returnedKey1];
			// list2 key-value pair
			var returnedKey2 = Object.keys(list2)[i];
			var returnedValue2 = list2[returnedKey2];
			// comparing
			if(returnedKey1 != returnedKey2){
				return false;
			} else if (returnedValue1 != returnedValue2){
				return false;
			}
		}
		return true;
	}
}

// declaring sarah object for comparison
var sarah = {
	firstName: "Sarah",
	lastName: "Seagrave"
}