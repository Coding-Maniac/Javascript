const game = {
  suspects: [
    {
      name: "Sanjay",
      aim: "Beat Swaroop",
    },
    {
      name: "Swaroop",
      aim: "Best in Every Technical Matter",
    },
  ],
};

for (let i = 0; i < game.suspects.length; i++) {
  console.log(game.suspects[i]);
  for (let obj in game.suspects[i]) {
    console.log(`${obj} is : ${game.suspects[i][obj]}`);
  }
}
//Destructuring
const [name1, name2] = [game.suspects.name[0], game.suspects.name[1]]; //One Method  (Gud But not the best method)
const [{ name: firstName }, { name: secondName }] = game.suspects; //Best one
