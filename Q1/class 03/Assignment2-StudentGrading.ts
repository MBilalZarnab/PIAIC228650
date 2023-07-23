const promptSync = require("prompt-sync")();
let userName = promptSync("Enter your name : ");
let englishMarks = Number (promptSync("Enter English Marks :"));
let mathMarks = Number (promptSync("Enter Math Marks :"));
let biologyMarks = Number (promptSync("Enter Biology Marks :"));
let physicsMarks = Number (promptSync("Enter Physics Marks :"));
let chemistryMarks = Number (promptSync("Enter Chemistry Marks :"));
let totalMarks = englishMarks+mathMarks+biologyMarks+physicsMarks+chemistryMarks;
let grade = "";

let percentage = ((totalMarks / 500) * 100)

if(percentage>90)
    grade = "A+";
else if (percentage > 70)    
    grade = "B";
else if (percentage > 50)    
     grade = "C";
else if (percentage > 40)    
    grade = "D";
else 
    grade = "F";



console.log(`English Marks---------------------------${englishMarks}`)
console.log(`Math Marks------------------------------${mathMarks}`)
console.log(`Biology Marks---------------------------${biologyMarks}`)
console.log(`Physics Marks---------------------------${physicsMarks}`)
console.log(`Chemistry Marks-------------------------${chemistryMarks}`)


console.log(`Total Marks-----------------------------${totalMarks}`)
console.log(`Percentage------------------------------${percentage.toPrecision(4)}`);
console.log(`Your Grade is---------------------------${grade}`);

          
          


      
