let obj = {
  name: "Thaufiq",
};

let obj2 = Object.create(obj, {});
console.log(obj2);
console.log(obj2.name);
let obj3 = Object.create(obj, {
  fullName: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: "John",
  },
  canBowl: {
    configurable: true,
    writable: true,
    enumerable: true,
    value: true,
  },
});
console.log(obj3);
console.log(obj3.name);
