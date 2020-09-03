import { Calculator } from './calculator';
import { questionInt } from "readline-sync";
import { question } from "readline-sync";

const num1 = questionInt("Enter number-1:  ");
const operation = question("Enter operation:  ")
const num2 = questionInt("Enter number-2:  ");

const calculator = new Calculator({a: num1, b: num2}); 
//const calculator = new Calculator(num1, num2); 

console.log(calculator.calculate(operation));
