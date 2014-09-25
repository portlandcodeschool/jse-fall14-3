// Exercise 4a

//* `people.meet(nameA,nameB)` should accept two names, update `people`, and 
//return the total number of times those two have met, including this new 
//meeting. If either person isn't yet represented in `people`, add them.
//Then increment a count of the meetings between them. Assume that the order 
//of arguments doesn't matter (i.e. `meet(A,B)` is the same as `meet(B,A)`), 
//and that meeting oneself _(A==B)_ has no effect.

//* `people.haveMet(nameA,nameB)` should return a number greater than 0 if those 
//people have met, and some falseish value if they haven't or don't exist.

//* `people.friendsOf(name)` should return a string listing the names of all 
//people whom `name` has met at least once (or undefined if `name` doesn't exist).   List the names in alphabetical order, and make sure each name appears only once.



var people = {};

people.index = {};

people.meet = function(nameA,nameB) { 
  if(nameA === nameB) {return;}

  if (this.index.hasOwnProperty(nameA) == false) {
    this.index[nameA] = {
    	name: nameA, 
    	friends};
    this.index[nameA]friends[nameB];
  	}
  
  if (this.index.hasOwnProperty(nameB) == false) {
    this.index[nameB] = {
    	name: nameB, 
    	friends};
    this.index[nameB]friends[nameA];
  	}	else {
  		[nameA]friends[nameB]++; //this incrementer isn't working
    	[nameB]friends[nameA]++;
  }
  
  return [nameA]friends[nameB];
}

people.meet("Dan", "Ben");


people.haveMet = function(nameA,nameB) { //returns a number or falsish
	if (this.index.hasOwnProperty('nameA') == false) {
   return 0;
  } else {
    return this.index[nameA]friends[nameB][timesMet];
  }
}

people.friendsOf = function(name) { //returns a string
	//incorporate getOwnPropertyNames
var friendsList = [];
  for (var prop in this.index[name]friends) {
    friendsList.push(prop);
  }
  friendsList.sort();
  friendsList.join(" /n");
  return friendsList;
}

