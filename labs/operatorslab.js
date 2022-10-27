/* Operators Lab */
/* Task 1 */
function operatorOutput() {
    const totalOne = 10 + 32 * (12 / 3);
    const totalTwo = (10 + 32) * 12 / 3;  

    console.log(`First output: ${totalOne}, Second output: ${totalTwo} `);
}

operatorOutput();

/* Task 2 */
function twoParameters(num1, num2) {
    let mod =  num2 %= 2;
            if( mod == 0){
            console.log(`${num2} is even`);
        } else {
            console.log(`${num2} is odd`);
        } // end else
    let sub = num2 -= num1;
    let add = num1 += num2;

    console.log(`Subtraction Operator: ${sub}, Addition Operator: ${add}, Modulus Operator: ${mod} `);
} // end function

twoParameters(10, 15);

/* Task 3 */

function comparisonOper(var1, var2) {
    const sameValue = var1 == var2;
    const differentValue = var1 != var2; 
    const sameType = var1 === var2; 
    
    console.log(`Are the varibles same value?: ${sameValue},\nAre the varibles different values?: ${differentValue}, \nAre the varibles same the data type?: ${sameType} `);
}
comparisonOper(20, '20');