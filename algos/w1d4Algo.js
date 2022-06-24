function greetUser(firstName,lastName,age){
    console.log("Hello " + firstName + " " + lastName);
    
}


// greetUser("Thiery", "Nis");
// greetUser("Spensir", "Fields");
// greetUser("Nic", "Pederson");
// greetUser("Sammy", "K");
// greetUser("Raphael", "Charles");

/*
Parameter-> the words that represent what the function is expecting as input. Parameters are set when you DEFINE the function

Argument-> the data that i give to the function when i INVOKE (CALL) the function!

THE VALUE OF A FUNCTION CALL IS WHATEVER THAT FUNCTION CALL RETURNS!!!

*/


function sum(num1,num2){
    for(let i = 1; i<10; i++){
        console.log(i)
        if(i == 3){
            return;
        }
    }
    
    console.log("before the return")
    return num1 + num2

    console.log("after the return")

}

// sum(1,2)

// let someNum = sum(3,9) + sum(1,2);

// console.log(someNum)

let artists = ["Drake", "J cole", "MJ", "Hanna Montana", "The Dale Gribble Bluegrass Experience", "Kanye", "Ariana Grande"];



function searchForArtist(artistName){
    for(let i=0; i<artists.length; i++){
        // console.log(artists[i])
        if(artists[i] == artistName ){
            return "Found " + artistName + " at index number " + i
        }
        
    }
    return "No artist found with that name."


}

console.log(searchForArtist("MJ"));
// console.log(searchForArtist("J cole"));
// console.log(searchForArtist("Ariana Grande"));
// console.log(searchForArtist("Boosie"));













