// *** a ***

function copy(obj) {
	for (var prop in obj) {
		copiedObj[prop] = obj[prop];
	}
}

function equal(objA, objB) {
	for (var prop in objA) {
		if (!(prop in objB)) {return false}; 
		if (objA[prop] !== objB[prop]) {return false};
	}
	
	for (var prop in objB) {
		if (!(prop in objA)) {return false}; 
		if (objB[prop] !== objA[prop]) {return false};
	}
	
	return true;
}

function similar (objA, objB) {
	for (var prop in objA) {
		if (!(prop in objB)) {return false}; 
	}
	
	for (var prop in objB) {
		if (!(prop in objA)) {return false}; 
	}
	
	return true;
}

// *** b ***

// union function

var unitedObj {};

function union(objA,objB) {
	for (var prop in objA) {
		unitedObj[prop] = objA[prop];
	}

	for (var prop in objB) {
		if (!(prop in unitedObj)) {
			unitedObj[prop] = objB[prop];
		}
		if (objB[prop] !== objA[prop]) {
			unitedObj[prop] = (objA[prop] || objB[prop]);
		}
	}
}

// intersect function

var intObj = {};

function intersect(objA,objB) {
	for (var prop in objA) {
		if (prop in objB) {
			intObj[prop] = (objA[prop] && objB[prop]);
		} 
	}

}

// subtract function

function subtract(objA,objB) {
	for (var prop in objA) {
		if (prop in objB) {
			delete objA[prop]; 
		}
	}
}

// Identify case in which "b minus a" equals "a minus b": This would be the case when the objects 
// contain the exact same properties going into the function, as they result would be an empty 
// function both ways. This also applies to two empty functions going into the function.

// *** c *** - in progress

// Write three sample assertions to test each of your three merging functions (9 total).
// Remember that when comparing your results to the expected results, you'll need to see if 
// objects are equal() but not identical.

function assert(claim,message) {
    if (!claim) console.error(message);
}

// union assertions

var objA = {tea:"green", hat:"beret", shape:"circle"};
var objB = {shape:"square", hat:"beret", pet: "frog", tea:"black"};
var testObj1 = {tea: "green", hat: "beret", shape: "circle", pet: "frog"};
assert(equal(union(objA,objB),testObj1),  "Test 1 failed");



var objC = {tea:false, hat:"baseball cap", temperature: "cold"};
var objD = {shape:"square", hat:"beret", pet: "frog", tea:"black"};
var testObj2 = {tea: "black", hat: "baseball cap", temperature: "cold", shape: "square", pet: "frog"};
assert(equal(union(objC,objD),testObj2),  "Test 2 failed");



var objE = {1: true, duck: "quack", cereal:"corn flakes"};
var objF = {1: "lake", feet:true, water: false};
var testObj3 = {1: true, duck: "quack", cereal: "corn flakes", feet: true, water: false};
assert(equal(union(objE,objF),testObj3),  "Test 3 failed");

// intersect assertions

var objG = {a:1, b:2, four:5};
var objH = {animal:"zebra", b:4, four:false};
var testObj4 = {b: 4, four: false};
assert(equal(intersect(objG,objH),testObj4),  "Test 4 failed");


var objI = {a:0, b:3, c:7};
var objJ = {z:4, b:8, c:7, d:5};
var testObj5 = {b: 8, c: 7};
assert(equal(intersect(objI,objJ),testObj5),  "Test 5 failed");



var objK = {water:"tap", paper:"white", caffeine:"coffee"};
var objL = {water:"bottled", paper:"white", caffeine:"tea"};
var testObj6 = {water: "bottled", paper: "white", caffeine: "tea"};
assert(equal(intersect(objK,objL),testObj6),  "Test 6 failed");

// subtract assertions

var objM = {water:"tap", paper:"white", caffeine:"coffee"};
var objN = {water:"bottled", paper:"white", caffeine:"tea"};
var testObj7 = {};
assert(equal(subtract(objM,objN),testObj7),  "Test 7 failed");

var objO = {a:1, b:2, four:5};
var objP = {animal:"zebra", b:4, four:false};
var testObj8 = {a:1};
assert(equal(intersect(objO,objP),testObj8),  "Test 8 failed");

var objQ = {tea:false, hat:"baseball cap", temperature: "cold"};
var objR = {shape:"square", hat:"beret", pet: "frog", tea:"black"};
var testObj9 = {temperature:"cold"};
assert(equal(intersect(objQ,objR),testObj9),  "Test 9 failed");


// *** d ***

// This will not work if there is a property in both objects, but the one of the properties is false. 
// This is because of the (A ? A : B ) expression that is implemented by the || operator.