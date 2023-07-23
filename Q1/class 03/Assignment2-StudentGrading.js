var promptSync = require("prompt-sync")();
var userName = promptSync("Enter your name : ");
var englishMarks = Number(promptSync("Enter English Marks :"));
var mathMarks = Number(promptSync("Enter Math Marks :"));
var biologyMarks = Number(promptSync("Enter Biology Marks :"));
var physicsMarks = Number(promptSync("Enter Physics Marks :"));
var chemistryMarks = Number(promptSync("Enter Chemistry Marks :"));
var totalMarks = englishMarks + mathMarks + biologyMarks + physicsMarks + chemistryMarks;
var grade = "";
var percentage = ((totalMarks / 500) * 100);
if (percentage > 90)
    grade = "A+";
else if (percentage > 70)
    grade = "B";
else if (percentage > 50)
    grade = "C";
else if (percentage > 40)
    grade = "D";
else
    grade = "F";
console.log("English Marks---------------------------".concat(englishMarks));
console.log("Math Marks------------------------------".concat(mathMarks));
console.log("Biology Marks---------------------------".concat(biologyMarks));
console.log("Physics Marks---------------------------".concat(physicsMarks));
console.log("Chemistry Marks-------------------------".concat(chemistryMarks));
console.log("Total Marks-----------------------------".concat(totalMarks));
console.log("Percentage------------------------------".concat(percentage.toPrecision(4)));
console.log("Your Grade is---------------------------".concat(grade));
