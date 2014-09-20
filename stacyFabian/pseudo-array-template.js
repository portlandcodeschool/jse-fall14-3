var array = {length:0};

array.push = function(value) { 
	array[this.length] = value;
	return ++this.length;
}

array.pop = function() {
	delete array[this.length-1]
	return --this.length;
}

array.join = function(content) { //returns a string
	// for loop to pull out and return each item in the object
	var fullString = ""
	for (content=0; content<=this.length; content++) {
		var fullString = fullString+" "+content
	}
	return var fullString
}
