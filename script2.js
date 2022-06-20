let myImage = document.getElementById("myPhoto");
let myButton = document.getElementById("btnAnalyse");
let myText = document.getElementById("myText");

let imageURL = myImage.src;

myBtn.addEventListener("click", function(){
    // myText.innerHTML = imageURL;
}
);

ImageAPI.analyseFaces(imageURL, function(data){
    console.log(data);
    for (let I = 0; i < data.length; i++){
        let hair = data [i].faceAttributes.facialhair.moustache;
        let hairText = '';
        if(hair ==1){
            hairText = 'moustache.'
        }else{
           hairText = 'no moustache.'
        }
    }
}
);

//[0] means the computer only takes face attributes from the person selected.
let glasses = data[i].faceAttributes.glasses 
let glassesText = '';
if(glasses == 'NoGlasses'){
    glassesText = 'no glasses'
}else {
    glassesText = 'glasses'
};
let text = '<p>' + 'Face' + (i+1) +'has' + glassesText + 'and has' + hairText + '<p/>';
results.innerHTML += text;



