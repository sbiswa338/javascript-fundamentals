/* Lesson 5 - Functions & Scope */

/* Functions are the building block of Javascript 
They are considered first class objects. */
function simpleFunction() {
    console.log('Hello Javascript');
} // end fucntion

/* This function returns a string */
function simpleFunction2() {
    return 'Simple function 2 return';
} // end function

/* This function returns a parameter */
function simpleFunction3(message){
    console.log(message);
} // end function

/* Calling Functions above */
simpleFunction();

let simple = simpleFunction2();
console.log(simple); 

console.log(simpleFunction2());

simpleFunction3((' Simple Message 3'));

simpleFunction3(42);

/*Fucntion Expression
Define a function inside an expression */
const squareFoot = function(length, width) {
    return (length * width);
} // end function 

console.log(squareFoot(24,32));

/* Global scope */
/* Variables can have local or global scope.
Global meaning everyone can see it vs local 
which is contained withing scope */
function sample1() {
    able = 32;
    let beta = 'Hello';
    console.log(beta);
} // end function 

function sample2() {
    /*able has no defined declaration keyword 
    therefore it is global */
    console.log(able);

    //console.log(beta);
} // end function

sample1();
//sample2();

/* Nested Function */
/* Functions inside of functions. Inner function has
access to the scope of the outer function. the outer
function does not have access to the inner function scope. */
function outerScope(value1){
    let charlie = 20;

    //Inner function
    function innerScope(){
        let total = charlie + value1;
        console.log(total);
    } // end function

    // call innerscope function
    innerScope();

} // end function

outerScope(10);

/* Closure */
/* A way for a function to have private
variables using an anonymous function
with a nested function. */
const addFive = function() {
    let total = 0
    return function() {
        total += 5;
        return total;
    } // end inner function
}(); // end out function

addFive();
addFive();
console.log(addFive());

