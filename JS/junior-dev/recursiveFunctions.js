/**
 * function that calls its self
 */

function salaryGrossPromptProcess() {
    let gross = prompt('Enter your Gross Salary');
    if (isNaN(gross) === false && gross !== '') {
        console.log(`You entered this amount ${gross} exiting`);
        return;
    }
    //alert(`Invalid Gross Salary, Please try again`);
    console.log(`Invalid Gross Salary, Please try again`);
    salaryGrossPromptProcess();
}
salaryGrossPromptProcess();

function factorial(n) {
    if (n < 1 || isNaN(n)) {
        return 'Enter a number greater than 1';
    } else if (n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}

console.log(factorial(5));
