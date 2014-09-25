//(1)
//[a]

var fakeArray = {}

fakeArray.length = 0

fakeArray.push = function(n) {fakeArray[fakeArray.length] = n; fakeArray.length++;};

fakeArray.pop = function(){delete fakeArray[fakeArray.length - 1]; fakeArray.length--;};

fakeArray.join = function(){
for(var i = 0; i < fakeArray.length; i++) { x += fakeArray[i] + ', '};
	return fakeArray.join;
};

//-----------------------------------------------------------------------------------------

//(3)
//[a.1]

var obj1 = {a:'1', b:'2', c:'3'};
var obj2 = {}

var copy = function(obj1,obj2) {

for (var i in obj1) obj2[i] = obj1[i]; 

};

//[a.2]

var obj1 = {a:'1', b:'2', c:'3'}

var obj2 = {}

var compare = function (obj1, obj2) {



	for (var i in obj1){

		var value = obj1[i];

		if(!i in obj2 || value!== obj2[i]) {

			return "false";
		}
	}
	return "true";
};

//[a.3]

/*var compareProp = function (obj, obj2){

for (var i in obj1) {

	var value = obj1[i];

	if( !i in hasOwnProperty(obj1)) === 'true' || value !== hasOwnProperty(obj2) === 'true'){
	return 'false'
	}
	return 'true'
};
};
var obj1 = {a:'1', b:'2', c:'3'};

var obj2 = {a:'1', b:'2', c:'3'};

console.log(compareProp(obj1,obj2))*/

//alternate for a.3

//core

var x = {a:'1', b:'2', c:'3'};
var y = {a:'1', b:'2', c:'3'};







var similar = function (x,y){
for(var i in x){
    if (!(i in y)){
        return false;
    }
}
for(var i in y){
    if (!(i in x)){
        return false;
    }
}







-----------------------------
// The beginings of 4.a

/*var people.meet(sara,joel){

}

    if (!(sara in people)) {
            people[sara] = {};
    }
    if (!(joel in people)) {
            people[joel] = {};
    }
    if (!(sara in people[joel])) {
        people[joel] = people[joel];
    }
    if (!(joel in people[sara])) {
        people[joel] = people[sara];    
    }
};*/


people.meet = function(name1,name2) {
		if (!( name1 in this.index)){

			people.index[name1] = {name: name1, friends:{}};
		}
		

		if(!(name2 in this.index)){

			people.index[name2] = {name:name2,};
		}

};




	




