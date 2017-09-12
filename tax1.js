//Variable declarations
var tipAmount;
var taxAmount;
var withTax;
var totalAmount;
var chargeAmount;
var tip = 0.15;
var tax = parseFloat(0.07);

//Set predefined values
// tip = parseFloat(0.15);
// tax = parseFloat(0.07);

//Ask user for original charge of food
chargeAmount = parseFloat(prompt("Enter charge of food:"));

//Calculate tax, tip, and total amounts
taxAmount = (chargeAmount * tax);
withTax = parseFloat(chargeAmount + taxAmount);
tipAmount = (withTax * tip);
totalAmount = parseFloat(tipAmount + withTax);

let showTip = tip*100;
let showTax = (tax*100).toFixed(0);
let taAmount = taxAmount.toFixed(2)
let tiAmount = tipAmount.toFixed(2)
let toAmount = totalAmount.toFixed(2) 


//Display calculaed answers
alert("With the sales tax of " + showTax + "%" + " you will pay: $" + taAmount + " in tax." +
"\nWith the tip of " + showTip + "%" + " you will pay: $" + tiAmount + " in tip."+
"\nIn total, you will pay: " + "$" + toAmount + " for your meal.");

