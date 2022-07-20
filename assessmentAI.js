//Taking the elements 'webcam', 'canvas'  and 'snapSound' from the js file so that they can be manipulated in the html file.
const webcamElement = document.getElementById("webcam");
const canvasElement = document.getElementById("canvas");
const ctx = canvasElement.getContext("2d");
// const snapSoundElement = document.getElementById('snapSound');
const buttonOpenCamera = document.getElementById("btnOpenCamera");
const buttonCloseCamera = document.getElementById("btnCloseCamera");
const buttonTakePhoto = document.getElementById("btnTakephoto");
const buttonClearcamera = document.getElementById("btnClearcamera");
const buttonAnalyse = document.getElementById("btnAnalyse");

const webcam = new Webcam(webcamElement, "user", canvasElement);

let results = document.getElementById("AnalyseText");

let myButton = document.getElementById("btnAnalyse");
let myText = document.getElementById("myText");
let btnDetermine = document.getElementById("btnDetermine");
let determineText = document.getElementById("determineText");
// let btnNext = document.getElementById("btnNext");

let faces = [];

//Open Camera
buttonOpenCamera.addEventListener("click", function () {
  webcam
    .start()
    .then((result) => {
      console.log("webcam started");
    })
    .catch((err) => {
      console.log(err);
    });
});

//Take Photo
btnTakephoto.addEventListener("click", function () {
  faces = [];
  let picture = webcam.snap();
  console.log(picture);
});

// Close Camera
buttonCloseCamera.addEventListener("click", function () {
  webcam.stop();
});

//Clear Camera
buttonClearcamera.addEventListener("click", function () {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

canvasElement.toBlob(function (data) {
  ImageAPI.analyseFacesBlob(data);
});

// Analyse Face in the camera and see if it meets the subject criteria
buttonAnalyse.addEventListener("click", function () {
  canvasElement.toBlob(function (blob) {
    //this takes the data from the canvas and the data is turned into a blob
    ImageAPI.analyseFacesBlob(blob, (data) => {
      //the blob is then fed into the API
      console.log(data);
      console.log(data[0])
      // for (let i = 0; i < data.length; i++) {
      for (person in data) {
        console.log("person: "+ person);
        let personList = document.createElement("ul");
        faces.push(data[person]);

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
          personList.innerHTML +=
            "<li>" + data[person].faceAttributes.age + "</li>";
        }
        // Glasses or no glasses
        let glasses = data[person].faceAttributes.glasses;
        let glassesText = "";
        if (glasses == "NoGlasses") {
          glassesText = "no glasses";
        } else {
          glassesText = "glasses";
        }

        let text =
          "<li>" + "Face " + (parseInt(person) + 1) + "</li>";
  
        personList.innerHTML += text;
  
        personList.innerHTML += "<li>" + glassesText + "</li>";
  
        personList.innerHTML += "<li>" + hairText + "</li>";
  
        results.appendChild(personList);
       
        // faces.push({
        //   hair: hair,
        //   hairText: hairText,
        //   glasses: glasses,
        //   glassesText: glassesText,
        //   finalComment: text,
        // });
      }
    });
  });
});



btnDetermine.addEventListener("click", function () {
  let comments = '';
  for (let i = 0; i < faces.length; i++) {
    console.log(faces[i]);
    if ((faces[i].faceAttributes.gender == "female" && faces[i].faceAttributes.glasses != "NoGlasses" ) || (faces[i].faceAttributes.gender == "male" && faces[i].faceAttributes.age < 30 )) {
      faces[i].finalComment =
        "<p>" + "Face" + (i + 1) + " Matches the suspect description in the database." + "</p>";
    } else {
      faces[i].finalComment =
        "<p>" + "Face" + (i + 1) + " Does not match the suspect decription in the database" + "<p>";
    }
    comments += faces[i].finalComment;
  }
  results.innerHTML = comments;
});
/*
// This uses the analysis determined by the computer and determines whether it meets the suspect decription.
btnDetermine.addEventListener("click", function () {
  personList.innerHTML = "";
  console.log(faces);
  for (let i = 0; i < faces.length; i++) {
    if (faces[i].hair == 1 && faces[i].glasses != "NoGlasses") {
      faces[i].finalComment =
        "<p>" + "Face" + (person.id + 1) + "Matches the suspect description in the database." + "</p>";
    } else {
      faces[i].finalComment =
        "<p>" + "face" + "Does not match the suspect decription in the database" + "<p>";
    }
    results.innerHTML += faces[i].finalComment;
  }
});
*/
// let myImage = document.getElementById("myPhoto");
// let imageURL = myImage.src;

// var faces = []; //undefined

//       //Moustache or no moustache
//       let hair = data[person].faceAttributes.facialHair.moustache;
//       let hairText = "";
//       if (hair == 1) {
//         hairText = "moustache.";
//       } else {
//         hairText = " no moustache.";
//       }
//       if (data[person].faceAttributes.age > 40) {
//         console.log("Person is older than 40");
//         personList.innerHTML +=
//           "<li>" + data[person].faceAttributes.age + "</li>";
//       }
//       // Glasses or no glasses
//       let glasses = data[person].faceAttributes.glasses;
//       let glassesText = "";
//       if (glasses == "NoGlasses") {
//         glassesText = "no glasses";
//       } else {
//         glassesText = "glasses";
//       }

//       // let text =
//       //   "<li>" +
//       //   // "Face " +
//       //   // (i + 1) +
//       //   glassesText +
//       //   hairText +
//       //   "</li>";

//       // personList.innerHTML += text;

//       personList.innerHTML += "<li>" + glassesText + "</li>";

//       personList.innerHTML += "<li>" + hairText + "</li>";

//       faces.push({
//         hair: hair,
//         hairText: hairText,
//         glasses: glasses,
//         glassesText: glassesText,
//         // finalComment: text,
//       });

//       myText.innerHTML += "<p>" + person + "</p>";
//       // Put the person list on the screen
//       myText.append(personList);
//     }
//   });
// });
