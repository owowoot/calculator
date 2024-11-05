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
let num1 = '';
let num2 = '';
let op = '';
let result = '';

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
function operate(num1, num2, op) {
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);
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

const display = document.querySelector('.display');
const numberButtons = document.querySelectorAll('.number');
const operatorButtons = document.querySelectorAll('.operator');
const equalsButton = document.querySelector('.equals');
const clearButton = document.querySelector('.clear');
// Update display on button call
numberButtons.forEach(button => {
    button.addEventListener('click', function () {
        if (display.textContent === '0' || display.textContent === num1) {
            display.textContent = '';
        }
        display.textContent += button.textContent;
    });
});
// Perform operations
operatorButtons.forEach(button => {
    button.addEventListener('click', function () {
        num1 = display.textContent;
        op = button.textContent;
        display.textContent = num1;
    })
})
// Handle Equals
equalsButton.addEventListener('click', function () {
    if (num1 && op) {
        num2 = display.textContent;
        result = operate(num1, num2, op);
        if (typeof result === 'number') {
            result = Math.round(result * 100) / 100;
        }
        display.textContent = result;
        num1 = result;
        op = '';
        num2 = '';
    }

})

// Handle clear
clearButton.addEventListener('click', function () {
    num1 = '';
    num2 = '';
    op = '';
    result = '';
    display.textContent = '0';
});