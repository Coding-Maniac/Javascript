//Create an object using bracket and dot notation that represents the game of clue
//https://slides.com/bgando/f2f-final-day-1
//Slide notes
var game = {};

game.murderer = "?";

//The below is an example of array of objects
game["Weapons"] = [
  { type: "M416", location: "lab" },
  { type: "AK47", location: "No Where" },
  { type: "Knife", location: "Somewhere" },
  { type: "BOMB", location: "Everywhere" },
];

game.name = ["Mr Maniac"];

game.name[1] = "Miss Scarlet";

game.name.push("Mr.Green");
