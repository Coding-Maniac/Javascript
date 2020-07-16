//Implementation of _.map
//_.map belongs to underscore.js
//But it also helps us understand how map function works under the hood
const _ = {};
_.map = function (list, callback) {
  var storage = [];
  if (Array.isArray) {
    //Incase of arrays
    for (let i = 0; i < list.length; i++) {
      storage.push(callback(list[i], i, list));
    }
    return storage;
  } else {
    //Incase of Object
    for (let key in list) {
      storage.push(callback(list[key], key));
    }
  }
};

_.map([1, 2, 3], function (val) {
  return val + 1;
});

//Implementing _.map using _.each

_.map = function (list, callback) {
  var storage = [];
  _.each(list, function (
    v,
    i,
    list //If we had used callback in the place of function it would not push the values to the array
  ) {
    storage.push(callback(v, i, list));
  });
  //._each does the looping instead of the for loop
};
