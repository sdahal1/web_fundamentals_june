//Data types
/*
Data types can include the following:
1. Numbers (integers and decimals (floats))-> 1, 2,3,99,500, 100.  Decimals: 3.14, 3.50
2. Strings-> Characters and letters combined into one using quotes-> "Welcome to web fundamentals!?.%432324"
3. Booleans-> true or false


You can put these data types into variables. You can name your variables in these formats: 
// camelCase
// snake_case
// PascalCase

*/


var name = "Saurabh Dahal";
var age = 29;
var chipotlePrice = 9.75;
var chipotle_price = 9.75;
var isTeachingToday = true;

// console.log("Wazzaaaaa" + " " + name);

chipotlePrice -= 1;

// console.log(chipotlePrice);

var halfMyAge = age/2;
var twiceMyAge = age * 2;

// console.log("half my age is", halfMyAge);
// console.log("twice my age is", twiceMyAge);


/*
Data structures are things where we can put one or many data types inside of (we can group data types into one thing)

1. Array
*/

var artists = ["Drake", "Weezy", "Weekend", "NIN", "Saint John", "Taylor Swift", "Weezer", "Andre3000", "Billie", "Hanna Montana", "Linkin Park"]; //11 elements in this array
//indexes->     0          1        2        3         4               5           6          7           8             9               10 


// console.log(artists[0])
// console.log(artists[1])
// console.log(artists[2])
// console.log(artists[3])
// console.log(artists[4])
// console.log(artists[5])


/*
A for loop is a way for us to repeat a proces a certain number of times

i = 0->1->2->3->4->5->6
*/

for(var i = 5; i< artists.length; i++){
    console.log(artists[i])
    // console.log(i)
}












