/* Lesson 10 Maps Lab */
// Task 1
function getColors() {
    const colors = new Map();
        colors.set (1, 'Red');
        colors.set (2, 'Orange');
        colors.set (3, 'Blue'); 
        colors.set (4, 'Yellow');
        colors.set (5, 'White');
        colors.set (6, 'Black');

        return colors;
}

// Task 2 
function colorsElement(value, key) {
    console.log(`${key} is for ${value}`);
}

function colorsForEach (){
    let myColors = getColors();
    myColors.forEach(colorsElement);
}

colorsForEach();