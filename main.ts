#! /usr/bin/env node

import inquirer from "inquirer"

let myBalance = 10000; //Dollar
const myPin = 2323;

let pinAnswer = await inquirer.prompt([{name : "pin", message : "enter your pin", type : "number"}]);

if(pinAnswer.pin === myPin){
    console.log("correct pin code:");

    let operationAnswer= await inquirer.prompt([{name : "operation", message: "please select option", type : "list", choices : ["withdraw", "fast cash", "check balance"]}]);

    
    if(operationAnswer.operation === "withdraw"){
        let amountAnswer = await inquirer.prompt([{name : "amount", message: "enter your amount", type : "number"}]);
        if(amountAnswer.amount > myBalance){
            console.log("insufficient balance")
        }
        else{ myBalance -= amountAnswer.amount;
            console.log(`your remaining balance is: ${myBalance}`)
        }
    }
    else if(operationAnswer.operation === "fast cash"){
        let fast = await inquirer.prompt([{name: "fastcash", message: "Select the amount which you withdraw", type: "list", choices: [1000, 2000, 5000, 10000]}]);
        myBalance -= fast.fastcash;
        console.log(`you have successfully withdraw ${fast.fastcash} \n your remaining balace is ${myBalance}`)
    }
    else if(operationAnswer.operation === "check balance"){
        console.log(`your balance is: ${myBalance}`)
    }
}
else{
    console.log("incorrect pin code:")
}

