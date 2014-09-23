**3)**

*A)*

var copyObj = function(obj){
	
  newObj = {};
	
  if(null == obj || typeof(obj) != 'object'){
	
  	return obj;
	
  }
	
  for(var key in obj) {
  
        if(obj.hasOwnProperty(key)) {
  
            newObj[key] = obj[key];
  
        }
  
    }
  
    return newObj;

};


var equalObj = function(objA, objB){

	var result;

	if(typeof(objA) != typeof(objB)){

		return false;

	}

		for(var key in objA){

			if(!(key in objB)){

				return false;

			}

			if(objA[key] !== objB[key]){

				return false;

			}

		}

		for(var key in objB){

			if(!(key in objA)){

				return false;

			}

			if(objB[key] !== objA[key]){

				return false;

			}

		}


	return true;

}


var similar = function(objA, objB){

  if(typeof(objA) != typeof(objB)){

    return false;

  }

  for(var key in objA){

    if(!(key in objB)){

      return false;

    }

  }

  for(var key in objB){

    if(!(key in objB)){

      return false;

    }

  }

  return true;

}

*B)*

var unitedObj = {};

var union = function(objA, objB){

  for(var key in objA) {
        
    unitedObj[key] = objA[key];
      
      }
  
  for(var key in objB){

    if(objB[key] != unitedObj[key]){
        
      unitedObj[key] = objB[key];
    
    }
    if(objA[key] !== objB[key]){
     
      unitedObj[key] = (objA[key] || objB[key]);
    } 
  }
}



var intersectObj = {};

var intersect = function(objA, objB){

  for(var key in objA) {

    if(key in objB){

      intersectObj[key] = (objA[key] && objB[key]);
    }
  }    
}

var subtractObj = {};

var subtract = function(objA, objB){

  for(var key in objA) {

    if(!(key in objB)){

      subtractObj[key] = objA[key];
    }
  }    
}
**C)**

var z = {a:'hi', zebra:2, horsey:3, wayne:'garth'};
var y = {0:'hello', horsey:3, hi:'a', zebra:2};

var arR = {0:0, 1:1, 2:2, 3:4};
var arrTwo = {0:1, 1:0, 2:2, 4:4};

var objA = {1:'a', 2:'b', 3:'c'};
var objB = {0:'a', b:2, 3:'c', 4:'d'};



union(z,y);
unitedObj;
-->Object {0: "hello", 1: 2, z: "hi", a: "hi", zebra: 2, horsey: 3, wayne: "garth"…}


union(arR,arrTwo);
unitedObj;
-->Object {0: 1, 1: 1, 2: 2, 3: 4, 4: 4}


union(objA,objB);
unitedObj;
-->Object {0: "a", 1: "a", 2: "b", 3: "c", 4: "d", b: 2}



intersect(z,y);
intersectObj;
-->Object {zebra: 2, horsey: 3}



intersect(arR,arrTwo);
intersectObj;
-->Object {0: 0, 1: 0, 2: 2}




intersect(objA,objB);
intersectObj;
-->Object {3: "c"}


subtract(z,y);
subtractObj;
-->Object {a: "hi", wayne: "garth"}
subtract(y,z);
subtractObj;
-->Object {0: "hello", hi: "a"}



subtract(arrTwo,arR);
subtractObj;
-->Object {4: 4}



subtract(objB,objA);
subtractObj;
-->Object {0: "a", 4: "d", b: 2}



**D)**

similar(union(z,y),union(y,z))
-->true

equalObj(union(z,y),union(y,z))
-->true

interestingly enough, my union came back true.I believe this is not always true because the objects might be similar in that they both contain the same keys, or are even the same length but that does not mean that they are the same object. Equal is looking for identity where as similar is looking for equality.















