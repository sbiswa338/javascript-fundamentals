/* Lesson 7 - Conditional Statements */

/* if statement */
/* The scope of an if statement will execute 
only when its condition is true. unless you use 
the ! logical operator  */
function ifExample(value1) {

    console.log('Before if statement');
    if(value1 > 10){
        console.log(`Value of ${value1} is larger than 10`);
    } // end if 
    console.log('After if statement');
   
} //  end function

ifExample(2);

/* if / else statement */
/* The else statement will execute only 
when the if condition is false, except in cases
where the ! logicical operator is used. */
function elseExample(value2) {
    if(value2 == "JavaScript") {
        console.log('The value was true');
    } else{
        console.log('The value was false');
    } //end if/else statement

} // end function

elseExample('JavaScript1');

/* else if */
/* A chain of if else statements. Be aware of 
the order of the conditions. This is so 
conditions are not skipped. */
function elseIfExample(num1) { 

    if (num1 <= 5) {
        console.log(`${num1} is less than or equal to 5`);
    } else if (num1 <= 10) {

        console.log(`${num1} is less than 10.
        but highier than 5`);

    } else if(num1 <= 15) {
        console.log(`${num1} is less than 15, 
        but higher than 10`);

    } else {
        console.log(`${num1} is greater than 15`);
    } // end else/if

} // end function


elseIfExample(16);

/* The switch statement */
/* This statement can repplace an
if/else chain where the condition is
about eqaulity. The break keyword is needed
to end a case so the switch can finish. If you
don't include a break, the case will join the 
next case. */
function favoriteColor(color) {
    switch(color) {
        case 'Blue'.toLowerCase():
            console.log('My favorite color is blue');
            break;
        case 'Red'.toLowerCase():
        //case 'red':
            console.log('My favorite color is red');
            break;
        case 'Green'.toLowerCase():
            console.log('My favorite color is green');
            break;
        default:
            console.log(`My favorite color is ${color}`);
            break;

    } // end switch
} // end function

favoriteColor('Blue');
