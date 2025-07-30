class Animal {
    constructor(type, sound) {
        this.type = type;
        this.sound = sound;
    }
}

let dog = new Animal("Dog", "Woof");
console.log(dog.type);   // Dog
console.log(dog.sound);  // Woof