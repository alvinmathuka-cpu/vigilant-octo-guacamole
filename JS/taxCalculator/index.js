/**
 * prompt("")
 * 
 * checking if is a number:
 * is NaN
 * type convert to Number
 * +<>
 */
//stay here until he has entered a correct number
let grossMonthlySalary = null;
while (true) {
    let gross = prompt("Enter your Gross Salary");
    if (!isNaN(gross)) {
        gross= Number(gross);
        if (gross > 0) {
            grossMonthlySalary=gross;
            break;
        }
    }
    alert(`Invalid must be greater than 0`);
}
console.log(`Your gross is ${grossMonthlySalary} its type is ${typeof grossMonthlySalary}`);

//Paye
let paye = null;
let tier = null;

if (grossMonthlySalary >= 0 && grossMonthlySalary <= 24000){
    paye = grossMonthlySalary*0.1;
    tier = `0-24,000`;
}else if(grossMonthlySalary >= 24001 && grossMonthlySalary <= 32333){
    paye = grossMonthlySalary*0.25;
    tier = `24,001-32,333`;
}else if(grossMonthlySalary >= 32334 && grossMonthlySalary <= 500000){
    paye = grossMonthlySalary*0.3;
    tier = `32,334-500,000`;
}else if(grossMonthlySalary >= 500001 && grossMonthlySalary <= 800000){
    paye = grossMonthlySalary*0.325;
    tier = `500,001-800000`;
}else if(grossMonthlySalary >= 800000){
    paye = grossMonthlySalary*0.35;
    tier = `>=800000`;
}
console.log(`paye = ${paye} tier = ${tier}`)