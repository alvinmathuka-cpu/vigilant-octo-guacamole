const sallaryGross=50000;
console.log("Gross salary is ",sallaryGross)
const paye=sallaryGross*0.16
console.log("For gross sallary of ",sallaryGross,"Paye is",paye)
const nhif=2500
console.log("Nhif deduction ",nhif)
const sha=2500
console.log("SHA is ",sha)
const totalDeductions=paye+nhif+sha
console.log("Total deduction are ",totalDeductions)
const netSallary=sallaryGross-totalDeductions
console.log("Your net sallary is ",netSallary)