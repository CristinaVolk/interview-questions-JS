//__proto__
//Object.prototype

function Cat(name, color) {
  this.name = name;
  this.color = color;
}

Cat.prototype.voice = function () {
  console.log(`Cat ${this.name} says myay`);
};

const cat = new Cat("Cat", "white");

console.log(Cat.prototype);
console.log(cat._proto_ === Cat.prototype);
console.log(cat.constructor);
console.log(cat);
cat.voice();

function Person() {}

Person.prototype.legs = 2;
Person.prototype.skin = "white";

const person = new Person();

console.log("skin" in person);

console.log(person.hasOwnProperty("name"));

// Object.create()

var proto = { year: 2020 };
const myYear = Object.create(proto);

console.log(myYear.year);
