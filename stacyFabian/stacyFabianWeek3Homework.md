### Homework #3

_Due Mon. Sept 22_

---

**1)  Simulating Arrays** _[Easyish, 1.5 hrs]_

Create a pseudo-array, an ordinary object which is not an actual Array but behaves
(somewhat) like one.  You may use a global variable _array_ to store
your pseudo-array.
When creating _array_ initially, have it represent an empty Array, with length 0.
The elements of _array_ will be stored as properties named by their index numbers.

**a)**  Give _array_ a property named _length_ which is always a
non-negative integer, and three more properties _pop_, _push_, and
_join_ which are functions (i.e. methods) behaving exactly like the
corresponding method of real Arrays.  When your _pop_ and _push_ methods modify the array, _length_ will change accordingly.

You may use the enclosed [template file](pseudo-array-template.js) to get started.

_Hint:_ Within each method, to refer to your array object, you may use either the global variable _array_ or the keyword _this_.

** See pseudo-array-stacyFabian.js **

**b)**  Assuming you've implemented _array_ correctly, predict the outcome
of the following:
```
array.length=0;
	Answer: Sets the property "length" to 0.
			If done in console the console log will output 0.

array.push('c');
	Answer: Adds the string value 'c' to the property numbered 1.
			If done in console the console log will output 1.

array.push('b');
	Answer: Adds the string value 'b' to the property numbered 2.
			If done in console the console log will output 2.

array.push('a');
	Answer: Adds the string value 'a' to the property numbered 3.
			If done in console the console log will output 3.

array.pop();
	Answer: Removes the last added item with will remove 'a' added into property #3.
			If done in console the console log will output 2.

console.log(array.join('a')); //What will this print?
	Answer: 'a'
	Actual print out: 
	cab
	-> undefined

```

**c)**  Similarly, predict the outcome here:
```
array.length=0;
	Answer: This will output 0 and reset the property length to 0 but will leave the 0 and 1 properties with the values 'c' and 'b' respectively.

console.log(array.join(array.push(array.push('a')))); // What will this print?
```
	It will print out the number " 3".

<!-- First it will process the first processed (last written) array.push statement (which results in a 2). Then it will process the next array.push statement which will add '2' as the value of the 3 property. Then it will print out ' 3' as per the "array.join" function that is basically asking it to print out "3" in the whole function so it just adds a space to the beginning of "3" and ends. -->

	Actual: 
	console.logs 'a21'

<!-- This is because of the following (from solutions file):
That expression reduces to:
// console.log(array.join(array.push(1));  //array now contains ['a']
// console.log(array.join(2));   //array now contains ['a',1]
// console.log('a21');

-->

---

**2)  A Cards Toolkit!**  _[Easy, 1 hr]_

// HINT: use "this"

Revisit your playing card functions from homework 2, problem 5b.  Repackage them in a Toolkit pattern, as methods of a single master object.  You may assign that object to any variable you like, but that variable should not appear in the definitions of your methods (use `this` instead).  You'll need to change the form of your method definitions and their calls to other methods, but their logic and most of their code will remain the same.

You may adopt the enclosed [template file](cards2-template.js).  Make sure your code still passes all the assertions there!

It would be best to modify your own code from Homework 2, but if you didn't solve it before, you may adopt the posted solution instead and modify it here.

---

**3)  Object Comparison** _[Moderate, 3 hrs]_

**a)**
Write a function `copy(obj)`, which duplicates an object (not just copying a reference to it).  You only need to duplicate only one level: if `obj` contains another object _inner_, the duplicate may share _inner_ rather than copying it too.

// do a for loop to run through each array item until the end
// have each item of new array = each item of old array


Write another function to compare two objects:
`equal(objA,objB)` should return true only when `objA` and `objB` have exactly the same properties with the same values.  Note that two empty objects should be considered equal.

// for loop to run through each array item of each one
// if (objA[i] == objB[i])
		result = true
// else result = false;

Write a third function:
`similar(objA,objB)` should return true only when `objA` and `objB` have exactly the same properties, regardless of their values.

