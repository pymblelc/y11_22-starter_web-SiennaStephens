let myImage = document.getElementById("myPhoto");
let myButton = document.getElementById("btnAnalyse");
let results = document.getElementById("myText");

let imageUrl = myImage.src;

results.innerHTML = imageUrl;

myButton.addEventListener("click",function (){

    for (let i = 0; i < this.dataset.length; i++){
        
    }

    // ImageAPI.analyseFaces(imageUrl,function(data){
    //     let finalInfo = 'Dr Hadwen looks about' + data[0].faceAttributes.age + 'years old';
    //     finalInfo = 'and has' + data[0].facailHair.moustache +'moustache';
    //     results.innerHTML = finalInfo
    // });

});


