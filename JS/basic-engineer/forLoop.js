function getNumbers() {
    let number1;
    let number2;

    // Number validation
    // ;; is basically infinity
    for (;;) {
        number1 = Number(prompt('Enter the first number (greater than 1):'));

        if (!isNaN(number1) && number1 > 1) {
            break;
        }

        alert('Invalid input! Enter a number greater than 1.');
    }

    for (;;) {
        number2 = Number(prompt('Enter the second number (greater than 1):'));

        if (!isNaN(number2) && number2 > 1) {
            break;
        }

        alert('Invalid input! Enter a number greater than 1.');
    }

    // Call the multiplication function
    multiplicationTable(number1, number2);
}

function multiplicationTable(num1, num2) {
    // Invalid parameters
    if (isNaN(num1) || isNaN(num2) || num1 <= 1 || num2 <= 1) {
        console.log('Invalid parameters.');
        return;
    }

    for (let a = num1; a >= 1; a--) {
        console.log(`-Table ${a}-`);

        for (let b = num2; b >= 1; b--) {
            console.log(`${a} * ${b} = ${a * b}`);
        }
    }
}

getNumbers();
