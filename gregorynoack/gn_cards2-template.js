var cardReader = {

    rank: function(card) {
        var cardRank = Math.floor((card / 4)+1);
        if ((card>=0 && card<52) && (card % 1 === 0) && (typeof card !== "string")) {
            return cardRank;
        } else {
            return NaN;
        }
    },

    suit: function(card) {
        var cardSuit = (card % 4) + 1;
        if ((card>=0 && card<52) && (card % 1 === 0) && (typeof card !== "boolean")) {
            return cardSuit;
        } else {
            return NaN;
        }
    },

    cardID: function(rank,suit) {
        if ((rank >= 1 && rank < 14) && (suit > 0 && suit < 5) && (typeof rank !== "string")) {
            return (rank-1)*4 + (suit-1);
        } else {
            return NaN;
        }
    },

    color: function(card) 
        var cardSuit = this.suit(card)
        if (typeof card !== "number") {return NaN;}

        if (cardSuit < 3) {
            var result = "red";
        } else {
            return "black";
        };
        return result;
    },

    //someExtraProperty: whatever...

    name: function(card) {
        var cardRank = this.rank(card);
        var cardSuit = this.suit(card);
        if ((card>0 && card<52) && (card !== "NaN") && (typeof card !== "boolean")) {  
            return this.cardRankArr[cardRank] + " of " + this.cardSuitArr[cardSuit];
        } else {
            return NaN;
        }
    },

    cardRankArr: ["",
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

    cardSuitArr: ["",
                  "Hearts",
                  "Diamonds",
                  "Spades",
                  "Clubs"],

};



// TESTING:
function assert(claim,message) {
    if (!claim) console.error(message);
}
assert(cardReader.rank(0)===1,  "Test 1 failed");
assert(cardReader.rank(3)===1,  "Test 2 failed");
assert(cardReader.rank(51)===13,"Test 3 failed");
assert(cardReader.suit(0)===1,  "Test 4 failed");
assert(cardReader.suit(5)===2,  "Test 5 failed");
assert(cardReader.suit(51)===4, "Test 6 failed");
assert(cardReader.cardID(1,1)===0,    "Test 7 failed");
assert(cardReader.cardID(13,4)===51,  "Test 8 failed");
assert(cardReader.cardID(8,3)===30,   "Test 9 failed");
assert(cardReader.color(0)==='red',   "Test 10 failed");
assert(cardReader.color(2)==='black', "Test 11 failed");
assert(cardReader.name(5)==='Two of Diamonds', "Test 12 failed");
assert(cardReader.name(51)==='King of Clubs',  "Test 13 failed");


// Extra testing!
// These tests check that invalid arguments produce invalid output.
// I.e. "garbage in guarantees garbage out".
assert(Number.isNaN(cardReader.rank(52)),  "Test 21 failed");
assert(Number.isNaN(cardReader.rank("0")), "Test 22 failed");
assert(Number.isNaN(cardReader.rank(-1)),  "Test 23 failed");
assert(Number.isNaN(cardReader.rank(2.5)), "Test 24 failed");
assert(Number.isNaN(cardReader.rank(undefined)),"Test 25 failed");

assert(Number.isNaN(cardReader.suit(52)),   "Test 26 failed");
assert(Number.isNaN(cardReader.suit(false)),"Test 27 failed");
assert(Number.isNaN(cardReader.suit(true)), "Test 28 failed");
assert(Number.isNaN(cardReader.suit(-1)),   "Test 29 failed");
assert(Number.isNaN(cardReader.suit(3.14)), "Test 30 failed");

assert(Number.isNaN(cardReader.cardID(0,1)),   "Test 31 failed");
assert(Number.isNaN(cardReader.cardID("1",1)), "Test 32 failed");
assert(Number.isNaN(cardReader.cardID(1,5)),   "Test 33 failed");
assert(Number.isNaN(cardReader.cardID(14,1)),  "Test 34 failed");
assert(Number.isNaN(cardReader.cardID(-1,-1)), "Test 35 failed");
assert(Number.isNaN(cardReader.cardID(0.5,1)), "Test 36 failed");
assert(Number.isNaN(cardReader.cardID(1,NaN)), "Test 37 failed");

assert(Number.isNaN(cardReader.color('apple')),"Test 41 failed");
assert(Number.isNaN(cardReader.color(true)),   "Test 42 failed");
assert(Number.isNaN(cardReader.name(false)),   "Test 43 failed");
assert(Number.isNaN(cardReader.name(-1)),      "Test 44 failed");
assert(Number.isNaN(cardReader.name(52)),      "Test 45 failed");
assert(Number.isNaN(cardReader.name(NaN)),     "Test 46 failed");