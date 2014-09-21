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

var newValue="";

array.push = function(newValue) { 
	this[this.length] = newValue;
	return ++this.length;
}

//var array = {length:0, 1:"jimbo", 2:"oph", 3:"mona"};

array.join = function(joinString) { //returns a string
	var arrayString = "";
	for (var key in array) {
    arrayString = arrayString + this[key] + joinString;
    //need to account for cutoff before final element (works otherwise)
  }
  
	return arrayString;
}

//array.join(' + ');

//**b)**  Assuming you've implemented _array_ correctly, predict the outcome
//of the following:

array.length=0;
array.push('c');
array.push('b');
array.push('a');
array.pop();
console.log(array.join('a')); //What will this print?

//**c)**  Similarly, predict the outcome here:

array.length=0;
console.log(array.join(array.push(array.push('a')))); // What will this print?


