/* Conditions Lab */
// Task 1

function comparisonFunction(value1, value2) {
    if(value1 == value2) {
        console.log(`${value1} & ${value2} are the same.`);
    } else{
        console.log(`${value1} and ${value2} are not the same.`);
    } // end if-else
} // end function

comparisonFunction(20,'20'); 

// Task 2

function outputGrade(grade) {
    switch(grade) {
        case 'E':
            console.log('Excellent');
        break;

        case 'V':
            console.log('Very Good');
        break;

        case 'G': 
            console.log('Good');
        break;

        case 'A': 
            console.log('Average');
        break;
        
        case 'F': 
            console.log('Fail')
        break;

        default: 
            console.log('Not a valid grade');
        break;
    } // end switch
} // end function

outputGrade('E');
outputGrade('T');

/* Question for Instructor 
        If it is possible, how would I create an Array with the grades possible then cycle them through the switch statement to display all possible grades?
*/