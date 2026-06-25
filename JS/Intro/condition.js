/**
 * condition operators
 * if,else if and else
 * syntax:
 *  if(<condition goes>){}
 * if conditon is truthy then the code in {} is executed 
 * and vice versa
 */

//scenario 1

let isOnline="yes"

if (isOnline) {
    console.log(`Scenario 1 it run`)
}

//scenario 2

let isOffline=0

if (isOffline) {
    console.log(`Scenario 2 it run`)
}

//scenario 3

if (true) {
    console.log(`Scenario 3 it run`)
}

//scenario 4

if (false) {
    console.log(`Scenario 4 it run`)
}

//scenario 5

if (10>20) {
    console.log(`Scenario 5 it run`)
}

//scenario 6

if (20>10) {
    console.log(`Scenario 6 it run`)
}