/**
 * if can be used on its own
 * is independent i.e. one statement does not depend on another
 */

let age=prompt("Enter your age:")
alert(`You entered ${age}`)

//age=27
//27>10:true
if(age>10){
    alert(`You are a baby.`)
}
//27>13=true
if(age>13){
    alert(`You are a teen`)
}

//27>18=true
if(age>18){
    alert(`You are a adult`)
}

//27>27=false
if(age>27){
    alert(`Best age for marriage`)
}

//27>45=false
if(age>45){
    alert(`Best age for retirement`)
}

//27>50=true
if(age>50){
    alert(`You are an ancestor`)
}