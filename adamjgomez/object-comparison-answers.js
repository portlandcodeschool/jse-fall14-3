// a) Write a function copy(obj), which duplicates an object (not just copying a reference to it). You only need to duplicate only one level: if obj contains another object inner, the duplicate may share inner rather than copying it too.

var obj = { first: 'a', second: 'b', third: 'c'}

function copy(obj) {

  var dup = {};
  for (var key in obj) {
    dup[key]=obj[key];
  }
  return dup;
}





// Write another function to compare two objects: equal(objA,objB) should return true only when objA and objB have exactly the same properties with the same values. Note that two empty objects should be considered equal.


var obj1 = { a:'apple', b:'bean', c:'carrot'}

var obj2 = { a:'apple', b:'bean', c:'pie'}

var compare = function(obj1, obj2) {
  for (var key in obj1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }
  return true;
}


// Write a third function: similar(objA,objB) should return true only when objA and objB have exactly the same properties, regardless of their values.


var objA = { a:'fall', b:'spring', c:'summer'};

var objB = { a:'apple', b:'bean', d:'pie'};

var similar = function(objA, objB) {
  for (var key in objA) {
    if (key in objB !== key in objA) { // a better way to write it is: if (!(key in objB));
      return false;
    }
  }
  return true;
}
















// NOTES BELOW IGNORE

// meet (arg2) = people.index[arg1]



// object for joe
// and an object for joe's friends list.


// people.index[who].friends




//set to zero
// people.index[who].friends[whichFriend]



// meet function should go both ways.

//

// who = Dan
// whoElse = Adam

// people.index[who].friends[whichFriend]
// people.index[whoElse].friends[who]


// increment 
//make sure that these boxes are build for a new person so you can go down that path with out creating an error.


