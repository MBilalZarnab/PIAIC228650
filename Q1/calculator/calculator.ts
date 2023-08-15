import sumkaro from "./sum.js";
import subkaro from "./sub.js";
import mulkaro from "./mul.js";
import divkaro from "./div.js";
import inquirer from "inquirer";
import chalk from "chalk";


let swal = await inquirer.prompt([

{  name: "firstNum",
   type: "number",
   message: chalk.yellow("Enter first number : " )
},    


{  name: "secondNum",
   type: "number",
   message: chalk.yellow("Enter second number : " )
},    

{  name: "operator",
   type: "string",
   message: chalk.yellow("Which operation(+,-,*,/) : " )
}

])

    //============ ADDITION ========================

let jwab = 0;
if (swal.operator ==="+")
    jwab=sumkaro( swal.firstNum, swal.secondNum )

    //============ SUBTRACTION ================

else if (swal.operator ==="-")
    jwab=subkaro( swal.firstNum, swal.secondNum )

    //============ MULTIPLICATION ================

else if (swal.operator ==="*")
    jwab=mulkaro( swal.firstNum, swal.secondNum )
    
    //============ DIVISION ================

else if (swal.operator ==="/")
    jwab=divkaro( swal.firstNum, swal.secondNum )



    console.log("The Result is " , jwab)
