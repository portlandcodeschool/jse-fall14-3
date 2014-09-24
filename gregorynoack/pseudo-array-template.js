
var array = {};

array.length = 0;




array.pop = function() { //changes array, returns ??
	if(this.length > 0){
  	delete this[this.length -1]
		this.length = this.length - 1;
	}
}


array.push = function(val) { //changes array, returns a number
	this.length++;
	var x = this.length -1;
	return this[x] = val;
	
}

array.push('a');
array.push(1);
array.push('foo');
array.push('b');



var array = {0:"a", 1:"b", 2:"c", 3:"d"}
array.length = 4;
array.join = function(val) { 
	x = "";
	for(var i = 0; this.length > i; i++){
		x += this[i] + val;	
	}
	return x;
}

var x = array.join('a');
console.log(array.join('a'));
