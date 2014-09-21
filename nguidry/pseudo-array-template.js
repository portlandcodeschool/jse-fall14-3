//**a)**  Give _array_ a property named _length_ which is always a
//non-negative integer, and three more properties _pop_, _push_, and
//_join_ which are functions (i.e. methods) behaving exactly like the
//corresponding method of real Arrays.  When your _pop_ and _push_ methods 
//modify the array, _length_ will change accordingly.

//You may use the enclosed [template file](pseudo-array-template.js) to get started.

//_Hint:_ Within each method, to refer to your array object, you may use either the global 
// variable _array_ or the keyword _this_.


var array = {length:0};

array.pop = function() {
  delete this[this.length-1];
  return --this.length;
}

array.push = function(newValue) { 
	var newValue = "";
	this[this.length] = newValue;
	return ++this.length;
}

array.join = function(joinString) { //returns a string
	var arrayString = "";	
	for (var propNum = 0; propNum < this.length; propNum++) {
		if (propNum < (this.length-1)) {	
    		arrayString = arrayString + this[propNum] + joinString;
    	} else {
    		arrayString = arrayString + this[propNum];
    	}
	}
	return arrayString;
}

//**b)**  Assuming you've implemented _array_ correctly, predict the outcome
//of the following:

array.length=0;
array.push('c');
array.push('b');
array.push('a');
array.pop();
console.log(array.join('a')); //What will this print?

// this prints the string "cab"

//**c)**  Similarly, predict the outcome here:

array.length=0;
console.log(array.join(array.push(array.push('a')))); // What will this print?

// this prints the string "a21"
