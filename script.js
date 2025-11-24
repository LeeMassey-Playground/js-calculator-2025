const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', function() {
        alert();
    })
});

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}