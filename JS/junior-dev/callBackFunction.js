/**
 * A function that takes one or more parameters as function
 */

//current time test named
function showCurrentTime() {
    const currentTime = new Date();
    console.log(`Named Current time is: ${currentTime}`);
}

setInterval(showCurrentTime, 3000);
//current time test anon
let currentTime = function () {
    const currentTime = new Date();
    console.log(`Anon Current time is: ${currentTime}`);
};

setInterval(currentTime, 3000);

//current time test
let currTime = () => {
    const now = new Date();
    console.log(`Arrow Current time is: ${now}`);
};

setInterval(currTime, 3000);
