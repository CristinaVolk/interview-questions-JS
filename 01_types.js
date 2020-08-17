//null undefined boolean number string object symbol

console.log(typeof 0);
console.log(typeof true);
console.log(typeof "Java");
console.log(typeof undefined);
console.log(typeof Math);
console.log(typeof Symbol("JS"));
console.log(typeof null);
console.log(typeof function () {});
console.log(typeof 1 / 0);

// // '' , 0 null undefined NaN false
console.log(Boolean(0));
console.log(Boolean("Hello"));
console.log(Boolean(" "));
console.log(Boolean("0"));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean([]));
console.log(Boolean({}));
console.log(Boolean(function () {}));

// Strings and numbers
console.log(1 + "2"); // + is defined for strings, JS will convert to string
console.log("" + 1 + 0);
console.log("" - 1 + 0); // - is not defines for strings. JS will convert to number
console.log("3" * "8");
console.log(4 + 10 + "px"); // order is imporant!
console.log("px" + 5 + 10);
console.log("42" - 40);
console.log("42px" - 40);
console.log(null + 40);
console.log(undefined - 40);

//== vs ===
console.log(2 == "2");
console.log(2 === "2");
console.log(undefined == null);
console.log(undefined === null);
console.log("0" == false);
console.log("0" == 0);
console.log(0 == 0);

// ========
// console.log(false == "");
console.log(false == []);
console.log("" == {});
console.log("" == []);
console.log(0 == []);
console.log(0 == {});
console.log(0 == null);