**b)**
We can interpret objects as _sets_ of properties, and merge those sets in various ways.  Let's define three such merges:

*Union*: The union of objects A,B is a new object which contains all the properties found in either A or B.  If a property is found in both, the merged property gets the shared key and the value `(A[key] || B[key])`.
For example: the union of `{a:1,b:0}` and `{a:0,c:0}` is `{a:1,b:0,c:0}`.

*Intersection*: The intersection of objects A,B is a new object which contains only those properties found in BOTH A and B.  The value of each intersecting property is `(A[key] && B[key])`.
For example, the intersection of `{a:1,b:0}` and `{a:0,c:0}` is `{a:0}`.

*Subtraction*: The subtraction of B from A, aka "A minus B", is an object which contains all the properties of A which are NOT in B.  Note that this merge is usually not symmetric: _A minus B_ doesn't equal _B minus A_ (except in one case, which you should identify!)
For example, `{a:1,b:0}` minus `{a:0,c:0}` is `{b:0}`, and the reverse subtraction is `{c:0}`.

Using those definitions, implement a function for each:

* `union(objA,objB)`

* `intersect(objA,objB)`

* `subtract(objA,objB)`

Your functions may return _undefined_ if either of their arguments is not an object.

**c)**
Write three sample assertions to test each of your three merging functions (9 total).
Remember that when comparing your results to the expected results, you'll need to see if objects are equal() but not identical.

**d)**
Finally: even if your functions implement perfectly the definitions above, 
intersection and union are still not symmetric.  That is, `similar(union(A,B),union(B,A))` will always be true, but `equal(union(A,B),union(B,A))` may not be.  Likewise with intersection.  Explain!

_Answer_
Since union is just evaluating the OR value/quality of the two objects (only has to be true in one of the compared items), it is not the same as asking if they are fully identical.

---

**4) Social network!** _[4.5 hrs]_

Assume a world in which no two people have the same name.
Create an object `people` whose purpose is to remember everyone ever mentioned and the relationships between them.

**a)** _[Moderate, 3 hrs]_

Write three methods for `people`:

* `people.meet(nameA,nameB)` should accept two names, update `people`, and return the total number of times those two have met, including this new meeting.
If either person isn't yet represented in `people`, add them.
Then increment a count of the meetings between them.
Assume that the order of arguments doesn't matter (i.e. `meet(A,B)` is the same as `meet(B,A)`), and that meeting oneself _(A==B)_ has no effect.

* `people.haveMet(nameA,nameB)` should return a number greater than 0 if those people have met, and some falseish value if they haven't or don't exist.

* `people.friendsOf(name)` should return a string listing the names of all people whom `name` has met at least once (or undefined if `name` doesn't exist).   List the names in alphabetical order, and make sure each name appears only once.

You may use the enclosed [template file](social-network-template.js) to get started.

_Hint:_ the `people` object should contain an index of all people, linking each name to an individual object for that person.  Each such person-object should have two properties:

* `name` is a string for that person's name.  (This redundant copy of the name isn't necessary for the solution, but it may help you debug.)

* `friends` is another index object, unique to each person, with multiple keys (one for each friend that person has met), each with a numeric value.  Because meetings are symmetric (each person meets the other), each number is duplicated in a corresponding property in the friend's index; make sure you update both copies of the number during a meeting.

Here is a diagram showing the data structure after `people` is fully initialized but before any method calls:

![image visible when viewing locally](social-network1.svg)

Here is the data structure just after the first method call `people.meet('Dan','Ben')`:

![image visible when viewing locally](social-network2.svg)

**b)** _[Difficult, 1.5 hrs]_

Write another method `people.friendsOfFriendsOf(name)` which returns a string listing, in alphabetical order, all the names of people within two degrees of separation from `name`: they've met either `name` or at least one of `name`'s friends.
Your list may include `name` itself but no duplicates: any person should be listed only once regardless of the number of connections with `name`.

(_Hint:_ the union of sets includes no duplicates!  Perhaps you could recycle code from somewhere?)


// when pulling together the full list use the .join function
// then sort and compare. 
