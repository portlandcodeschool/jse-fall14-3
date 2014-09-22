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

var objA = ;
var objB = ;
union(objA,objB);
assert(unitedObj==0,  "Test 1 failed");

var objA = ;
var objB = ;
assert(union(objA,objB)===0,  "Test 2 failed");

var objA = ;
var objB = ;
assert(union(objA,objB)===0,  "Test 3 failed");

// intersect assertions

var objA = ;
var objB = ;
assert(intersect(objA,objB)===0,  "Test 4 failed");

var objA = ;
var objB = ;
assert(intersect(objA,objB)===0,  "Test 5 failed");

var objA = ;
var objB = ;
assert(intersect(objA,objB)===0,  "Test 6 failed");

// subtract assertions

var objA = ;
var objB = ;
assert(subtract(objA,objB)===0,  "Test 7 failed");

var objA = ;
var objB = ;
assert(subtract(objA,objB)===0,  "Test 8 failed");

var objA = ;
var objB = ;
assert(subtract(objA,objB)===0,  "Test 9 failed");


// *** d ***

