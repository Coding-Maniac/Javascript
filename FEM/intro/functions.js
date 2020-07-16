//Exercise
//Function Scavenger Hunt
//Find : Defintions,Fn Names,Invocations,Arguments,Parameters,Fn Bodies,Return Values,Side Effects
//SELF-NOTE:Dont use 'Text Wrapping' to understand the solutions of this exercise
//slides: https://slides.com/bgando/f2f-final-day-1#/7

var nameImprover = function (name, adj) {
  return "Col " + name + " Mc" + adj + " pants";
};

$("body").hide();

myArr.forEach(function (val) {
  console.log(val);
});

$("button").on("click", function () {
  console.log("Don't press my buttons!");
});

//Function definition
//->line 6
//->line 12
//->line 16

//FN Names
//->line 6 nameImprover
//-> line 11 hide
//-> line 13 forEach
//-> line 14 on
//-> line 18 log [self-note: console is an object and console has many cool functions to check out]
//-> line 11 $ [self-note: $ sign is a function of JQUERY.The clue to find they are functions is they are followed by paranthesis and we can pass arguments]

//Function Bodies
//->line 8
//->line 14
//->line 18 [line14 and 18 are function bodies of the console.log().Both the function and the function body is in the same line]
//Self-note : Function Bodies dont run until the function is called

//Invocations
//log()
//hide()
//forEach()
//on()
//$

//Arguments
//->line 6 [name,adj]v
//-> line 12 [val]

//Parameters
//line 11 body
//line 17 button,click, function() [the function itself is passed as an argument ]
//line 13 function() [function is passed as an argument to forEach]

//Return Values
//line 7

//Side Effects
//$('body').hide(); [It changes the DOM, Anything in the DOM is side Effect as it changes thing]
//console.log [It logs the value to the console]
//[self-note: Although i wouldn't consider the above as side effects as the function is doing only what its supposed to do. A side effect is more like when the function affects a value in the global scope or causes any value changes]
