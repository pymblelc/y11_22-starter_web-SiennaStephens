
const NEVER_CHANGE = 3.141592;
const GRAVITY = 9.8;
var globalAnswer = 12 + 53;
let answer = 30 + 12;

let number1 = 10;
let number2 = 20;

function sum(a, b) {
    return a + b;
}

let total1 = sum(1,2)
let total2 = sum(4,5)
let total3 = sum(3,7)

console.log(total1)
console.log(total2)
console.log(total3)

let number = window.prompt(
    "Pick a number"
);

console.log(number);

let color = window.prompt(
    "What is your favorite colour?"
    );

let text = document.getElementById("text")

text.innerHTML = color;
text.style.color = color;



