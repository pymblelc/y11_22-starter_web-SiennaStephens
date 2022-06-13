//Google the following:
//"js element click listen"
// highlight Command forward slash to makes all lines comments




let button = document.getElementById("helloBtn");
let div = document.getElementById("HelloDiv");

// //on[event]
// button.onclick = function(){
//     alert("Hello World!");
// };

//addEventListener
button.addEventListener(
    "click",
    function() {
        alert("Hello World!");
        div.innerHTML = "Hello World";
        div.style.backgroundColor ="red";
    }
);

