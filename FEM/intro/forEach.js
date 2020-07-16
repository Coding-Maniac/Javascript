//Using forEach
//Below _.each explains how forEach works under the hood
["San", "Yash", "Sai"].forEach(function (item, i, list) {
  if (list[i + 1]) {
    console.log(`${item} is younger than ${list[i + 1]}`);
  } else {
    console.log(`${item} is the youngest`);
  }
});

//forEach is a native method in JS while _.each almost does the came but in a different way
//Using ._each
const _ = {};

//Defining the _.each function
_.each = function (list, cb) {
  if (Array.isArray(list)) {
    //Array
    for (var i = 0; i < list.length; i++) {
      cb(list[i], i, list);
    }
  } else {
    //Object
    for (let name in list) {
      cb(list[name], name);
    }
  }
};
_.each(["Sanjay", "Yash", "Sai"], function (name, i, list) {
  if (list[i + 1]) {
    console.log(name, "is Younger than", list[i + 1]);
  } else {
    console.log(name, "is the Oldest");
  }
});

_.each({ name: "Sanjay", name2: "Yash", name3: "Sai" }, function (name) {
  console.log(name);
});
