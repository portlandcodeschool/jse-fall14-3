var array = {length:0};

array.push = function(value) {
  this[this.length] = value
  return ++this.length;
}

array.pop = function() {
  delete this[this.length-1];
  return --this.length;
}

array.join = function(separator) { // .join is a method
  if (separator === undefined) {   // Determin if separator is undefined.
    separator = ', '; // If separator is undefined do this.
  }
  var stringify = ''; // Create separator variable and set it equal to an empty string.
  for (var count=0; count<this.length; count++) { // Set up counter starting at zero and incrementor
    if (count < this.length - 1) {
      stringify += this[count] + separator;
    } else {
      stringify += this[count];
    }
  }
  return stringify;
}





// Notes from MDN

/*
Strict equality and undefined

You can use undefined and the strict equality and inequality operators to determine whether a variable has a value. In the following code, the variable x is not defined, and the if statement evaluates to true.

var x;
if (x === undefined) {
   // these statements execute
   console.log("this is undefined dude")
}
else {
   // these statements do not execute
   console.log("All good.")
}

*/






