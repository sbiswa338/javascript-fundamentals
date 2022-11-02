/* Lesson 12 - Concurrency */
/* Concurency is a concept of asynchronous programming */

/* Callbacks */
/* Callbacks are asynchronous functions that 
call back after the execuetion completes */

/* Using the built-in function called timeOut */
const note = function() {
    console.log('This note will show in 3 seconds');
};

setTimeout(note, 3000);

/* Anonymous Function style */
setTimeout(function(){
    console.log('Anonymous function shows in 4 seconds');
}, 4000);

/* Creating our own */
function score(grade) {
    switch(grade){
        case 'A':
            console.log(`You got an ${grade}, awesome`);
            break;
        case 'B':
            console.log(`You got an ${grade}, nice`);
            break;
        case 'C':
            console.log(`You got an ${grade}, good`);
            break;
        case 'D':
            console.log(`You got an ${grade}, lets do better`);
            break;
        default:
            console.log()
    }
}

/* The below swtich uses expressions different than a standard switch.
This is achieved by passing a boolean true into the swtich. Because of
this, we can use comparison operators */
function GetGrade(value, callback) {
    let gradeValue;
    switch(true) {
        case value >= 90:
            gradeValue = 'A';
            break;
        case value >= 80:
            gradeValue = 'B';
            break;
        case value >= 70:
            gradeValue = 'C';
            break;
        case value >= 60:
            gradeValue = 'D';
            break;
        default: 
        gradeValue = 'F';
        break;
    }
    callback(gradeValue);
}

GetGrade(85, score);

/* Promise */
/* An object that is the eventual or failure
of an asynchrnous operation */
let myPromise = new Promise((resolve, reject) => {
    let able = 20;

    // setTime function
    setTimeout(() => {

        if(able > 10){
            resolve(able);
        } else {
        reject('Promise value is not high enough.');
    }

    }, 5000);

});

myPromise.then(value => {
    console.log(`Success Promise of: ${value}`);
}).catch(error => {
    console.log(error);
});

console.log(myPromise);

/* Async / Await */
/* An asynchronous function that enables promise-based behaviour 
in a cleaner style that doesn't need the promise chains. */
function delayForAMoment(delta) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Async Resolved ${delta}`);
        }, 6000);
    });
}

async function myAsync(echo) {
    console.log('Calling delay');
    const result = await delayForAMoment(echo);
    console.log(result);
}

myAsync('Now');
myAsync('Shortly');
myAsync('Soon');