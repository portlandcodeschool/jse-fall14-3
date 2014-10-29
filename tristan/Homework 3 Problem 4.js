//Homework #3 Problem 4

var people = {};

function union(objA, objB){
    if (typeof(objA) != "object" || typeof(objB) != "object")
    return undefined;
    for(var key in objA){
    if (!(key in objB)){   //Check in objB to see if each property in obj A is there
        objB[key] = objA[key]    //If the property of objA is not in B at all, add it.
        }
    }
        return objB;
    }

people.meet = function(nameA,nameB) { // returns a number
if (nameA == nameB) {
    console.log("You can't meet yourself.")
    return;}

if (!(nameA in people)) people[nameA] = {};
if (!(nameB in people)) people[nameB] = {};

if (nameA in people[nameB]) people[nameB][nameA]++;
    else people[nameB][nameA] = 1;

    
if (nameB in people[nameA]) people[nameA][nameB]++;
    else people[nameA][nameB]= 1;
    
    return people[nameA][nameB];    
}

people.haveMet = function(nameA,nameB) { //returns a number or falsish
	if (nameA == nameB) {
    console.log("Of course this person has met him/herself.")
    return;}
    
    if (nameA in people[nameB]) return people[nameB][nameA];
    else return false;
    
}

people.friendsOf = function(name) { //returns a string
	if (!(name in people)) return undefined;
    
    var listOfFriends = [];
    var i = 0;
    for(var key in people[name]){
    listOfFriends[i] = [key];
    i++
    }
    listOfFriends = listOfFriends.sort();
    return listOfFriends.toString();
}

people.friendsOfFriends = function(name) { //returns a string
	if (!(name in people)) return undefined;
    
    var listOfFriends = {};
    for(var key in people[name]){   //loop through the object passed in
    listOfFriends[key] = "first";   //create an entry in listOfFriends for each prop
    console.log("listOfFriends gets this key: " key);
    }
    
    var listOfSecondFriends = {};
    for(var key in listOfFriends){  //loop through the list we just made
    listOfSecondFriends[key] = "second";  //pull out the friends of those people
    console.log("listOfFriends gets this key: " key);
    }
    
    var finalList = [];  //create an array to collect the list of unique names
    var i = 0;
    for (var key in listOfFriends){
    if (!(key in listOfSecondFriends)){
        finalList[i] = key;
        i++;
        }
    }
    var finalList = finalList.sort(); //sort the list aphabetically
    //return finalList.toString();  //convert to string
    return listOfSecondFriends;  //return the string
}