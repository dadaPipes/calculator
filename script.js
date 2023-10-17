let num1 = "";
let num2 = "";
let operator = "";
let display = document.getElementById("display");

function operate() {
    result = "";

    switch (operator) {
        case '+':
            result = add(num1, num2); 
            break;
        case '-':
            result = subtract(num1, num2); 
            break;
        case '*':
            result = multiply(num1, num2); 
            break;
        case '/':
            result = divide(num1, num2); 
            break;
        default:
            result = "Invalid operator";
            break;
    }

    num1 = parseFloat(result).toFixed(8); // rounds result with long decimals so that they don’t overflow the 'display'.
    num1 = parseFloat(num1);              // Removing trailing zeros
    display.value = num1;
    num2 = "";


    console.log("num1: " + num1);
    console.log("operator: " + operator);
}

function handleOperand(value) {
    if (operator === "") 
    { 
        num1 += value;
        console.log("num1: " + num1);
        display.value = num1;
        return display.value;  
    }
    else
    { 
        num2 += value;
        console.log("num2: " + num2); 
        display.value = num2;
        result = false;
        return display.value;
    }
}

function handleOperator(value) {
    operator = value;
    console.log("operator: " + operator);
}

function clearDisplay() {
    display.value = "";
    num1 = "";
    num2 = "";
    operator = "";
}

function add(a, b) {
    return Number(a) + Number(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (a === "0" || b === "0") {
        alert("Whoops! Looks like you've discovered the secret of creating a black hole. Division by zero is a big no-no in this universe");
    }
    return a / b;
}