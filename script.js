const numberButtons = document.querySelectorAll('.button-number');
const operatorButtons = document.querySelectorAll('.button-operator');
const equalsButton = document.querySelector('#button-equals');
const displayCurrent = document.querySelector('#current-result');
const displayPrevious = document.querySelector('#previous-result');

let currentOperation = '';
let previousOperation = '';
let a = '';
let b = '';
let operator = '';
let result = '';

let displayCurrentText = '';
let displayPreviousText = '';

numberButtons.forEach((button) => {
    button.addEventListener('click', function() {
        if(!operator) {
            a += this.textContent;
            currentOperation = a;
        }
        else if(!result) {
            b += this.textContent;
            currentOperation =  b;
        }

        updateDisplay();
    })
});

operatorButtons.forEach((button) => {
    button.addEventListener('click', function() {
        if(!operator) {
            operator = this.textContent;
            previousOperation += currentOperation + ' ' + operator + ' ';
            currentOperation = '';
            updateDisplay();
        }
    })
});

equalsButton.addEventListener('click', function() {
    if(!result) {
        result = operate(a, b);
        previousOperation += currentOperation;
        currentOperation = '';
        operator = '';
        updateDisplay();
    }
});

function updateDisplay() {
    if(result) {
        currentOperation = result;
    }
    displayPrevious.textContent = previousOperation;
    displayCurrent.textContent = currentOperation;
}

function operate(a, b) {
    switch(operator) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case '*':
            return multiply(a, b);
        case '/':
            return divide(a, b);
    }
}

function add(x, y) {
    return Number(x) + Number(y);
}

function subtract(y, x) {
    return Number(x) - Number(y);
}

function multiply(x, y) {
    return Number(x) * Number(y);
}

function divide(x, y) {
    return Number(x) / Number(y);
}

updateDisplay();