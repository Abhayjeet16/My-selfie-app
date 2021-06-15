var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

var Textbox = document.getElementById("textbox"); 

function start()
{
    Textbox.innerHTML = ""; 
    recognition.start();
} 
 
recognition.onresult = function(event) {

 console.log(event); 

var Content = event.results[0][0].transcript;

    Textbox.innerHTML = Content;
    console.log(Content);
      if(Content =="take my selfie")
      {
        console.log("taking selfie --- ");
        speak();
      }
}
function speak(){
var syth =window.speechSynthesis;
speak_data = document.getElementById("textbox").value;
var utterthis = new SpeechSynthesisisUtterance(speak_data);
synth.speak(utterthis);
}
Webcam.set({
width:360,
height:250,
Image_format:'png',
png_quality:90
});
camera = document.getElementById("camera");