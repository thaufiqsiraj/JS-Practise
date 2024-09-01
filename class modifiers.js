class Animal {
  constructor(name) {
    this.name = name; // Public property
  }

  speak() {
    // Public method
    console.log(`${this.name} makes a noise.`);
  }
}

const dog = new Animal("Dog");
console.log(dog.name); // Accessible
dog.speak(); // Accessible

class AnotherAnimal {
  #species; // Private field

  constructor(name, species) {
    this.name = name; // Public property
    this.#species = species; // Private property
  }

  #getSpecies() {
    // Private method
    return this.#species;
  }

  speakCat() {
    console.log(`${this.name} is a ${this.#getSpecies()} and makes a noise.`);
  }
}

const cat = new AnotherAnimal("Cat", "Feline");
cat.speakCat(); // Works fine
// console.log(cat.#species); // Error: Private field '#species' must be declared in an enclosing class
