var people = {};

people.index = {};

people.meet = function(nameA,nameB) { // returns a number

  var person1 = nameA.toLowerCase();

  var person2 = nameB.toLowerCase();

  if (person1 != person2) {
  
    if (!(nameA in people.index)) {

      people.index[nameA] = {name: nameA, friends:{}};

    }

    if (!(nameB in people.index)) {

      people.index[nameB] = {name: nameB, friends:{}};

    }

    if (!(nameB in people.index[nameA].friends)) {

      people.index[nameA].friends[nameB] = 1;

    } else {

      ++people.index[nameA].friends[nameB];

    }

    if (!(nameA in people.index[nameB].friends)) {

      people.index[nameB].friends[nameA] = 1;

    } else {

      ++people.index[nameB].friends[nameA];

    }

  	return people.index[nameB].friends[nameA];
    
  } else {

  	return "You've already met yourself."

  }
  
}


people.haveMet = function(nameA,nameB) { //returns a number or falsish

	var person1 = nameA.toLowerCase();

  	var person2 = nameB.toLowerCase();

  	if (person1 != person2) {

		if (!(nameB in people.index[nameA].friends) || !(nameA in people.index[nameB].friends)) {

			return "These two have not yet met.";

		} else {

			return people.index[nameB].friends[nameA];

		}
	} else {

		return "Yes, you've already met yourself.";

	}
	
}

people.friendsOf = function(name) { //returns a string

  if (!(name in people.index)) {return undefined;}

  var friendz = people.index[name].friends;

  var arrOfNames = [];
  
  for (var key in friendz) {

    arrOfNames.push(key);

  }
  
  return arrOfNames.sort();

}


