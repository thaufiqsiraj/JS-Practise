//object
const dude = {};
dude.name = "Thaufiq";
dude.age = 21;

console.log(dude);
console.log(dude.name);
console.log(dude.age);
console.log(dude.dude);
console.log(dude.valueOf);
console.log(dude.__proto__);

//array
const arr = [1, 2, 3];
console.log(arr.__proto__);
console.log(arr);

//class
class Thaufiq {
  skills() {
    return "coding";
  }
}

class Siraj extends Thaufiq {
  language() {
    return "js";
  }
}

const me = new Siraj();
console.log(me);
console.log(me.language());
console.log(me.skills());

//understanding prototype
function dude2(name) {
  this.name = name;
}
const person = new dude2("T");
console.log(person);
console.log(person.prototype); //undefined
console.log(dude2.prototype); //exists
console.log(person.__proto__); //same as console.log(dude2.prototype)
console.log(dude2.prototype === person.__proto__); //true
