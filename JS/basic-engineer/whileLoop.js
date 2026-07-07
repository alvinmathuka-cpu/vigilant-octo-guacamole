let n = 0;
let condition = true;

while (condition) {
    console.log(`n is`, n);
    n = n + 1;
    if (n > 100) {
        condition = false;
    }
}

//Test
function countdown(n) {
    while (n > 0) {
        console.log(`${n}:`);
        n--;
    }
    console.log(`countdown complete`);
}
countdown(5);

//Assignment multiplication table based on input

function getNumbers() {
    let number1;
    let number2;

    //number validation

    while (true) {
        number1 = Number(prompt('Enter the first number (greater than 1):'));

        if (!isNaN(number1) && number1 > 1) {
            break;
        }

        alert('Invalid input! Enter a number greater than 1.');
    }

    while (true) {
        number2 = Number(prompt('Enter the second number (greater than 1):'));

        if (!isNaN(number2) && number2 > 1) {
            break;
        }

        alert('Invalid input! Enter a number greater than 1.');
    }

    //calling the multiplication function

    multiplicationTable(number1, number2);
}

function multiplicationTable(num1, num2) {
    //invalid parameters

    if (isNaN(num1) || isNaN(num2) || num1 <= 1 || num2 <= 1) {
        console.log('Invalid parameters.');
        return;
    }

    let a = num1;

    while (a >= 1) {
        //this is not needed

        console.log(`-Table ${a}-`);

        let b = num2;

        //calculation

        while (b >= 1) {
            console.log(`${a} * ${b} = ${a * b}`);
            b--;
        }

        //decrement of a
        a--;
    }
}

getNumbers();
