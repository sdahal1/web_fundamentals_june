// for(var i=5; i<10; i++) {
//     console.log("wazza");
//     i = i + 3; 
// }
    
// console.log("outside of the loop " + i);

var artists = ["Drake", "J Cole", "MJ", "Taylor Swift", "Beyonce"]



// for(let i = 0; i<artists.length; i++){
//     // console.log(artists[i]);
//     //if the artist is MJ, then print "King of Pop!"
//     if(artists[i] == "MJ"){
//         console.log("King of Pop!");
//     }else{
//        console.log(artists[i]) 
//     }
// }


var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";
    
if(isSunny) {
  whatToBring += "sunglasses, ";
}
if(temperature < 50) {
    whatToBring += "a coat, ";
}
if(isSunny) {
    whatToBring += "an umbrella, ";
}
else{
    whatToBring += "aint no Rihanna up in hea"
}





whatToBring += "and a smile!";
    
// console.log(whatToBring);




//whatToBring ---> "I should bring:sunglasses, a coat, and a smile!"


for(let i = 10; i>=1; i--){
    console.log(i)
}

console.log("blast off! To the mooon.")
