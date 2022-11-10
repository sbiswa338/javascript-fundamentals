/* Lesson 12 Concurrency */

// Task 1
function arugmentFunction(runs) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`This task was ran ${runs} times`);
        }, 2000);
    });
}

// Task 2
async function myAsync(echo) {
    console.log('Lets start the task');
    const numOfRuns = await arugmentFunction(echo);
    console.log(numOfRuns);
}

// Task 3
    for(let index = 0; index < 5; index++) {
      myAsync(index);
    }