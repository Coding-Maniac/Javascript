//Question
//Create an object that looks like this
//{"name":"rusty","room":"kitchen","weapon":"candlestick"}
//Extract out the weapon using destructuring

var { name, room, weapon } = {
  name: "rusty",
  room: "Kitchen",
  weapon: "CandleStick",
};

//Destructuring arrays

var [a, b] = [1, 2];
console.log(a, b);
//->1 2

//Omit certain values

var [a, , b] = [1, 2, 3];
console.log(a, b);
//->1 3

//combine with the spread/rest operator (accumulates the rest of the values)

var [a, ...b] = [1, 2, 3];
console.log(a, b);
//->1 [2,3]

//swap variables without temp

var a = 1,
  b = 2;
//old time stuff
// var temp = a;
// a = b;
// b = temp;
//But now
[b, a] = [a, b];
console.log(a, b);
//->2 1

//Advance deep arrays
var [a, [b, [c, d]]] = [1, [2, [[[3, 4], 5], 6]]];
console.log("a:", a, "b:", b, "c:", c, "d:", d);
// -> a:1 b:2 c:[[3,4],5] d:6
//It goes from left to right
//Step1: a =1
//step2: Nested inside on both sides so going b =2
//Step3: Nested once on left but nested twice on right .So it only goes once as it is based on the left hand side so c=[3,4],5 a nested array
//And then d = 6

//objects

var { user: x } = { user: 5 };
console.log(x);
//->5

//Fail-safe
var { user: x } = { user1: 5 };
console.log(x);

//-> undefined
