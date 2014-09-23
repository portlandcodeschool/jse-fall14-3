var array = {length:0};

array.pop = function() {
	
	delete this[this.length-1] 
	 
	 return --this.length;

}

array.push = function(a) { 
	
	this[this.length]=a
	
	return ++this.length;

}

array.join = function(val) { 

	if(val === undefined){
		val = ',';
	}

	var strng = '';
	
	for(var i = 0; i < this.length; i++){
		
		if(i < this.length - 1){

		strng += this[i] + val;
		
		}
		else{
			strng += this[i];
		}
	}

	return strng;
}


**B)**

array.length=0;

	P: This will not actually shorten the number of properties(w/ corresponding values) in the pseudo array but rather just change the property lengths value.
	
	OutC: I was correct!!


array.push('c');

	P: This will quite simply push the string 'c' into the end of the pseudo array.

	OutC: Oddly enough this screwed up the order in which properties are pushed into the array. The c ended up at the beginning of the array. Which in hindsight makes complete sense because Javascript is organizing the array by numerical and alphabetical order, pushing numbericals to the rear and alphabeticals to the front of the lineup.

array.push('b');

	P: I would imagine that this string would get pushed to the front of the array, in front of the previous 'c' string that was passed.

	OutC: Now Javascript put this string back to the end of the lineup. I am beginning to suspect that the lower the length value the closer to the front of the lineup the property passed will be. I realize now that the lengths are the property and the values passed are the values of the length. So the value of the length dictates where a value passed will end up at.
array.push('a');
	
	P: Straight to the back if I keep its property length the hightest in the set.

	OutC: As I assumed the push acted accordingly. Yup. I just changed the length value back to zero and this time, on my second pass of the 'a' string, it was pushed immediately to the front.

array.pop();
	
	P: Logic would dicate that this should remove the last value passed, regardless of where it sits in the lineup of the array. So I predict the 'a' string at the beginning of the array will be popped.

	OutC: Yup! My prediction was correct!

console.log(array.join('a'));

	P: This will console log the acutal string of the whole array being joined with the value a at the end of every property.

	OutC: Oddly enough it did nothing. It returned undefined. and when I simply arra.joined the 'a' string, it returned an empty string. Huh. Well I re-inserted all of my code, and started all over again. When I did this the console log simply removed the quotes from my array and printed 'a' (without the quotes) at the end of every value. But if I set length to zero, and then try to pass this console log, that is when I get the undefined. Odd.

array.length=0;
console.log(array.join(array.push(array.push('a'))))
	
	P: I really dont know what this will do. Try to join the a will pushing the value a into the string.

	OutC: Well interestingly enough all it logged was the two middled values preceded by the value a. 










