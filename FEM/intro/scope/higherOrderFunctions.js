//https://slides.com/bgando/f2f-final-day-2

//Exercise : Translat into ES6
//Question 1:
var increment = function (n) {
  return n + 1;
};

//Answer 1:
var increment = (n) => n + 1; //return doesn't need to be explicitly mentioned for single statement in ES6

//Question 2
var square = function (n) {
  return n * n;
};

//Answer 2

var square = (n) => n * n;

//Question 3

var doMathSoIDontHaveTo = function (n, func) {
  return func(n);
};

//Answer 3
var doMathSoIDontHaveTo = (n, func) => func(n);
