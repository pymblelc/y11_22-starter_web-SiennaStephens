let myImage = document.getElementById("myPhoto");
let myButton = document.getElementById("btnAnalyse");
let myText = document.getElementById("myText");
let btnDetermine = document.getElementById("btnDetermine");
let determineText = document.getElementById("determineText");
let btnClear = document.getElementById("btnClear");
let btnNext = document.getElementById("btnNext");
let results =document.getElementById("results");

let imageURL = myImage.src;

var faces = []; //undefined

myButton.addEventListener("click", function () {
  ImageAPI.analyseFaces(imageURL, function (data) {
    console.log(data);
    // for (initial condition; ending condition; increment)
    // for (i = 0; i < data.length; i++)
    for (person in data) {
      let personList = document.createElement("ul");

      //Moustache or no moustache
      let hair = data[person].faceAttributes.facialHair.moustache;
      let hairText = "";
      if (hair == 1) {
        hairText = "moustache.";
      } else {
        hairText = " no moustache.";
      }
      if (data[person].faceAttributes.age > 40) {
        console.log("Person is older than 40");
        personList.innerHTML += "<li>" + data[person].faceAttributes.age + "</li>";
      }
      // Glasses or no glasses
      let glasses = data[person].faceAttributes.glasses;
      let glassesText = "";
      if (glasses == "NoGlasses") {
        glassesText = "no glasses";
      } else {
        glassesText = "glasses";
      }

      // let text =
      //   "<li>" +
      //   // "Face " +
      //   // (i + 1) +
      //   glassesText +
      //   hairText +
      //   "</li>";

      // personList.innerHTML += text;

      personList.innerHTML += "<li>" + glassesText + "</li>";
      
      personList.innerHTML += "<li>" + hairText + "</li>";

      faces.push({
        hair: hair,
        hairText: hairText,
        glasses: glasses,
        glassesText: glassesText,
        // finalComment: text,
      });

      myText.innerHTML += "<p>" + person + "</p>";
      // Put the person list on the screen
      myText.append(personList);
    }
  });
});


btnDetermine.addEventListener("click", function () {
  myText.innerHTML = "";
  console.log(faces);
  for (let i = 0; i < faces.length; i++) {
    if (faces[i].hair == 1 && faces[i].glasses != "NoGlasses") {
      faces[i].finalComment =
        "<p>" + "Face" + (i + 1) + "Meets the subject description." + "</p>";
    } else {
      faces[i].finalComment =
        "<p>" + "face" + "Does not meet the subject description." + "<p>";
    }
    results.innerHTML += faces[i].finalComment;
  }
});
faces = []; /// this goes back to nooothing.....
//  for (let i = 0; i <data.length; i++){
//   if(faces[i].glasses)

// }
// )

//[0] means the computer only takes face attributes from the person selected.
//!= means false

// Age >20
// let age = data[i].faceAttributes.age;
// let ageText = "";

// let text = "<p>" +"Face" +(person + 1) +"has" + glassesText + "and has" + hairText + "<p/>";
// results.innerHTML += text;

// let check = true;

// check = !check;

//Moustache no moustache
// for (let I = 0; i < data.length; i++){
//     let hair = data [i].faceAttributes.facialhair.moustache;
//     let hairText = '';
//     if(hair ==1){
//         hairText = 'moustache.'
//     }else{
//        hairText = 'no moustache.'
//     }
// }


// let text =
// "<li>" +
// // "Face " +
// // (i + 1) +
// " has " +
// glassesText +
// " and has " +
// hairText +
// "<li/>";
// myText.innerHTML += text;

