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

array.join = function(val) { //returns a string
	
	for(var key in this) {
    if( this.hasOwnProperty( key ) ) {
             if( this[ key ] === val )
                 return val;
        }
	}
}
array.join('a');

console.log(array.join('a'));