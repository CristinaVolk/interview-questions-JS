const person = {
  surname: "Stark",
  knows: function (what, name) {
    console.log(`You know ${what} , ${name} ${this.surname}`);
  },
};

const john = { surname: "Snow" };

person.knows("everyhing", "Bran");
person.knows.call(john, "nothing", "John");
person.knows.apply(john, ["nothing", "John"]);
person.knows.call(john, ...["nothing", "John"]);
const bound = person.knows.bind(john, "nothing", "John");
bound();

//====== Explicit

function logThis() {
  console.log(this);
}

const obj = { num: 42 };

logThis.apply(obj);
logThis.call(obj);
logThis.bind(obj)();

//======= Implicit

const animal = {
  legs: 4,
  logThis: function () {
    console.log(this);
  },
};

animal.logThis();

function Cat(color) {
  this.color = color;
  console.log("This", this);
  (() => console.log("Arrow function", this))(); // doesn't create its own context!
}

new Cat("red");
