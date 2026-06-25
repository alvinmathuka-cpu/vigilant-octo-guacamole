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
const personalRelief = 2400;
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

//NSSF
let NSSF = null;
let RawNSSF = null;
let NSSFTier = null;

if (grossMonthlySalary<= 9000) {
    RawNSSF = grossMonthlySalary*0.06;
    NSSFTier = `Tier 1`;
}else if (grossMonthlySalary<108000) {
    RawNSSF = 9000*0.06
    +(grossMonthlySalary-9000)*0.06;
    NSSFTier = `Tier 2`;
} else {
    RawNSSF = 6480;
    NSSFTier = `Tier 3`;
}
NSSF = RawNSSF;
console.log(`NSSF = ${NSSF} and Tier = ${NSSFTier}`)

//Taxable Income

let taxableIncome = grossMonthlySalary-NSSF;

//Paye

let paye = null;
let tier = null;

if (taxableIncome >= 0 && taxableIncome <= 24000){
    paye = taxableIncome*0.1;
    tier = `0-24,000`;
}else if(taxableIncome <= 32333){
    paye = 24000*0.1
    +(taxableIncome-24000)*0.25;
    tier = `24,001-32,333`;
}else if(taxableIncome <= 500000){
    paye = 24000*0.1
    +8333*0.25
    +(taxableIncome-24000-8333)*0.3;
    tier = `32,334-500,000`;
}else if(taxableIncome <= 800000){
    paye = 24000*0.1
    +8333*0.25
    +467667*0.3
    +(taxableIncome-467667-24000-8333)*0.325;
    tier = `500,001-800000`;
}else if(taxableIncome > 800000){
    paye = 24000*0.10
    +8333*0.25
    +467667*0.30
    +300000*0.325
    +(taxableIncome - 800000)*0.35;
    tier = `>=800000`;
}
console.log(`Taxable Income = ${taxableIncome}`)
console.log(`paye = ${paye} Paye tier = ${tier}`)

