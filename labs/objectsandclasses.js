/* Lesson 11 - Objects and Classes Lab */
//Task 1

const cats = {
    breed: 'Tonkinese Cat', 
    furPattern: 'painted',
    color: 'Black',
    gender: 'Male',

    catsNoise(){
        console.log('The cat goes meow. ᓚᘏᗢ ');
    }
}

console.log(cats.color);
cats.catsNoise();

//Task 2

class Guitar{
    #brand;
    #wood;
    #numOfStrings;
    #stringType;
    constructor (brand, wood, numOfStrings, stringType){
        this.#brand = brand 
        this.#wood = wood
        this.#numOfStrings = numOfStrings
        this.#stringType = stringType
    }

    get brand() {return this.#brand;}
    get wood() {return this.#wood;}
    get numOfStrings() {return this.#numOfStrings;}
    get stringType() {return this.#stringType;}
    
    set brand(brand) {
        this.#brand = brand;
    }

    set wood(wood) {
        this.#wood = wood;
    }

    set numOfStrings(numOfStrings) {
        this.#numOfStrings = numOfStrings;
    }

    set stringType(stringType) {
        this.#stringType = stringType;
    }

    guitarType(){
        return this.#numOfStrings  + ' ' + this.#brand
    }
}

const myGuitar = new Guitar('Fender', 'Rosewood', '6 string', 'Nylon Strings')
console.log(myGuitar.brand)

console.log(myGuitar.guitarType());