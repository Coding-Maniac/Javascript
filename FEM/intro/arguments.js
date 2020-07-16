//Before the introduction of spread operators arguments keyword was used
const createTuple = (a, b, c, ...d) => {
  console.log(arguments); //["It", "be", "could", "anyone", "No one"]
  //arguments consists of all the arguments passed to the function in a pseudo form of array
  //The arguments keyword looks like an array but it does not have the functionalities of the array such as push,pop
  return [
    [a, c],
    [c, d],
  ];
};

createTuple("It", "be", "could", "anyone", "No one");

//Default parameters
const add = function (a, b = 2) {
  console.log(arguments); //3 ????
  //arguments keyword consists of arguments that are explicitly passed to the function only
  return a + b;
};

console.log(add(3)); //5

//Before ES6 (no default parameters)
const add = function (a, b) {
  b = b || 2; //If  1st value is true 1st is selected else 2 is selected
  console.log(arguments); //3 ????
  //arguments keyword consists of arguments that are explicitly passed to the function only
  return a + b;
};

console.log(add(3)); //5

//Converting arguments (Array-Like Object) into Array //Before ES6
const convertArr = function () {
  const arr = Array.prototype.slice.call(arguments); //This is used to convert the Array-like object to array
  //-> ['Was','it','in']
  arr.push("the Billiards Room");
  //-> ['Was','it','in','the Billiards Room']
  return arr.join(" ");
  //-> 'Was it in the Billiards Room
};
convertArr("Was", "it", "in");

//Converting arguments (Array-Like Object) into Array //After ES6

const convertArr = function () {
  const arr = Array.from(arguments); //This converts the Array-like object to array
  //The .from method is explained in a seperate file
  //-> ['Was','it','in']
  arr.push("the Billiards Room");
  //-> ['Was','it','in','the Billiards Room']
  return arr.join(" ");
  //-> 'Was it in the Billiards Room
};
convertArr("Was", "it", "in");
