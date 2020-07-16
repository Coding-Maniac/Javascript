//To figure out in which room there was no one
//My solution . A long shot
//To figure out in which room there was no one

//Given Dataset
const newDevelopment = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": true },
      { "billiard room": false },
      { library: true },
    ],
  },
  {
    name: "Reverend Green",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: [
      { kitchen: false },
      { ballroom: false },
      { conservatory: true },
      { "dining room": false },
      { "billiard room": true },
      { library: false },
    ],
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: [
      { kitchen: true },
      { ballroom: false },
      { conservatory: false },
      { "dining room": true },
      { "billiard room": false },
      { library: false },
    ],
  },
];
//End of Dataset
var allRooms = [];
var presentRooms = [];
var missingrooms = [];
newDevelopment[0].rooms.forEach(function (ele, i) {
  for (let val in ele) {
    allRooms.push(val);
  }
});
var obj = {};
newDevelopment.forEach(function (ele, i) {
  ele.rooms.forEach(function (ele, i) {
    for (let val in ele) {
      if (ele[val] == true) {
        obj[val] = true;
      }
    }
  });
});

for (let val in obj) {
  presentRooms.push(val);
}
console.log(allRooms.sort());
console.log(presentRooms.sort());
//Method 1 - traditional way of finding a missing value between arrays
allRooms.forEach(function (ele) {
  if (presentRooms.includes(ele)) {
    return;
  } else {
    missingrooms.push(ele);
  }
});

//Method2 _.difference in underscore library or lodash

console.log("Finally the answer to which no person is in that room is");
console.log(missingrooms);

//Output:
// 5
// [
//   'ballroom',
//   'billiard room',
//   'conservatory',
//   'dining room',
//   'kitchen',
//   'library'
// ]
// [
//   'billiard room',
//   'conservatory',
//   'dining room',
//   'kitchen',
//   'library'
// ]
//Finally the answer to which no person is in that room is
//["ballroom"]

//Solution provided by -Instructor(Bianco Gandolf)

const notInRoom = suspect => {
  const emptyRooms = reduce(suspect.rooms,(room,memo)=> {
    if (room === false) memo.push(room)
    return memo
  },[])
  return emptyRooms
}
//The output of the above function is
//['kitchen','ballroom','billiard room']
//['kitchen','ballroom']
var notInRooms = _.map(newDevelopment,notInRoom)

_.intersection(...notInRooms)