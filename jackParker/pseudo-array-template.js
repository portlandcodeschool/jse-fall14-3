var array = {

	length: 0
	
};

array.pop = function() { //changes array, returns ??
	
	// store the last (numbered) property
	// decrement our length
	var last = this[--this.length];
	
	// delete it
	delete this[this.length];
	
	// return the last property
	return last;
	
}

array.push = function(element) { //changes array, returns a number
	
	// add our new element to our object (array)
	this[this.length] = element;
	
	// return the new length of our object (array)
	return ++this.length;
	
}

array.join = function(delimeter = ', ') { //returns a string
	
	var string = '';
	
	for(var counter = 0; counter < this.length; counter++) {
		
		if(counter === this.length - 1) {
		
			string += this[counter];
			
		} else {
		
			string += this[counter] + delimeter;	
			
		}
		
	}
	
	return string;
	
}