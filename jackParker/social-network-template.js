
var people = {};

people.index = {
	
};

people.meet = function(nameA, nameB) { // returns a number
	
	nameA = nameA.toLowerCase();
	nameB = nameB.toLowerCase();

	// if they have met and aren't the same person
	if(this.haveMet(nameA, nameB) && (nameA !== nameB)) {
		
		++this.index[nameA].friends[nameB];
		++this.index[nameB].friends[nameA];
		
		return this.haveMet(nameA, nameB);
	
	// if they haven't met and aren't the same person
	} else if(nameA !== nameB) {
		
		// if nameA doesn't exist
		if(!(nameA in this.index)) {
			
			this.index[nameA] = {
			
				name: nameA,
				friends: {}
			};
			
			this.index[nameA].friends[nameB] = 1;
			
		} else {
			
			this.index[nameA].friends[nameB] = 1;
			
		}
		
		// if nameB doesn't exist
		if(!(nameB in this.index)) {
			
			this.index[nameB] = {
			
				name: nameB,
				friends: {}
			};
			
			this.index[nameB].friends[nameA] = 1;
			
		} else {
			
			this.index[nameB].friends[nameA] = 1;
			
		}
		
		return this.index[nameA].friends[nameB];
		
		
	// if they're the same person
	} else {
		
		console.log('This person cannot meet themselves!');
		
	}

}

people.haveMet = function(nameA, nameB) { // returns a number or falsish

	nameA = nameA.toLowerCase();
	nameB = nameB.toLowerCase();

	if((nameA in people.index) && (nameB in people.index)) {
		
		return people.index[nameA].friends[nameB];
		
	}
	
	return false;

}

people.friendsOf = function(name) { // returns a string
	
	if(name in people.index) {
		
		friendArr = [];
		
		for(var key in people.index[name].friends) {
			
			friendArr.push(key);
			
		}
		
		return friendArr.sort().join(' ');
		
	} 
	
	return undefined;
	
}

people.friendsOfFriendsOf = function(name) {
	
	if(name in people.index) {
		
		friendsOfName = {};
		
		for(var key in people.index[name].friends) {
			
			friendsOfName[key] = true;
			
		}
		
	} else {
		
		return undefined;
		
	}
	
	// console.log('Friends of ' + name + ': ' + friendsOfName);
	
	
	var degreeTwo = {};
	
	for(var key in friendsOfName) {
		
		if(key in people.index) {
		
			for(var prop in people.index[key].friends) {
				
				degreeTwo[prop] = true;
				
			}
			
		}
		
	}
	
	
	
	/*
	 *  union
	 *
	*/
	
	function union(objA, objB) {

	    objNew = {};
	
	    for(var key in objA) {
	
	        if(key in objB) {
	
	            objNew[key] = objA[key] || objB[key];
	
	        } else {
	
	            objNew[key] = objA[key];
	
	        }
	
	    }
	
	    for(var key in objB) {
	
	        if(!(key in objA)) {
	
	            objNew[key] = objB[key];
	
	        }
	
	    }
	
	    return objNew;
	}
	
	return union(friendsOfName, degreeTwo);
	
}