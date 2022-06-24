// //Google the following:
// //"js element click listen"
// // highlight Command forward slash to makes all lines comments

// let button = document.getElementById("helloBtn");
// let div = document.getElementById("HelloDiv");

// // //on[event]
// // button.onclick = function(){
// //     alert("Hello World!");
// // };

// //addEventListener
// button.addEventListener(
//     "click",
//     function() {
//         alert("Hello World!");
//         div.innerHTML = "Hello World";
//         div.style.backgroundColor ="red";
//     }
// );

var faces; // undefines

// faces = [
//     "hello",
//     "world"
// ];

faces = [
  {
    // record
    mo: 1,
    age: 43,
    style: 0,
  },
  {
    "mo":0,
    "age":16,
    "style":32
  },
];

//add a new face  to the faces list
faces.push(
    {
        "mo":0,
        "age": 12,
        "style":64,
        "gender":"female"
    }
);

faces [0].age //43
faces[1].style //32
face[2].gender //"female"
faces[0].gender // undefined
