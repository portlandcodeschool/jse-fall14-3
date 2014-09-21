var array = {length:0};

array.push = function(value) { 
	array[this.length] = value;
	return ++this.length;
}

array.pop = function() {
	delete array[this.length-1]
	return --this.length;
}

array.join = function(connector) {
	var fullString = "";
	for (var key in array) {
		if (key<this.length) {
			fullString = (fullString+connector+array[key]);
		}
	}
	return fullString;
}
