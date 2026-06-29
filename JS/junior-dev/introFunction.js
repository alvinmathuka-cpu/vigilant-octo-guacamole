/**
 * functions introduction
 * *Rules
 * has to be called to execute
 */

function timeAlert() {
    const date = new Date();
    alert(`time stamp: ${date.toISOString()}`);
}
//timeAlert();

function areaOfTriangle(base, height) {
    console.log(`base is ${base} its type ${typeof base}`);
    console.log(`height is ${height} its type ${typeof height}`);
    const area = 0.5 * base * height;
    console.log(
        `For traingle with base ${base} and height ${height} area is ${area}`
    );
}

//scenario 1

areaOfTriangle();

//scenario 2

areaOfTriangle(20);

//scenario 3

areaOfTriangle(20, 30);

//scenario 4

let base1 = 50;
let height1 = 60;
areaOfTriangle(base1, height1);

//scenario 5

let base2 = 'hello';
let height2 = true;
areaOfTriangle(base2, height2);
//console.log(`${typeof areaOfTriangle}`)
