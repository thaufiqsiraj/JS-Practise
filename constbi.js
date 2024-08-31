const num1 = new Number(42);
console.log(typeof num1);
console.log(num1.valueOf());

const num2 = 7;
console.log(typeof num2);

const str1 = new String("Hello");
console.log(typeof str1);
console.log(str1.valueOf());

const str2 = "World";
console.log(typeof str2);

const bool1 = new Boolean(true);
console.log(typeof bool1);
console.log(bool1.valueOf());

const bool2 = false;
console.log(typeof bool2);

const arr1 = new Array(1, 2, 3);
console.log(arr1);
console.log(Array.isArray(arr1));

const arr2 = [4, 5, 6];
console.log(arr2);
console.log(Array.isArray(arr2));

const obj1 = new Object();
obj1.name = "John";
obj1.age = 30;
console.log(obj1);

const obj2 = { city: "New York" };
console.log(obj2);
