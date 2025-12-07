// Chapter 1 -------------------------------------

alert("Welcome to JavaScript World!");
alert("Hello again! \n How’s your coding journey?");
alert("JavaScript says: Let's make the web alive!");

// Chapter 2 -----------------------------------

alert("My name is Daniyal!");
alert("My Age Is 18!");
alert("Learning web Dev HTML, CSS, and JS!");

alert("Coding\nCodin\nCodi\nCod\nCo\nC");

alert("Stay connected at: daniyalsuleman61@gmail.com");

alert("Smart work beats hard work every time!");

alert("Yes! This is JavaScript!");

alert("Fun fact: I started coding before breakfast!");

// Chapter 3

alert("I Have Started Coding!");

alert("I was born to code — somewhere around 2007!");

alert("Daniyal just ordered 2 pair of amazing Shoes from EcomStore!");

// Chapter 4 -------------------------------------

// legal variable
let userName
let adminName
let myName
let user123

// Illegal variable
let if
let else
let elseIf
let class
let this

q no. 3
b)sighs and letters and numbers
c)sighs and letters and numbers
d)case sensitive
e)Js keyword

// Chapter 5 ------------------------------
// question 1
let num1 = "1"
let num2 = "2"
let result = num1 + num2

// question 2

let num1 = "1"
let num2 = "2"
let result = num1 - num2

let num1 = "1"
let num2 = "2"
let result = num1 * num2

let num1 = "1"
let num2 = "2"
let result = num1 / num2

let num1 = "1"
let num2 = "2"
let result = num1 % num2

// question 4

let ticketPrice = "600"
let fiveTicket = ticketPrice * 5

// question 5

let randomNum = prompt("Enter Any Number", "5")
let answer = 

console.log(randomNum "*" 1 "=" answer)


// Chapter 5 ------------------------------
// Question no 7
let Qualification = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.PHIL", "PhD"]
console.log(Qualification)

// Chapter 12-13 ------------------------------
// Question no 1

let user_character=prompt("Enter a number or string");
// console.log(user_character.charCodeAt());

if(!isNaN(user_character)){
    console.log("A number");
}else if(user_character.charCodeAt()>=65 && user_character.charCodeAt() <=90){
    console.log("Capital Alphabet");
  } else if(user_character.charCodeAt()>=97 && user_character.charCodeAt() <=122){
    console.log("Small Alphabet");
}else console.log("Special Character");

// Question no 2
let usernumber1=+prompt("Enter number one");
let usernumber2=+prompt("Enter number two");
let greater;
  if(usernumber1 >  usernumber2){
    greater="Number one is greater than 2"
    console.log(greater);
}else if(greater== undefined){
    greater="Number two is greater than 1"
    console.log(greater);
}  
if(usernumber1==usernumber2){
     console.log("Both number are equal");
};



// Question no 3
let user_guess=+prompt("Tell a number I will check whether its positive or negative or zero");
if(user_guess==0){
    console.log("The number is zero");
}else if(user_guess <0){
    console.log("The number is negative");
} else if(user_guess>0){
    console.log("The number is positive");
}

// Question no 4
let user_vovel=prompt("Enter a character to check whether its a vovel or not");
user_vovel=user_vovel.toLowerCase();
if(user_vovel == "a" || user_vovel == "e" || user_vovel == "i" || user_vovel == "o" || user_vovel == "u"){
    
    console.log("The given character is a vovel");
} else if(user_vowel.length == 2){
    console.log("Please enter single character");
}else{
    console.log("Given character is not a vovel");

}
// Question no 5
let password="12345";
let userpassword=prompt("Guess the password");
if(userpassword=="" || userpassword == null){
    console.log("Please enter password");
}else if(userpassword==password){
    console.log("You guesed correctly!");
} else{
    console.log("Incorrect Password");   
};

// Question no 6
let greeting;
let hour = 13;
if (hour < 18){
    greeting="Good Day";
    console.log(greeting);
}else{ 
    greeting="Good evening";
    console.log(greeting);
}

// Question no 7
let time=prompt("Enter time in 24hours");
if(time >="0000" &&  time <1200) console.log("Good Morning!");
else if(time >= 1200 &&  time < 1700) console.log("Good Afternoon!");
else if(time >=1700 &&  time <2100) console.log("Good Evening!");
else if(time >=2100 &&  time <2359) console.log("Good Night!");

-----------------------------------------------
//Chapter 17-20 -------------------------

//Question no 1
let multiarray = [
    ["Daniyal", 85],

    ["Gulzar", 91],

    ["Taha", 80]
];

//Question no 2
let multiarray_matrix = [
    [0, 3, 2, 1],
    [2, 0, 1, 1],
    [2, 1, 0, 1]
];

//Question no 3
for (let i = 1; i <= 10; i++) {
    console.log(i);
};

//Question no 4
// let tablenum = +prompt("Enter the number of the multiplication table you want!");
// let tablelenght = +prompt("Enter the table lenght");
// console.log(`Multiplication table of ${tablenum} Lenght ${tablelenght}`);
// for (let i = 1; i <= tablelenght; i++) {
//     console.log(`${tablenum} x ${i} = ${tablenum * i}`);
// };

//Question no 5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
for (let i = 0; i < fruits.length; i++) {
    console.log(`Element at index ${i} is ${fruits[i]}`);
};

//Question no 6
//Part a
for (let i = 0; i <= 15; i++) {
    console.log(`Counting ==> ${i}`);
};

//Part b
for (let i = 10; i >= 1; i--) {
    console.log(`Reverse Counting ==> ${i}`);
};

//Part c
for (let i = 0; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`Even Numbers ==> ${i}`);
    }
};

//Part d
for (let i = 0; i <= 20; i++) {
    if (i % 2 == !0) {
        console.log(`Odd Numbers ==> ${i}`);
    };
};

//Part e
for (let i = 1; i <= 20; i++) {
    if (i % 2 == 0) {
        console.log(`Series Numbers ==> ${i}k`);
    };
};

//Question no 7
let flag = false;
let bakeryitems = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchuser = prompt("Enter your desired bakery item!");
for (let i = 0; i < bakeryitems.length; i++) {
    if (searchuser == bakeryitems[i]) {
        console.log("Available in the bakery!");
        flag = true;
         
    };
}
if (flag == false) {
    console.log("Not Available in the bakery!");
};

//Question no 8
let numbers=[24,53,78,91,12];
numbers.sort((a,b)=>b-a);
console.log(`Largest number in the array is ${numbers[0]}`);

//Question no 9
numbers.sort((a,b)=>a-b);
console.log(`Smallest number in the array is ${numbers[0]}`);

//Question no 10

for (let i = 1; i <=100; i++) {
  if(i % 5 == 0){
     console.log(`Multiple of 5 ==> ${i}`);
  }
};

