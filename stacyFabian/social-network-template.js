// take in two name arguments, check to see if they are in the 'people' array
	// add them to the same 'people' array
	// if they don't exist, set the counter to 1
// check to see if the name exists in the object of each other's name and if not, add it.


var people = {};

people.index = {};

people.meet = function(nameA,nameB) {

	if (!(nameA in people.index)) {
		people.index[nameA] = {};
	}
	if (!(nameB in people.index)) {
		people.index[nameB] = {};
	}
	if (!(nameA in people.index[nameB])) {
		people.index[nameB] = nameA
	}
	if (!(nameB in people.index[nameA])) {
		people.index[nameA] = nameB
	}
}
// increment the number of times
// return number of times these two have met including this one

people.haveMet = function(nameA,nameB) { //returns a number or falsish
	// look for the object or the numbers and then return
}


// pulls the value of the property of nameX in the other
// name object
// exceptions: If they have not met or the person doesn't
// exist, return something else.

people.friendsOf = function(name) { //returns a string
	// pull the items inside the "friends of nameA"/nameB into
	// an array using the Object.keys(people) function 
	// then pull both name arrays together using .join
	// Object.keys(peopl.index["dan"].friends)
}

