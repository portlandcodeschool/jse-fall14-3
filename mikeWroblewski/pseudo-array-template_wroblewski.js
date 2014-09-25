/*### Homework #3

_Due Mon. Sept 22_

---

1)  Simulating Arrays _[Easyish, 1.5 hrs]_

Create a pseudo-array, an ordinary object which is not an actual Array but behaves
(somewhat) like one.  You may use a global variable _array_ to store
your pseudo-array.
When creating _array_ initially, have it represent an empty Array, with length 0.
The elements of _array_ will be stored as properties named by their index numbers.

a)  Give _array_ a property named _length_ which is always a
non-negative integer, and three more properties _pop_, _push_, and
_join_ which are functions (i.e. methods) behaving exactly like the
corresponding method of real Arrays.  When your _pop_ and _push_ methods modify the array, _length_ will change accordingly.

You may use the enclosed [template file](pseudo-array-template.js) to get started.

_Hint:_ Within each method, to refer to your array object, you may use either the global variable _array_ or the keyword _this_.
*/

var array = {length:0};

array.pop = function() { //changes array, returns ??
//...
  delete this[this.length-1];
  return --this.length;   
}



array.push = function(val) { //changes array, returns a number
//...
  this[this.length] = val;
  return ++this.length;  
}


array.join = function(sep) {
  emptyString = "";
  if (sep === undefined) {sep = ","}
  
  for (w=0;w<this.length;w++) {
    if (w<this.length-1) {
      emptyString += this[w] + sep;
    } else {
      emptyString += this[w];
    }  
  }
  return emptyString;
};


/*
b)  Assuming you've implemented _array_ correctly, predict the outcome
of the following:
```

array.length=0;
array.push('c');
array.push('b');
array.push('a');
array.pop();
console.log(array.join('a')); //What will this print?
```
*/

This prints:  "cab"

/*
c)  Similarly, predict the outcome here:
```
array.length=0;
console.log(array.join(array.push(array.push('a')))); // What will this print?
```
*/

This prints:  "a21"




