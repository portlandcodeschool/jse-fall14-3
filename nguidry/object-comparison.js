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

function union(objA,objB) {
	// evaluate whether properties are the same in each
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

// The intersection of objects A,B is a new object which contains only those properties found in BOTH A and B.  
// The value of each intersecting property is `(A[key] && B[key])`.
// For example, the intersection of `{a:1,b:0}` and `{a:0,c:0}` is `{a:0}`.

var objA = {1: "test", 2:"pencil", k:true};
var objB = {2: "frog", k: true, z:"llama"};
var intObj = {};

function intersect(objA,objB) {

}

// The subtraction of B from A, aka "A minus B", is an object which contains all the properties of A which are NOT in B.  
// Note that this merge is usually not symmetric: _A minus B_ doesn't equal _B minus A_ (except in one case, which you 
// should identify!) For example, `{a:1,b:0}` minus `{a:0,c:0}` is `{b:0}`, and the reverse subtraction is `{c:0}`.

function subtract(objA,objB) {

}

// *** c ***

// *** d ***

