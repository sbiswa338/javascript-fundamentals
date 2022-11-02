/* Looping Lab */
// Task 1
function numWhileLoop() {
    let value = 5
    while(value <= 25) {
        console.log(value)
        value++
    }
}

numWhileLoop();

// Task 2 
function oddNumbers() {
    for(let num2 = 0; num2 <= 30; num2++) {
        if (num2 % 3 == 0)
            console.log(`${num2} is divisible by 3.`);
    }
}

oddNumbers();
