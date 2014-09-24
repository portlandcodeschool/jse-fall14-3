
var people = {};

people.index = {};


people.meet = function(nameA,nameB) { // returns a number
 
	nameA =  nameA.toLowerCase();
	nameB =  nameB.toLowerCase();


 // checks if names are equal
	if(nameA == nameB){
		alert("There can be only one Highlander!")
	}else if((!(nameA in this)) && (!(nameB in this))){
			this[nameA] = {};
			this[nameB] = {};
			this.index[nameA] = this[nameA];
			this.index[nameB] = this[nameB];
			this[nameA].name = nameA;
			this[nameB].name = nameB;
			this[nameA]['friends'] = {};
			this[nameB]['friends'] = {};
			//add friend to friends
			this[nameA]['friends'][nameB] = {};
			this[nameB]['friends'][nameA] = {};
			this[nameA]['friends'][nameB]['name'] = nameB;
			this[nameB]['friends'][nameA]['name'] = nameA;
			this[nameA]['friends'][nameB]['meetings'] = 1;
			this[nameB]['friends'][nameA]['meetings'] = 1;
	}else if((nameA in this) && (nameB in this) && (nameB in this[nameA]['friends']) && (nameA in this[nameB]['friends'])  ){
		var i = this[nameB]['friends'][nameA]['meetings'];
		var i = i + 1; 
			this[nameA]['friends'][nameB]['meetings'] = i;
			this[nameB]['friends'][nameA]['meetings'] = i;
	}else if((nameA in this) && (nameB in this)){
			//add friend to friends
			this[nameA]['friends'][nameB] = {};
			this[nameB]['friends'][nameA] = {};
			this[nameA]['friends'][nameB]['name'] = nameB;
			this[nameB]['friends'][nameA]['name'] = nameA;
			this[nameA]['friends'][nameB]['meetings'] = 1;
			this[nameB]['friends'][nameA]['meetings'] = 1;
	}else if (!(nameA in this) && (nameB in this)){
			//add nameA not in obj
			this[nameA] = {};
			this.index[nameA] = this[nameA];
			this[nameA].name = nameA;
			this[nameA]['friends'] = {};
			//add friend to friends
			this[nameA]['friends'][nameB] = {};
			this[nameA]['friends'][nameB]['name'] = nameB;
			this[nameA]['friends'][nameB]['meetings'] = 1;
			//add new friend to existing person
			this[nameB]['friends'][nameA] = {};
			this[nameB]['friends'][nameA]['name'] = nameA;
			this[nameB]['friends'][nameA]['meetings'] = 1;
	}else if(!(nameB in this) && (nameA in this)){
			//add nameB not in obj
			this[nameB] = {};
			this.index[nameB] = this[nameB];
			this[nameB].name = nameB;
			this[nameB]['friends'] = {};
			//add friend to friends
			this[nameB]['friends'][nameA] = {};
			this[nameB]['friends'][nameA]['name'] = nameA;
			this[nameB]['friends'][nameA]['meetings'] = 1;
			//add new friend to existing person
			this[nameA]['friends'][nameB] = {};
			this[nameA]['friends'][nameB]['name'] = nameB;
			this[nameA]['friends'][nameB]['meetings'] = 1;
	}
	return this;	
}

people.haveMet = function(nameA,nameB) { //returns a number or falsish
		nameA =  nameA.toLowerCase();
	nameB =  nameB.toLowerCase();
	if((!(nameA in this)) && (!(nameB in this))){
		alert(nameA + " and " + nameB + " name not found!");
	}else if(!(nameA in this)){
		alert(nameA + " name not found!");
	}else if(!(nameB in this)){
		alert(nameB + " name not found!");
	}else if(nameA == nameB){
		alert("you can not meet yourself");
	}else if((nameA in this[nameB]['friends'])){
			return nameA + " and " + nameB + " have had " + this[nameA]['friends'][nameB]['meetings'] + " meetings"
	}
}

people.friendsOf = function(name) { //returns a string
	name =  name.toLowerCase();
var x = "";
for(var key in this.index[name].friends){
	x += '\n' + key;
}
return name + ' has these friends: ' + x;
}

