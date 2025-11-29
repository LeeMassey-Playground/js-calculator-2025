function calculator() {

    const displayA = document.querySelector('#display-a');
    const displayB = document.querySelector('#display-b');

    const buttonClear = document.querySelector('#button-clear');
    const buttonDelete = document.querySelector('#button-delete');
    const buttonsOperator = document.querySelectorAll('.button-operator');
    const buttonEquals = document.querySelector('#button-equals');
    const buttonsNumbers = document.querySelectorAll('.button-number');

    let a = '';
    let b = '';
    let operator = '';
    let register = '';
    let result = '';
    let equals = '';

    function debug() {
        console.log(`a: ${a} op: ${operator} b: ${b} result: ${result} register: ${register}`);
    }

    function updateDisplay() {
        if (result) {
            equals = ' = ';
        }

        displayA.textContent = register;
        displayB.textContent = `${a} ${operator} ${b} ${equals}`;

        debug();
    }

    buttonsNumbers.forEach((button) => {
        button.addEventListener('click', appendRegister);
    });

    buttonsOperator.forEach((button) => {
        button.addEventListener('click', selectOperator);
    });

    buttonEquals.addEventListener('click', operate);

    buttonClear.addEventListener('click', clear);

    buttonDelete.addEventListener('click', backspace);

    function appendRegister() {
        if (result) {
            clear();
        }

        if (register.includes('.') && this.textContent === '.') {
            return null;
        }

        else if (!register && this.textContent === '.') {
            register += '0';
        }

        else if (register.length === 1 && (register.includes('0') && this.textContent !== '.')) {
            register = '';
        }

        register += this.textContent;

        updateDisplay();
    }

    function selectOperator() {
        if (a && operator && register) {
            result = '';
            operate();
        }

        if (register) {
            result = '';
            a = register;
            register = '';
            operator = this.textContent;
            updateDisplay();
        }
    }

    function operate() {
        if (!result && a && operator && register) {
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

            register = result.toString();
            
            updateDisplay();

            a = '';
            b = '';
            operator = '';
            equals = '';

            debug();
        }
    }

    function clear() {
        a = '';
        b = '';
        operator = '';
        register = '';
        result = '';
        equals = '';

        debug();
        updateDisplay();
    }

    function backspace() {
        register = register.slice(0, -1);
        displayA.textContent = register;
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

}

calculator();