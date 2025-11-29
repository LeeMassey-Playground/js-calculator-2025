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

    buttonsNumbers.forEach((button) => {
        button.addEventListener('click', appendRegister);
    });

    buttonsOperator.forEach((button) => {
        button.addEventListener('click', selectOperator);
    });

    buttonEquals.addEventListener('click', operate);

    buttonClear.addEventListener('click', clear);

    buttonDelete.addEventListener('click', backspace);

    document.addEventListener('keydown', handleKeydown);

    function handleKeydown(e) {
        const key = e.key;

        if ((key >= '0' && key <= '9') || key === '.') {
            clickMatchingButton(buttonsNumbers, key);
            return;
        }

        if ('+-*/'.includes(key)) {
            e.preventDefault();
            clickMatchingButton(buttonsOperator, key);
            return;
        }

        if (key === 'Enter' || key === '=') {
            e.preventDefault();
            buttonEquals.click();
            return;
        }

        if (key === 'Escape' || key === 'C' || key === 'c') {
            buttonClear.click();
            return;
        }

        if (key === 'Backspace') {
            e.preventDefault();
            buttonDelete.click();
            return;
        }
    }

    function clickMatchingButton(buttons, key) {
        buttons.forEach((button) => {
            if (button.textContent === key) {
                button.click();
            }
        });
    }

    function debug(where) {
        console.log(`Debug ${where}: a: ${a} op: ${operator} b: ${b} result: ${result} register: ${register}`);
    }

    function updateDisplay() {
        if (result) {
            equals = ' = ';
        }

        displayA.textContent = register;
        displayB.textContent = `${a} ${operator} ${b} ${equals}`;
    }


    function appendRegister() {
        if (result) {
            clear();
        }

        if (register.includes('.') && this.textContent === '.') {
            return;
        }

        else if (!register && this.textContent === '.') {
            register += '0';
        }

        else if (register.length === 1 && (register.includes('0') && this.textContent !== '.')) {
            register = '';
        }

        if (register.length < 15) {
            register += this.textContent;
        }

        updateDisplay();
    }

    function selectOperator() {

        if (a !== '' && operator !== '' && register !== '' && !isNaN(Number(register))) {
            operate();
        }

        if (register) {
            result = '';
            a = register;
            register = '';
            operator = this.textContent;
            updateDisplay();
        }

        if (a && operator) {
            operator = this.textContent;
            updateDisplay();
        }
    }

    function operate() {
        if (!result && a && operator && register) {
            if (!(operator === '/' && Number(register) === 0)) {
                b = register;
                let numA = Number(a);
                let numB = Number(b);

                switch (operator) {
                    case '+':
                        result = Number(add(numA, numB).toPrecision(15));
                        break;
                    case '-':
                        result = Number(subtract(numA, numB).toPrecision(15));
                        break;
                    case '*':
                        result = Number(multiply(numA, numB).toPrecision(15));
                        break;
                    case '/':
                        result = Number(divide(numA, numB).toPrecision(15));
                }

                register = result.toString();
                
                updateDisplay();

                a = '';
                b = '';
                operator = '';
                equals = '';
            }

            else {
                alert('Cannot divide by 0!!!');
                register = '';
                updateDisplay();
            }
        }
    }

    function clear() {
        a = '';
        b = '';
        operator = '';
        register = '';
        result = '';
        equals = '';

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