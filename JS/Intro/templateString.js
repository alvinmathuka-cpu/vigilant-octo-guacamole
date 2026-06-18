let firstName="John"
let secondName="Jones"
let age=45
let address="Juja County"

let userDetails=firstName+" "+secondName+" is "+age+" years old"+" he stays at "+address
console.log(userDetails)
console.log("User details is ",typeof userDetails)

//Template string using Backticks 
let userDetails2=`${firstName} ${secondName} is ${age} years old and he stays at ${address}`;
console.log(userDetails2)
console.log(`${firstName} ${secondName} is ${age} years old and he stays at ${address}`)
console.log(`${20+25}`)