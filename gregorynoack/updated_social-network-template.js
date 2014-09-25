
var people = {};

people.index = {};

people.meet = function(nameA,nameB) { 
	nameA =  nameA.toLowerCase();
	nameB =  nameB.toLowerCase();
	if(nameA == nameB){
		alert("There can be only one Highlander!")
	}
	if((!(nameA in this.index)) && (!(nameB in this.index))){
		this.index[nameA] = {name:nameA, friends:{}};
		this.index[nameB] = {name:nameB, friends:{}};
		this.index[nameA].friends[nameB] = 1;
		this.index[nameB].friends[nameA] = 1;
	}
	else if((!(nameA in this.index)) && (nameB in this.index)){
		this.index[nameA] = {name:nameA, friends:{}};
		this.index[nameA].friends[nameB] = 1;
		this.index[nameB].friends[nameA] = 1;
	}
	else if((!(nameB in this.index)) && (nameA in this.index)){
		this.index[nameB] = {name:nameB, friends:{}};
		this.index[nameA].friends[nameB] = 1;
		this.index[nameB].friends[nameA] = 1;
	}	
	else if((nameA in this.index[nameB]['friends']) && (nameB in this.index[nameA]['friends'])){
	++this.index[nameA].friends[nameB];
	++this.index[nameB].friends[nameA];
	}
	return this;	
}

people.haveMet = function(nameA,nameB) { //returns a number or falsish
	nameA =  nameA.toLowerCase();
	nameB =  nameB.toLowerCase();
	if((!(nameA in this.index)) && (!(nameB in this.index))){
		alert(nameA + " and " + nameB + " name not found!");
	}else if(!(nameA in this.index)){
		alert(nameA + " name not found!");
	}else if(!(nameB in this.index)){
		alert(nameB + " name not found!");
	}else if((nameA in this.index) && (nameB in this.index)){
		return this['index'][nameB]['friends'][nameA]; ;
	}
}

people.friendsOf = function(name) { //returns a string
  if (!(name in people.index)) {return undefined;}
  var friends = people.index[name].friends;
  var friendsInArr = [];
  for (var key in friendz) {
    friendsInArr.push(key);
  }
  return friendsInArr.sort();
}
