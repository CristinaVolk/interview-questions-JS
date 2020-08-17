// function sayHelloTo(name) {
//   const message = "Hello" + name;

//   return function () {
//     console.log(message);
//   };
// }

// const helloToElena = sayHelloTo("Elena");
// const helloToIgor = sayHelloTo("Igor");

// console.log(helloToElena);
// console.log(helloToElena());

function createFrameworkManager() {
  const fw = ["Ang", "React"];

  return {
    print: function () {
      console.log(fw);
    },
    add: function (framework) {
      fw.push(framework);
    },
  };
}

const manager = createFrameworkManager();
console.log(manager);

const fib = [0, 1, 1, 2, 3, 5, 8, 13];

for (let i = 0; i < fib.length; i++) {
  setTimeout(function () {
    console.log(`fib[${i}] = ${fib[i]}`);
  }, 3000);
}
