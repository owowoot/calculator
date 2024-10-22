// Your calculator is going to contain functions for all of the basic math operators you typically find on calculators, 
// so start by creating functions for the following items and testing them in your browser’s console.
// add
function addition(num1, num2) {
    return num1 + num2;
}
// subtract
function subtraction(num1, num2) {
    return num1 - num2;
}
// multiply
function multiplication(num1, num2) {
    return num1 * num2;
}
// divide
function division(num1, num2) {
    if (num2 === 0) {
        return "ERROR: Division by 0"
    }
    return num1 / num2;
}
// A calculator operation will consist of a number, an operator, and another number. For example, 3 + 5. 
// Create three variables for each of the parts of a calculator operation. Create a variable for the first number, the operator, 
// and the second number. You’ll use these variables to update your display later.
let num1 = ''
let num2 = ''
let op = ''

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(num1, num2, op) {
    switch (op) {
        case '+':
            return addition(num1, num2);
        case '-':
            return subtraction(num1, num2);
        case '*':
            return multiplication(num1, num2);
        case '/':
            return division(num1, num2);
        default:
            return null;
    }
}