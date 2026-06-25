/**
 * Truthy or Falsey
 * If you know something is not falsey then it is truthy
 * falsey examples:
 * false
 * 0
 * -0
 * null
 * undefined
 * '' -> empty string
 * NaN -> not a number
 * Anything that is not falsey is truthy
 * truthy|| falsey -> truthy
 */

let userName1="John Mwangi" //truthy
let userName2=0 //falsey

let activeUserName=userName2 || userName1
//activeUserName=>
//
console.log(activeUserName)

let bothUserNameOk=userName1&&userName2
console.log(bothUserNameOk) //truthy or falsey