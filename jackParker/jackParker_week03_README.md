## Section 1
---

a) Refer to template file `pseudo-array-template.js` for answers.

b) This will print `'cab'` to the console.

c) This will print `'a21'` to the console.

<br>

## Section 2
---

Refer to template file `cards2-template.js` for answers.

<br>

## Section 3
---

a)
````
function copy(obj) {
			
	var objCopy = {};
	
	for(key in obj) {
		
		objCopy[key] = obj[key];
		
	}
	
	return objCopy;
	
}

// ------------------------------------------

function equal(objA, objB) {
				
	for(var key in objA) {
		
		if(objA[key] !== objB[key]) {
			
			return false;
			
		}
		
	}
	
	return true;
	
}

// ------------------------------------------

function similar(objA, objB) {

	for(var key in objA) {
		
		if(!(key in objB)) {
			
			return false;
			
		}
		
	}
	
	return true;
	
}
````

b)
````
function union(objA, objB) {
				
	objNew = {};
	
	for(var key in objA) {
		
		if(key in objB) {
			
			objNew[key] = objA[key] || objB[key];
			
		} else {
			
			objNew[key] = objA[key];
			
		}
		
	}
	
	for(var key in objB) {
		
		if(!(key in objA)) {
			
			objNew[key] = objB[key];
			
		}
		
	}
	
	return objNew;
}

// ------------------------------------------

function intersect(objA, objB) {
					
	objNew = {};
	
	for(var key in objA) {
		
		if(key in objB) {
			
			objNew[key] = objA[key] && objB[key];
			
		}
		
	}
	
	return objNew;
	
}

// ------------------------------------------

function subtract(objA, objB) {
					
	objNew = {};
	
	for(var key in objA) {
		
		if(!(key in objB)) {
			
			objNew[key] = objA[key];
			
		}
		
	}
	
	return objNew;
	
}
````

c)
````
// testing
			
function assert(claim, message) {

    if (!claim) console.error(message);
    
}


/*
 *  union
 *
*/


	// test 1
	
	var a = {
		a:1, 
		b:0
	};
	
	var	b = {
		a:0,
		c:0
	};
	
	var result = {
		a:1,
		b:0,
		c:0
	};
	
	assert(equal(union(a, b), result),  'Union test 1 failed');
	
	
	
	// test 2
	
	var a = {
		a:0, 
		b:0, 
		c:0
	};
	
	var b = {
		a:1, 
		b:1, 
		c:1
	};
	
	var result = {
		a:1, 
		b:1, 
		c:1
	};
	
	assert(equal(union(a, b), result),  'Union test 2 failed');
	
	
	
	// test 3
	
	var a = {
		a:1, 
		b:2, 
		c:3
	};
	
	var b = {
		a:3, 
		b:2, 
		c:1
	};
	
	var result = {
		a:1, 
		b:2, 
		c:3
	};
	
	assert(equal(union(a, b), result),  'Union test 3 failed');
	


/*
 *  intersect
 *
*/


	// test 1
	
	var a = {
		a:1,
		b:0
	};
	
	var	b = {
		a:0,
		c:0
	};
	
	var result = {
		a:0
	};
	
	assert(equal(intersect(a, b), result),  'Intersect test 1 failed');
	
	
	
	// test 2
	
	var a = {
		a:0, 
		b:0, 
		c:0
	};
	
	var b = {
		a:1, 
		b:1, 
		c:1
	};
	
	var result = {
		a:0, 
		b:0, 
		c:0
	};
	
	assert(equal(intersect(a, b), result),  'Intersect test 2 failed');
	
	
	
	// test 3
	
	var a = {
		a:1, 
		b:2, 
		c:3
	};
	
	var b = {
		a:3, 
		b:2, 
		c:1
	};
	
	var result = {
		a:3, 
		b:2, 
		c:1
	};
	
	assert(equal(intersect(a, b), result),  'Intersect test 3 failed');
	
	
	
/*
 *  subtract
 *
*/


	// test 1
	
	var a = {
		a:1,
		b:0
	};
	
	var	b = {
		a:0,
		c:0
	};
	
	var result = {
		b:0
	};
	
	assert(equal(subtract(a, b), result),  'Subtract test 1 failed');
	
	
	
	// test 2
	
	var a = {
		a:0, 
		b:0, 
		c:0
	};
	
	var b = {
		a:1, 
		c:1, 
		d:1
	};
	
	var result = { 
		b:0
	};
	
	assert(equal(subtract(a, b), result),  'Subtract test 2 failed');
	
	
	
	// test 3
	
	var a = {
		a:1, 
		b:2, 
		c:3
	};
	
	var b = {
		d:3, 
		e:2, 
		f:1
	};
	
	var result = {
		a:1, 
		b:2, 
		c:3
	};
	
	assert(equal(subtract(a, b), result),  'Subtract test 3 failed');
````

d) When merging objects and comparing them by seeing if they are similar, we are only comparing their properties. When we compare both their properties and values we find that swapping the objects give us very different results based on the logic of the merge.













