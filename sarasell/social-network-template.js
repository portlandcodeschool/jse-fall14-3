
var people = {};

people.index = {};

};

people.meet = function(Sara,Joel) { // returns a number
	if (!(Sara in people)) {
			people[Sara] = {};
	}
	if (!(Joel in people)) {
			people[Joel] = {};
	}
	if (!(Sara in people[Joel])) {
		people[Joel] = "Sara"; //this is definitely not right
	}
	if (!(Joel in people[Sara])) {
		people[Sara] = "Joel";	//this is definitely not right
	}
};
	return ++this.length;
	count
	return number of times those people have met, including this new meeting.
	this involves a counter, i think
}

people.haveMet = function(nameA,nameB) { //returns a number or falsish
	if have met {
		return > 0
	}
	else return undefined
	};
}

people.friendsOf = function(name) { //returns a string
	if have met anyone {
		return all of those names (listed in alphabetical order and only appear once)
	}
	else {
		return undefined
	}
}

