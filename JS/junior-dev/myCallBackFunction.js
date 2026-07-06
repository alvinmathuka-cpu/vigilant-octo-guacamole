//will revisit IDU
const PI = 3.142;
const areaCircle = (r) => {
    return PI * (r * r);
};
const areaRectangle = (length, width) => length * width;
const areaTriangle = (base, height) => 0.5 * base * height;
function shape(shapeFunction, shapeName, side1, side2, side3) {
    console.log(`Function ${shapeFunction} and its a ${typeof shapeFunction}`);
    console.log(`Shape is ${shapeName} and its a ${typeof shapeName}`);
    console.log(`Side 1 ${side1} is ${typeof side1}`);
    console.log(`Side 2 ${side2} is ${typeof side2}`);
    console.log(`Side 3 ${side3} is ${typeof side3}`);
    const result = shapeFunction(side1, side2, side3);
    console.log(`for shape ${shapeName} area is ${result}`);
    return result;
}
