// Exercise 4a

var people = {};

people.index = {};

people.meet = function(nameA,nameB) { 
  if(nameA === nameB) {return;}
  if (this.index.hasOwnProperty(nameA) == false) {
    this.index[nameA] = {
      name: nameA};
    this.index[nameA].friends = {};
   }
  if (this.index.hasOwnProperty(nameB) == false) {
    this.index[nameB] = {
      name: nameB};
    this.index[nameB].friends = {};
  } 
  
  if (this.index[nameA].friends.hasOwnProperty(nameB) == false) {
    this.index[nameA].friends[nameB] = 1;
    }
  if (this.index[nameB].friends.hasOwnProperty(nameA) == false) {
    this.index[nameB].friends[nameA] = 1;
    } else {
      this.index[nameA].friends[nameB]++; 
      this.index[nameB].friends[nameA]++;
  } 
  
  return this.index[nameA].friends[nameB];
}


people.haveMet = function(nameA,nameB) { //returns a number or falsish
	if (this.index.hasOwnProperty(nameA) == false || this.index[nameA].friends.hasOwnProperty(nameB) == false) {
   return 0;
  } 
  else {
    return this.index[nameA].friends[nameB];
  }
}

people.friendsOf = function(name) { //returns a string
var friendsList = [];
  friendsList.push(Object.keys(this.index[name].friends));
  friendsList.sort();
  friendsList.join(" /n");
  return friendsList;
}

