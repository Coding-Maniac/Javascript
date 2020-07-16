//currying allows us to break a function into parts -a bit confusing
var abc = function abc(a,b,c){
    return [a,b,c]
}

var curried = _.curry(abc);

curried(1)(2)(3);
//=> [1,2,3]
//The difference here is 
//Step1: the function abc will be called an the value of a is stored in the scope 
//Step2: the function abc will be called an the value of b is stored in the scope 
//Step3: similar to above value c is stored
//Step4: Once curried gets all the arguments it runs the function
//Step5 : Only After getting all the arguments the function returns the output

//Curried waits to get all the arguments of a function and then run the function

//Exercise
//Implement a curry that only takes 2 values

const curry = (fn) => {
    return (arg1) => {
        return(arg2) => {
            return fn(arg1,arg2);
        }
    }
}

var ab = (a,b) => {
    return [a,b]
}

const curried = curry(ab);
curried(1)(2);