"use strict";
//=======================================> Assignment 02<=====================================
Object.defineProperty(exports, "__esModule", { value: true });
//let PersonalName:string='Eric';
//console.log(`Hello ${PersonalName} would you like to learn some Python today?`);
// //=======================================> Assignment 03<=====================================
/*let name:string='Hussain Ali';
console.log(name.toLowerCase());
console.log(name.toUpperCase());
console.log(name.replace(/\b\w/g,c=> c.toLowerCase()));


// //=======================================> Assignment 04<=====================================



console.log(` Imran khan Said: first of all you dont be scared`);


//=======================================> Assignment 05<=====================================


let famous_person:string='imran khan';
let message:string=' is love';
console.log( `${famous_person} ${message}`);


//
//=======================================> Assignment 06<=====================================



let Personalname:string="\t Hussain Ali \n";
console.log(`Name with whiteSpace: ${Personalname} `);
let strippedname=Personalname.trim();
console.log(`Name without whitespace:${strippedname}`);



//=======================================> Assignment 07 & 08<=====================================

console.log(5+3);
console.log(11-3);
console.log(16/2);
console.log(2*4);


//=======================================> Assignment 09<=====================================


let favoriteNum:number=3
console.log(`i have ${favoriteNum}cars`);


//=======================================> Assignment 10<=====================================


// My name is hussain ali
//i am student of GIAIC
//=======================================> Assignment 11<=====================================



let names: string[] = ["Matloob", "Anas", "Furqan", "Ameer hamza"]
names.forEach(friendsName=> console.log(friendsName));


//=======================================> Assignment 12<=====================================


names.forEach(friends => console.log(`hi ${friends} we will meet tomorrow insha Allah`));


//=======================================> Assignment 13<=====================================


let transportation:string[]=["Tesla", "BMW", "Bikes", "Landcruiser"]
for (let mode of transportation){                                 //1st method from loop
    console.log(`i have my own ${mode}`);
}
transportation.forEach(modes=>console.log(`i have ${modes}`)); // 2nd Method from array method


//=======================================> Assignment 14<=====================================



let guestlist:string[]=["Matloob", "Ashu","Eshal","Anus"];
// for(let guest of guestlist){
//     console.log(`hi ${guest} would you like to dinner with me?`);}


//=======================================> Assignment 15<=====================================


// step1 delete from starting 1 guest
//let deleteguest= guestlist.shift()
//console.log(`\n sorry ${deleteguest} you are enable of my list \t`);

//                                   step 2 replace guest

// guestlist.splice(3,3,"Abeer")
// console.log(guestlist);
//                                  step 3 invitiation list send

//guestlist.forEach(guest => console.log(`hi ${guest} you are invited to dinner with me!`));



//=======================================> Assignment 16<=====================================


//                    step  1

//guestlist.forEach(guests => console.log(`hii ${guests} i just found a big table for our dinner`));

//                     step 2 add on the starting

guestlist.unshift("Furqan")
console.log(guestlist);

//                    step3 add in the Middle of Array

guestlist.splice(2,0,"ameer hamza")
console.log(guestlist);

//                   step 4 again send  message  to all

guestlist.forEach(guest=>console.log(`hi my friend ${guest} you are invited my party and dinner with me`));


//=======================================> Assignment 17<=====================================


let totalguest:string[]=["Matloob", "Ashu","Eshal","Hussain Ali"];
//                                       step1
console.log("you can invited only 2 people for dinner because table have inly 2 people space");
//                                       step2
while(totalguest.length<2){
   let removeguest= totalguest.pop();
   console.log(`Sorry${removeguest} you are not invited for longer`);
}
//                                       step 3

totalguest.forEach(remainingGuest => console.log(`${remainingGuest} you are still invited`));
//                                        step4
totalguest.splice(0,2)
console.log(` This is your final guest list  ${totalguest}`);


//=======================================> Assignment 18<=====================================


let places:string[]=["japan","Spain", "America", "Canada","UK"];

//                                 print your original Array
console.log("Original Array", places);

// • Print your array in alphabetical order without modifying the actual list.
console.log("Its alphabetics copy Array",[...places].sort());

// • Show that your array is still in its original order by printing it.
console.log("Original Array",places);

//• Print your array in reverse alphabetical order without changing the order of the original list.
console.log("Reverse and Alphabetical order", [...places].reverse().sort());

//• Show that your array is still in its original order by printing it again.
console.log("show again its original Array" ,places);

//• Reverse the order of your list again. Print the list to show it’s back to its original order.
places.reverse();
console.log("Reverse Array" ,places);

//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
places.sort();
console.log("Sorted  Array order", places);

//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

places.sort().reverse()
console.log("Sorted in reverse Alphabetical order", places);


//=======================================> Assignment 19<=====================================



let ourguest:string[]=["Ameer Hamza","Matloob", "Ahmed","Anas" ]
console.log(`We are inviting total ${ourguest.length} guest`);


//
//=======================================> Assignment 20<=====================================



let country:string[]=["london","USA","UK","Canada"]
country.forEach(countries => console.log("my favorite country", countries))


//=======================================> Assignment 21<=====================================

 

let myname:{
    name:string,
    age:number,
    city:string,
    RollNumber:number

}
={
    name: "hussain ali",
    age: 17,
    city:"Hyderabad",
    RollNumber:295830
}
console.log(myname.RollNumber);
console.log(myname["city"]);

//=======================================> Assignment 22<=====================================


let indexError:string[]=['A','B','C','D','F']

// invalid index error
//console.log(indexError[6]);

//error solve sucessfully
console.log(indexError[3]);



//=======================================> Assignment 23<=====================================

let number = 5;

console.log("\n Is number == 5? i pridict its true!");
console.log(number==5);

console.log("\nIs number < 10? i pridict its true!");
console.log(number < 10);



console.log("\nIs number >= 5? i pridict its true!");
console.log(number>=5);



console.log("\nIs number > 4? i pridict its true!");
console.log(number > 4);


console.log("\nIs number != 40? i pridict its true!");
console.log(number != 40);

console.log("\nIs number != 5? i pridict its false!");
console.log(number != 5);


console.log("\nIs number > 5? i pridict its false!");
console.log(number > 5);


console.log("\nIs number <= 2? i pridict its false!");
console.log(number <= 2);


console.log("\nIs number == 10? i pridict its false");
console.log(number == 10);


console.log("\nIs number >= 40 ? i pridict its false!");
console.log(number >= 40);


//
//=======================================> Assignment 24<=====================================


let apple:string="apple";
let bananaUPPERCASE:string="BANANA";
let ten=10;
let five=5;

//• Tests for equality  with strings                      //step 1


console.log("\nIs apple equal to string apple? i pridict is true!");
console.log(apple == "apple");


//• Tests for inequality with strings

console.log("\nIs apple is not equal to string apple? i pridict is false!");
console.log(apple != "apple");


//• Tests using the lower case function                 //step 2

console.log("\nIs BananaUPPERCASE equal to LowerCase banana? i pridict is true!");
console.log(bananaUPPERCASE.toLowerCase() == 'banana'  );


console.log("\nIs apple equal to string banana? i pridict is false!");
console.log(apple == "banana");
//
//• Numerical tests involving equality and inequality,         //step 3

console.log("\nIs five == ten? i pridict is false");
console.log(five == ten);


console.log("\nIs five != ten? i pridict is true");
console.log(five != ten);

//Greater than and Less than

console.log("\nIs five > ten? i pridict is false");
console.log(five > ten);


console.log("\nIs five < ten? i pridict is True");
console.log(five < ten);


// Greater than or Equal to Less than or Equal to

console.log("\nIs five >= ten? i pridict is false");
console.log(five >= ten);


console.log("\nIs five <= ten? i pridict is true");
console.log(five <= ten);


//                 • Tests using "and" and "or" operators          //step 4

console.log(ten < five || five == ten);
console.log("\nTest OR operator 1 codition is false or 1 codition is true I pridict its true ");
//                               AND operator &&
console.log(ten ==five && five < 2 );
console.log("\nTest AND operator i pridit its false because one condition is false ");


//• Test whether an item is in a array
let Cars:string[]=["BMW","Audi","Vigo"]

console.log("\nIs corolla is not in Array? i pridict its false");
console.log(Cars.includes("corolla"));

//• Test whether an item is not in a array
console.log("\nBMW is in Array? i prididct its true");
console.log(Cars.includes("BMW"));


//
//=======================================> Assignment 25<=====================================

let alien_color:string="green";
if(alien_color == "green"){
    console.log("\nPlayer just earn 5 point \n");
}
//                   step2     Failed version
if (alien_color="red"){
    console.log("The version that fail will have no output");
}


//
//=======================================> Assignment 26<=====================================


let alien_color:string="green"
if (alien_color == "green") {
    console.log("\nplayer just earn 5 point");
}else{console.log("player earn 10 pont");
}
//                                     step2
if(alien_color== "blue"){
    console.log("i am come from 2nd condition if statement");
    
}else{
    console.log("i am come from else condition");
}


//
//=======================================> Assignment 27<=====================================

              //step 1
let alien_color:string="green"
if(alien_color== "green"){
    console.log("\nPlayer just earn 5 points!");
}else if(alien_color == "yellow"){
    console.log("\nPlayer earn 10 points");
} else if(alien_color == "red"){
    console.log("\nPlayer earn 15 points");
}
//                                                  step2

alien_color="yellow"

if(alien_color== "green"){
    console.log("\nPlayer just earn 5 points!");
}else if(alien_color == "yellow"){
    console.log("\nPlayer earn 10 points");
} else if(alien_color == "red"){
    console.log("\nPlayer earn 15 points");
}
//                                                  step 3rd

 alien_color="red";

 if(alien_color== "green"){
    console.log("\nPlayer just earn 5 points!");
}else if(alien_color == "yellow"){
    console.log("\nPlayer earn 10 points");
} else if(alien_color == "red"){
    console.log("\nPlayer earn 15 points");
}
//
//=======================================> Assignment 28<=====================================


let age=20
//• If the person is less than 2 years old, print a message that the person is a baby.
if(age <=2){
    console.log("that person is a baby!");


    //• If the person is at least 2 years old but less than 4, print a message that the person is a toddler.

}else if(age > 2 && age < 2){
    console.log(" that person is a toddler!");


//• If the person is at least 4 years old but less than 13, print a message that the person is a kid.

}else if(age > 4 && age < 13){
    console.log("that person is a kid!");
    

    //• If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
}else if(age > 13 && age < 20){
    console.log("that person is a teanager!");
    

    //• If the person is at least 20 years old but less than 65, print a message that the person is an adult.
}else if(age < 20 && age > 65){
    console.log("that person is a Adult!");
    
    //• If the person is age 65 or older, print a message that the person is an elder.
}else{
    console.log("that the person is an elder");
    
}

//

//=======================================> Assignment 29<=====================================


//Favorite fruit
let favorite_fruits:string[]=["mango","orange","grapes"]

//• Write five if statements. Each should check whether a certain kind of fruit is in your array.
// If the fruit is in your array, the if block should print a statement, such as You really like bananas!

if(favorite_fruits.includes("mango")){
    console.log("such as you really like to mango ");
    
}
if(favorite_fruits.includes("orange")){
    console.log("such as you really like to orange ");
    
}
if(favorite_fruits.includes("grapes")){
    console.log("such as you really like to grapes ");
    
}
if(favorite_fruits.includes("kiwi")){
    console.log("such as you really like to kiwi ");
    
}
if(favorite_fruits.includes("apple")){
    console.log("such as you really like to apple ");
    
}

//

//=======================================> Assignment 30<=====================================

//
let usernames:string[]=["Hussain Ali","Ashu","Eshal","admin","Anas"]
usernames.forEach(username =>{
    if(username === "admin"){
        console.log(`Hello ${username} ,would you like to see a status report`);
}else{
    console.log(`Hello ${username}, thank you for logging in again`);
    
}
})
//

//=======================================> Assignment 31<=====================================



let usernames:string[]=["Hussain Ali","Ashu","Eshal","admin","Anas"]
if(usernames.length===0){
    console.log("your Array is empty We need to find some users");
    
}else{
    usernames.forEach(username =>{
        if(username === "admin"){

console.log(`Hello ${username} ,would you like to see a status report`);
} else console.log(`Hello ${username} ,thank you for logging in again`);

})

}


//

//=======================================> Assignment 32<=====================================


//• Make a list of five or more usernames called current_users.
let current_user: string[] = ["Ali", "Hussain", "Alex", "Mohsin", "Zain"]

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_user: string[] = ["Ahmed", "Ashu", "Hussain", "Zain"]

//• Loop through the new_users list to see if each new username has already been used.
//If it has, print a message that the person will need to enter a new username.
// If a username has not been used, print a message saying that the username is available.

for (let new_users of new_user) {
    let our_user: boolean = current_user.some(user => user.toLowerCase() === new_users.toLowerCase())
    if (our_user) {
        console.log(`Sorry This ${new_users} is not available `);

    } else {
        console.log(`The username ${new_users} is available`);

    }

}


//
//=======================================> Assignment 33<=====================================


//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.


//• Store the numbers 1 through 9 in a array.

let number:number[]=[1,2,3,4,5,6,7,8,9]

//• For Each Loop through the array.


//• Use an if-else chain inside the loop to print the proper ordinal ending for each number.
// Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.


number.forEach(num => {
    if (num === 1) {
        console.log(`${num}st`);
        
}else  if (num === 2) {
    console.log(`${num}nd`);
    
}else  if (num === 3) {
    console.log(`${num}rd`);
    
}else  if (num === 4) {
    console.log(`${num}th`);
    
}else  if (num === 5) {
    console.log(`${num}th`);
    
}else  if (num === 6) {
    console.log(`${num}th`);
    
}else  if (num === 7) {
    console.log(`${num}th`);
    
}else  if (num === 8) {
    console.log(`${num}th`);
    
}else  if (num === 9) {
    console.log(`${num}th`);
    
}else  if (num === 10) {
    console.log(`${num}th`);
    
}

})


//
//=======================================> Assignment 34<=====================================

//Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.


let pizza:string[]=["fajita","tikka","afghani tikka"]


////• Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza.
// For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.


for(let Pizza of pizza){
    console.log(`i like ${Pizza}`);
    
}

//• Add a line at the end of your program, outside the for loop, that states how much you like pizza.
// The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!


console.log("pizza is my fav fastfood item!");
*


//
//=======================================> Assignment 35<=====================================


//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list,
// and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal,
//such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!



let animals:string[]=["dog","cat","goat"]

for(let petanimal of animals){
    console.log(`\nSuch as a ${petanimal} would make a good pet`);
    
}
console.log(`\nthese ${animals} would make a good pett animal`);


//
//=======================================> Assignment 36<=====================================


//T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt.
//The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.


function make_shirt(size:string, message:string){
    console.log(`The shirt size is ${size} ${message}`);
    
}
let shirt = make_shirt("Medium","I love Artificial Intelligence")

 console.log(shirt);
 
 
 //=======================================> Assignment 37<=====================================
 
 //Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

function Make_shirt(size:string="Large", message:string="I love typescript"){
    console.log(`Make a ${size} size shirt print with ${message} on T-shirt`);
    
}
//calling a functiion with by default value
Make_shirt();

//Calling a function now with Medium size and default message
Make_shirt("Medium");

//Calling a function now with diffrent size and diffrent message
Make_shirt("small", "I love JS and python");



//=======================================> Assignment 38<=====================================

//Cities: Write a function called describe_city() that accepts the name of a city and its country.
//The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value.
//Call your function for three different cities, at least one of which is not in the default country.

function describe_city(city:string, country:string="pakistan"){
    console.log(`${city} is in ${country}`);
    
}


// calling a function with diffrent city deafult country
describe_city("Karachi");

// calling a function with diffrent city default country
describe_city("Hyderabad");

// calling a function with diffrent city and country
describe_city("new york", "france");


//=======================================> Assignment 39<=====================================

//City Names: Write a function called city_country() that takes in the name of a city and its country.
// The function should return a string formatted like this:


function city_country(city: string, country: string = "pakistan"): string {
    return `${city}  ${country}`
}

//Call your function with at least three city-country pairs, and print the value that’s returned.


console.log(city_country("Hyderabad"));
console.log(city_country("Karachi"));
console.log(city_country("lahore", "pakistan"));


//=======================================> Assignment 40<=====================================

//Album: Write a function called make_album() that builds a Object describing a music album.
// The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information.
// Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly.
//Add an optional parameter to make_album() that allows you to store the number of tracks on an album.
// If the calling line includes a value for the number of tracks, add that value to the album’s Object.
//Make at least one new function call that includes the number of tracks on an album.

function make_album(artist:string, album_Title:string, tracks?:number){
    let album:{
        album_artist:string,
        Title:string,
        tracks?:number
    } ={
        album_artist:artist,
        Title:album_Title,
    };
    if (tracks !== undefined) {
        album.tracks   =tracks
    }
    return album
}
// calling function 3 time diffrent Argument value
let album1 = make_album("Atif Aslam","sun sayya")
console.log(album1);



let album2 = make_album("Arijit singh", "yaadien")
console.log(album2);

// calling function with optional paarameter and argument
let album3= make_album("neha kakkar","besuri",3)
console.log(album3);


//=======================================> Assignment 41<=====================================

//Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(),
// which prints the name of each magician in the array.


let magicians: string[] = ["Dynamo", "Adele", "Beyonce", "Drake"];
function show_magician(magicians:string[]){
    magicians.forEach(magician =>{
        console.log(magician);
        
    }
)
}
show_magician(magicians)


//=======================================> Assignment 42<=====================================


//Great Magicians: Start with a copy of your program from Exercise 41.
// Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name.
// Call show_magicians() to see that the list has actually been modified.


let magicians1: string[] = ["Dynamo", "Adele", "Beyonce", "Drake"];
function show_magician(magicians: string[]){
    magicians.forEach(name => {console.log(name);
})
}


function make_great(magician:string[]){
    return  magician.map(name2 => `The Great ${name2}`)
}
console.log(make_great(magicians1));
console.log(show_magician(magicians1));

//=======================================> Assignment 43<=====================================

//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
// Because the original array will be unchanged, return the new array and store it in a separate array.
//Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.




 function show_magician(magicians: string[]){
     magicians.forEach(name => {console.log(name);
    })
}


function make_great(magician:string[]){
    return  magician.map(name2 => `The Great ${name2}`)
}

let magicians1: string[] = ["Dynamo", "Adele", "Beyonce", "Drake"];

let copy_array= magicians1.slice()
show_magician(copy_array)

let copy_great_magicians = make_great(copy_array)

show_magician(magicians1)
show_magician(copy_great_magicians)

//=======================================> Assignment 44<=====================================

 //Sandwiches: Write a function that accepts a array of items a person wants on a sandwich.
 //The function should have one parameter that collects as many items as the function call provides,
 //and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
 
 
 
 //define a function with rest parameter that accept multiple items
 function makeSandwich(...items:string[]){
    console.log("\nMaking a sandwich with the following items");
    
    items.forEach(multi_items => console.log(multi_items) )
    console.log("\nNow enjoy your sandwich \n");
    
}
//Call the function 3 times with diffrents number of arguments
makeSandwich("cheese", "chicken","sauces")
makeSandwich("cheese", "vegatables","bbq sauces")
makeSandwich("cheese", "beef","ktechup", "onion","butter")
*/
//=======================================> Assignment 45<=====================================
//Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name.
// It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs,
// such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function carInfos(manufacturer, modelName, ...otherInfos) {
    let carInfo = {
        manufacturer,
        modelName,
        ...Object.assign({}, ...otherInfos),
    };
    return carInfo;
}
let answer = carInfos("Honda", "Accord", { color: "blue" }, { features: ["Air Conditioning", "Cruise Control"] });
console.log(answer);
//                           =============== Completed =================== //
