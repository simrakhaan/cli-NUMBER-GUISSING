#! /usr/bin/env node 
import inquirer from "inquirer";
//1) computer will generate a random number.
//2) user input for guessing number.
//3)compare the user and cpmputer generated number and show result.
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "please guess a number between 1-6:",
    },
]);
console.log(answers);
//conditional statement//
if (answers.userGuessedNumber === randomNumber) {
    console.log("congratualation! you guess a write number");
}
else {
    console.log("oh! you guess a wrong number");
}
;
