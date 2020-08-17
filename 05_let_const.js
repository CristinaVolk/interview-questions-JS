let a = "Var a";
let b = "Var b";
{
  a = "New Var a";
  let b = "New Var b";
  console.log("Scope A", a);
  console.log("Scope B", b);
}
console.log(a);
console.log(b);

//Const
const PORT = 8080;
const array = ["a", "r", "r", "a", "y"];
array.push("!");
