console.log("JavaScript File is linked");

let temperature = 25;

//basic if statement 
if(temperature > 30) {
    console.log("Time to crank the AC!")
}

//if else statement 
let age = 18;

if(age < 19) {
    console.log("Sorry, you are not old enough to enter bar");
} else {
  console.log("You are 19 or older, so come on it");
}

// if, else if, else 
let grade = 90;

if(grade >= 90){
    console.log("A+");
}else if(grade >= 80) {
    console.log("A");
}else if(grade >=70) {
    console.log("B");
}else {
    console.log("Failing Grade");
}

//multiple if statement (Can all evaluate to true)

let mathGrade = 90;

if(mathGrade >= 90){
    console.log("Math grade is A+");
}

if(mathGrade >= 80){
    console.log("Math grade is A");
}

if(mathGrade >= 70){
    console.log("Math grade is B");
}