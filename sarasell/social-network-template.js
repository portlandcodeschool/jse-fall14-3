
var people = {};

people.index = {};

people.meet = function(nameA,nameB) { // returns a number
	if (!(nameA in people.index)) {
			people.index[nameA] = {};
	}
	if (!(nameB in people.index)) {
			people.index[nameB] = {};
	}
	if (!(nameA in people.index[nameB])) {
		people.index[nameB][nameA] = people.index[nameA];
	}
	if (!(nameB in people.index[nameA])) {
		people.index[nameA][nameB] = people.index[nameB];
	}
}
//	return ++this.length;
//	count
//	return number of times those people have met, including this new meeting.
//	this involves a counter, i think
//	if they dont yet exist, set counter to 1
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

