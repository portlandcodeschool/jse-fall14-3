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
	for (var key=0; key<this.length; key++) {
		fullString = fullString+this[key];
	if (key<this.length-1) {
		fullString = fullString+connector;
		}
	}
	return fullString;
}
