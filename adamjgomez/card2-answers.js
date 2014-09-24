
var cardReader = {

  rank: function(card) {
    return this.isValid(card,0,51) &&
        Math.floor(card/4)+1;
  },

  suit: function(card) {
    var cardSuit = (card % 4) + 1;
    return this.isValid(card,0,51) && cardSuit;
  },

  cardID: function(rank,suit) {
    return this.isValid(this.rank,1,13) &&
            this.isValid(this.suit,1,4) &&
            (this.rank - 1)*4 + (this.suit -1);
  },

  color: function(card) {
    var cardSuit = this.suit(card);
    if (cardSuit < 3) {
      var result = "red";
    } else {
      return "black";
    }
    return result;
  },

  //someExtraProperty: whatever...
  name: function(card) {
    var cardRank = this.rank(card);
    var cardSuit = this.suit(card);

    return this.cardRankArr[cardRank] + ' of ' + this.cardSuitArr[cardSuit];
  },

  cardRankArr: [ "",
                "Ace",
                "Two",
                "Three",
                "Four",
                "Five",
                "Six",
                "Seven",
                "Eight",
                "Nine",
                "Ten",
                "Jack",
                "Queen",
                "King"],


  cardSuitArr: [ "",
                "Hearts",
                "Diamonds",
                "Spades",
                "Clubs"],

  isValid: function(num,low,high) { // Returns--> NaN, true
      if ((typeof num)!="number") //wrong type
          return NaN;
      if (num%1 !== 0) //non-integer
          return NaN;
      if (num<low || num>high) //out of range
          return NaN;
      return true;
  }

};



// TESTING:
function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(rank(0)===1,  "Test 1 failed");
assert(rank(3)===1,  "Test 2 failed");
assert(rank(51)===13,"Test 3 failed");
assert(suit(0)===1,  "Test 4 failed");
assert(suit(5)===2,  "Test 5 failed");
assert(suit(51)===4, "Test 6 failed");
assert(cardID(1,1)===0,    "Test 7 failed");
assert(cardID(13,4)===51,  "Test 8 failed");
assert(cardID(8,3)===30,   "Test 9 failed");
assert(color(0)==='red',   "Test 10 failed");
assert(color(2)==='black', "Test 11 failed");
assert(name(5)==='Two of Diamonds', "Test 12 failed");
assert(name(51)==='King of Clubs',  "Test 13 failed");


// Extra testing!
// These tests check that invalid arguments produce invalid output.
// I.e. "garbage in guarantees garbage out".
assert(Number.isNaN(rank(52)),  "Test 21 failed");
assert(Number.isNaN(rank("0")), "Test 22 failed");
assert(Number.isNaN(rank(-1)),  "Test 23 failed");
assert(Number.isNaN(rank(2.5)), "Test 24 failed");
assert(Number.isNaN(rank(undefined)),"Test 25 failed");

assert(Number.isNaN(suit(52)),   "Test 26 failed");
assert(Number.isNaN(suit(false)),"Test 27 failed");
assert(Number.isNaN(suit(true)), "Test 28 failed");
assert(Number.isNaN(suit(-1)),   "Test 29 failed");
assert(Number.isNaN(suit(3.14)), "Test 30 failed");

assert(Number.isNaN(cardID(0,1)),   "Test 31 failed");
assert(Number.isNaN(cardID("1",1)), "Test 32 failed");
assert(Number.isNaN(cardID(1,5)),   "Test 33 failed");
assert(Number.isNaN(cardID(14,1)),  "Test 34 failed");
assert(Number.isNaN(cardID(-1,-1)), "Test 35 failed");
assert(Number.isNaN(cardID(0.5,1)), "Test 36 failed");
assert(Number.isNaN(cardID(1,NaN)), "Test 37 failed");

assert(Number.isNaN(color('apple')),"Test 41 failed");
assert(Number.isNaN(color(true)),   "Test 42 failed");
assert(Number.isNaN(name(false)),   "Test 43 failed");
assert(Number.isNaN(name(-1)),      "Test 44 failed");
assert(Number.isNaN(name(52)),      "Test 45 failed");
assert(Number.isNaN(name(NaN)),     "Test 46 failed");

