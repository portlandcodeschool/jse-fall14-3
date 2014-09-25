
var people = {};

people.index = {};

people.meet = function(nameA,nameB) {

	var person1 = nameA.toLowerCase();

	var person2 = nameB.toLowerCase();
	
	if(person1 != person2){

		if(!([nameA] in people.index)){
			
			people.index[nameA] = {name:nameA, friends:{}};
		
		}

		if(!([nameB] in people.index)){

			people.index[nameB]= {name:nameB, friends:{}};

		}

		if(!([nameB] in people.index[nameA].friends)){

			people.index[nameA].friends[nameB] = 1;

		} else{
			
			++people.index[nameA].friends[nameB];
			
			}

		if(!([nameA] in people.index[nameB].friends)){

			people.index[nameB].friends[nameA] = 1;
		
		} else{
			
			++people.index[nameB].friends[nameA];
			
			}
	
	} else{

		return 'Names are equal. You have already met yourself.';
	};

}

people.haveMet = function(nameA,nameB) { 

	if([nameA] != [nameB]){
	
		if(!([nameB] in people.index[nameA].friends)){
		
			return 'These two have not met yet';
		
		}else{

		return people.index[nameA].friends[nameB];

		}
	
	}else{
		
		return 'Yes, you have met yourself already';
	
	}
}

people.friendsOf = function(name) { 
	
	var arr = [];
	
	if(!([name] in people.index)){
			return 'name not found in index';
		}
	
	else{	

		for(var key in people.index[name].friends){
			arr.push(key);
		}
	}
	
	return arr.sort();
}









