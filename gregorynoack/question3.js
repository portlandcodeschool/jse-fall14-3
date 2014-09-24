
var obj1 = {a:0, b:1, c:2},
		obj2 = {a:0, b:1, c:2},
		obj3 = {a:1, b:1, c:2},
		obj4 = {greg:1, b:true, c:3},
		obj5 = {},
		obj6 = {};


function copy(obj){
	var newObj = {};
  for(var key in obj){
      newObj[key] = obj[key];
   }
  return newObj;
}
var newObj = copy(obj1);


function equal(objA,objB){
	for(var key in objA){	 		
		if (!(key in objB)){return false;}
		if (objA[key] !== objB[key]){return false;}
	}
	for(var key in objB){	 		
		if (!(key in objA)){return false;}
		if (objA[key] !== objB[key]){return false;}
	}

			return true;
}

var eqlObj = equal(obj5,obj6);



function similar(objA,objB){
	for(var key in objA){	 		
		if (!(key in objB)){return false;}
	}
	for(var key in objB){	 		
		if (!(key in objA)){return false;}
	}
		return true;
}

var sameProps = similar(obj2,obj1)


function union(objA, objB){
  
    for(var key in objA){
    if (!(key in objB)){   
        objB[key] = objA[key]    
        }
    else objB[key] = (objA[key] || objB[key]);  
    }
        return objB;
    }
var bothObj = union(obj1,obj4);


function intersect(objA, objB){
    for(var key in objA){
    if (key in objB){   
        delete objB[key]   
        }
    else objB[key] = (objA[key] && objB[key]);   
    }
        return objB;
    }
var sameProp = intersect(obj1,obj4);



function subtract(objA, objB){
    var newObj={}
    for(var key in objA){
    if (!(key in objB)){   
        newObj[key] = objA[key];
        }
    }
    for(var key in objB){
    if (!(key in objA)){   
        newObj[key] = objB[key];
        }
    }
        return newObj;
    }
var newObj = subtract(obj1,obj4);