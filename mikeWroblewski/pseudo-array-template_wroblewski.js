var array = {length:0};

array.pop = function() { //changes array, returns ??
//...
  array = array.length-1;
  return array[array.length-1];
    
}



array.push = function(prop, val) { //changes array, returns a number
//...
  array[prop] = val;
  array[array.length + array[prop]];
 
  return array.length;
  
}



array.join = function(sep) { //returns a string
//...
  for (var w = 0; w < 0; w++) {
    if (sep === undefined) {
      sep = ",";
      array += array[w + sep];
    } else {
      array += array[w + sep];
    }
  }
  return array;
}