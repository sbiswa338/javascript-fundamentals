/* Arrays Lab */
// Task 1
const iceCreamFlavors = ['Vanilla','Chocoloate', 'Mint', 'Cookies N\' Cream', 'Mango', 'Stawberry', 'Orange Dreamsicle', 'Mamey','Chocolate Chip', 'Cheesecake' ]; 

function allFlavors() {
    for(let i = 0; i < iceCreamFlavors.length; i++) {
        console.log(iceCreamFlavors[i]);
    } 
}

allFlavors();

// Task 2

function flavorsJoin() {
    let combine = iceCreamFlavors.join(' & ');
    console.log(combine);
}

flavorsJoin();