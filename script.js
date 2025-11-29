const displayA = document.querySelector('#display-a');
const displayB = document.querySelector('#display-b');

const buttonClear = document.querySelector('#button-clear');
const buttonDelete = document.querySelector('#button-delete');
const buttonsOperator = document.querySelectorAll('.button-operator');
const buttonEquals = document.querySelector('#button-equals');
const buttonsNumbers = document.querySelectorAll('.button-number');
const buttonDecimal = document.querySelector('#button-decimal');

let a = '';
let b = '';
let operator = '';
let register = '';
let result = '';
let equals = '';

function updateDisplay() {
    displayA.textContent = register;
    displayB.textContent = `${a} ${operator} ${b} ${equals}`;

    console.log(`a: ${a} op: ${operator} b: ${b} result: ${result} register: ${register}`);
}

updateDisplay();

buttonsNumbers.forEach((button) => {
    button.addEventListener('click', appendRegister);
});

buttonsOperator.forEach((button) => {
    button.addEventListener('click', selectOperator);
});

buttonEquals.addEventListener('click', operate);

function appendRegister() {
    register += this.textContent;
    updateDisplay();
}

function selectOperator() {
    if(!operator) {
        operator = this.textContent;
        a = register;
        b = '';
        register = '';
        updateDisplay();
    }
    else if(a && register) {
        operate();
    }
}

function operate() {
    b = register;
    let numA = Number(a);
    let numB = Number(b);
    switch (operator) {
        case '+':
            result = add(numA, numB);
            break;
        case '-':
            result = subtract(numA, numB);
            break;
        case '*':
            result = multiply(numA, numB);
            break;
        case '/':
            result = divide(numA, numB);
    }
    register = result;
    equals = ' = ';
    updateDisplay();
    operator = '';
    equals = '';
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}