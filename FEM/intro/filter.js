const _ = {};

_.filter = function (arr, cb) {
  //Create a new Array
  const storage = [];
  //Loop through arr
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i], i, arr) === true) {
      storage.push(arr[i]);
    }
  }
  //return storage
  return storage;
};
_.filter(["San", "Yash", "Sai"], function (item) {
  return item[0] === "S";
});

//ReWriting the _.filter with ._each

_.filter = function (arr, cb) {
  _.each(arr, function (ele, i, arr) {
    if (cb(ele, i, arr) === true) {
      storage.push(arr[i]);
    }
  });
};

//Exercise
const videoData = [
  {
    name: "Miss Yashawini",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Miss Sai",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Miss Kalpana",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
  {
    name: "Miss Sruthi",
    present: false,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": false },
      { library: false },
    ],
  },
];

_.filter(videoData, function (suspectObject) {
  return suspectObject.present === true;
});
