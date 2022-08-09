// p. 241
// syntax errors (when source code statements do not adhere to the rules of the programming language - it's like stepping off the track of the languages railroad diagram)
// when you've written something incorrectly or forgotten to close a bracket etc. missing characters, typos, spelling mistake

if (1 > 2) {
    console.log("sad noises");
]

// runtime errors (when your computer is unable to continue executing instructions)
// spelling mistakes can also become runtime errors - for example a spelling mistake in a property

let text = document.getElementById("this-doesnt-exist");
console.log(text.innerText);

// logic errors (when programs do not correctly work as anticipated but still executes)
// simply when you're logic is wrong
let sum = 2 + 3 * 5;
// expected output: 25
// actual output:   17
// we'd have to add brackets around 2 + 3 to get the expected output

// stub
function calcTotal (data) {
    // a function to write later
    return [
        1,2,3,4,5 // some hard coded data
    ];
}
// flag
let flag = false; // set a boolean var to false
if (some_condition) { // set var to true when section of code is executed
    flag = true;
}
console.log(flag); // display the value