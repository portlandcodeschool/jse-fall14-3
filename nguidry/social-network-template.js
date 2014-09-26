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

//Exercise 4b 

//Write another method `people.friendsOfFriendsOf(name)` which returns a string 
//listing, in alphabetical order, all the names of people within two degrees of 
//separation from `name`: they've met either `name` or at least one of `name`'s 
//friends. Your list may include `name` itself but no duplicates: any person 
//should be listed only once regardless of the number of connections with `name`.

//(_Hint:_ the union of sets includes no duplicates!  Perhaps you could recycle 
//code from somewhere?)

people.friendsOfFriendsOf = function(name) { //returns a string
//friendsOfFriendsList will be the array that will sort all of the friends into alphabetical order
  var friendsList1Deg = {},
      friendsList2Deg = {},
      unitedList = {},
      friendsOfFriendsList = [];
//first, pull 'name's friends list
//then, pull 'name's friends of friends, use union to join

  for (var prop in friendsList1Deg) {
    unitedList[prop] = friendsList1Deg[prop];
  }

  for (var prop in friendsList2Deg) {
    if (!(prop in unitedList)) {
      unitedList[prop] = friendsList2Deg[prop];
    }
    if (friendsList2Deg[prop] !== friendsList1Deg[prop]) {
      unitedList[prop] = (friendsList1Deg[prop] || friendsList2Deg[prop]);
    }
  }
  
//this will produce the final alphabetical string
  friendsOfFriendsList.push(Object.keys(unitedList)); //need to push from the new, united object
  friendsOfFriendsList.sort();
  friendsOfFriendsList.join(" /n");
  return friendsOfFriendsList;
}
