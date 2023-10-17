let num1;
let num2;
let operator;

function add(operator, a, b) {
    return a + b;
}

function subtract(operator, a, b) {
    return a - b;
}

function multiply(operator, a, b) {
    return a * b;
}

function divide(operator, a, b) {
    return a / b;
}

function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return "Invalid operator";
    }
}

function handleInput(value) {
    let display = document.getElementById("display")
    display.value = value;
}



