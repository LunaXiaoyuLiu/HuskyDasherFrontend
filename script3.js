console.log("hello from script.js");

var animal = "cat"; // es5

let animal2 = "cat"; // declaration + assignment

// let animal2;
// animal2 = "cat";
// animal2 = "dog";

const animal3 = "cat";

const MY_OBJECT = {
    key: "value",
    key2: 2,
    key3: true,
    name: "any",
};

console.log("MY_OBJECT name is ", MY_OBJECT.name);

MY_OBJECT.name = "jack";

console.log("MY_OBJECT's new name is ", MY_OBJECT.name);

const MY_ARRAY = ["a", 1, true, MY_OBJECT];

console.log("MY_ARRAY 0th element is", MY_ARRAY[0]);

// undefined vs. null
let undefinedExample; // default is undefined
console.log("undefinedExample", undefinedExample);

let nullExample = null;
console.log("nullExample", nullExample);

// == vs. ===
console.log("1 == true", 1 == true); // Number(true) --> 1
console.log("1 === true", 1 === true); // use this only

// function
// way 1
function introduceYourself(name) {
    console.log("my name is", name);

    return name;
};

// way 2
const sayMyName = function (name) {
    console.log("my name is", name);

    return name;
};

// way 3 - arrow function () => {}
const addTwoNumbers = (num1, num2) => {
    const result = num1 + num2;
    return result;
};

// way 3' - one line expression
const addTwoNumbersV2 = (num1, num2) => num1 + num2;

// IIFE
(function(name) {
    console.log("my name is ", name);
    return name;
}) ("zhang san - IIFE");

((num1, num2) => console.log("IIFE num1 + num2: ", num1 + num2))(2, 3);

// callback function
function animalMakeSound(animal) {
    if (animal === "cat") {
        console.log("meou");
    } else if (animal === "dog") {
        console.log("wang wang");
    } else {
        // ...
    }
}

// use callback function
function animalMakeSound2(soundFunction) {
    soundFunction(); // callback function
}

const dogSound = () => console.log("wang wang");

const catSound = () => console.log("meou meou");

animalMakeSound2(dogSound);
animalMakeSound2(dogSound);
animalMakeSound2(dogSound);
animalMakeSound2(catSound);