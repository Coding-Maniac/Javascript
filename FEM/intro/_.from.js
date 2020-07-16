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

const from = (arr) => {
  return Array.prototype.slice.call(arr);
};
