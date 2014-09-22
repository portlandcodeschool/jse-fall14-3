var array = {length:0};

array.pop = function() { 
	delete this[this.length-1];
	return --this.length;
}; /*to call this: array.pop()*/

/*make length the last property in the object.
in function need to call the length
then change its property value to one larger.*/

array.push= function(n) { 
	this[this.length] = n;
	return ++this.length;
}; /*to call this: array.push(insertvalue)*/

/*get the object values, insert " " between each one, and make
 it a string*/
//array.join still not working. arghhhh...
array.join = function(connector) {
	var string = ' ';
	for (var key = 0; key < this[this.length]; key++); {
		string += this[key];
	if (key <= this[this.length-1]); {
		string += connector;
	}
	}
	return string;
};