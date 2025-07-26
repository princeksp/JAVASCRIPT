/**
 * ! 1. Function Declaration Statement
 

function greet(user)
{
    console.log(user)
}

greet()*/

/**
 * ! 2. First class Function, Function as Expression

const greet=function fun(user)
            {
                console.log("Username:",user);
                return 10;
            }

greet()
 */

/**
 * ! 3. Immediately Invoked Function Expression (IIFE)
 * Todo:- It runs only one time


(function greet(user){
    console.log(`Namaste ${user}`);
})("Aditya");


const res=(function (){
            console.log("Hahahahah..");
            return `Tu Samajha..!`
})();

console.log("res:",res);
*/

/**
 * ! 4. Arrow Function (=>)Fat Operator
 * Todo: It is added in ES6,
 * Todo: This keyword is not inside arrow function
 */

// Implict Return type arrow function
const greet1 = (user) => console.log(`GM ${user}`);

// Explicit Return type arrow function
const greet2 = (user) => {
  console.log(`Namaste ${user}`);
  return "Dinga";
};
