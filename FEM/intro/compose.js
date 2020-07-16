//Compose is a function which is used to invoke functions together 
//Example
const consider = (name) => { 
    return `I think it could be... ${name}`; 
};

const exclaim  = (statement) => { 
    return `${statement.toUpperCase()}!`; 
};

const blame = _.compose(consider, exclaim);

blame('you');

//Step 1: consider and exclaim function is defined
//Step2 : compose is passed with arguments consider and exclaim and the result is stored in blame
//Step3: Then blame function is invoked with the argument 'you'.
//Step4: Inturn the compose function is invoked.
//Step5: The compose function first invokes exclaim and then invokes consider with the result of the exclaim function.So the order goes from right to left

//A small under the hood implementation of compose with 2 arguments

const compose = (fn1,fn2) =>{
    return (arg1) => {
        const result = fn2(arg1);
        return fn1(result);
    }
}