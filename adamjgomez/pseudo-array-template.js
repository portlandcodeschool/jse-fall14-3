var array = {length:0};

array.push = function(value) {
  this[this.length] = value
  return ++this.length;
}

array.pop = function() {
  delete this[this.length-1];
  return --this.length;
}

array.join = function(separator) { 
  if (separator === undefined)
    separator = ', ';
  var stringify = '';
  for (var i=0; i<this.length; i++) {
    if (this[i]!==undefined)
      stringify = stringify + this[i];
    if (i < this.length - 1)
      stringify = stringify + separator;
  }
  return stringify;
}


