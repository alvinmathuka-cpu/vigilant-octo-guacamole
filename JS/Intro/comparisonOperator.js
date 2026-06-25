/**
 * True or false evaluations
 * Equality ==
 * Strict Equality ===
 * inequality !=
 * Strict Inequality !==
 */

let numb1="12"
let numb2=12
//String should never equal a number. 
//Hence why normal equality is shunned.
//The same applies for the normal inequality.
//Hence the strict versions are preferred.
let strictEqual=numb1===numb2
console.log(`numb1=${numb1}===numb2=${numb2}
     Ans ${strictEqual} its type is ${typeof strictEqual}`)
let nonStrictEquality=numb1==numb2
console.log(`numb1=${numb1}==numb2=${numb2}
     Ans ${nonStrictEquality} its type is ${typeof nonStrictEquality}`)

let val1="Supper"
let val2="home"

let strictInequality=val1!==val2
console.log(`val1=${val1}!==val2=${val2}
     Ans ${strictInequality} its type is ${typeof strictInequality}`)

let Inequality=val1!=val2
console.log(`val1=${val1}!=val2=${val2}
     Ans ${Inequality} its type is ${typeof Inequality}`)
