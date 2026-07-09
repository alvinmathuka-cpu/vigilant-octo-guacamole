const car = {
    name: 'GR GT',
    brand: 'Toyota',
    top_speed: 320 + 'kph',
    engine_information: {
        cylinders: 8,
        hybrid: true,
    },
    manufacturer: {
        Mname: 'Toyota',
        aka: 'Gazoo Racing',
        country: 'Japan',
    },
    120: 100,
    fun_fact: 'has a GT3 version',
    is_it_a_classic: false,

    announce: function () {
        alert(`
            Brand: ${this.brand}
            Model: ${this.name}
            Speed: ${this.top_speed}
            Engine: ${this.engine_information}
            Manufacture: ${this.manufacturer}
            `);
    },
};

// console.log(`Car datatype ${typeof car}`);
// console.log(car);
// console.log('--using console.table--');
// console.table(car);

//accessing individual parts

//dot
console.log(`Name is ${car.name} and its type is ${typeof car.name}`);

//bracket
console.log(`Name is ${car['name']} and its type is ${typeof car['name']}`);

//dot
console.log(`Brand is ${car.brand} and its type is ${typeof car.brand}`);

//bracket
console.log(`Brand is ${car['brand']} and its type is ${typeof car['brand']}`);

//dot
console.log(
    `Top speed is ${car.top_speed} and its type is ${typeof car.top_speed}`
);

const v2 = car['top_speed'];

//bracket
console.log(`Top speed is ${v2} and its type is ${typeof v2}`);

//using , to avoid the objectObject error
//this is for objects specifically

//dot
console.log(
    `Engine is `,
    car.engine_information,
    `and its type is ${typeof car.engine_information}`
);

const v1 = car['engine_information'];

//bracket
console.log(`Engine is`, v1, `and its type is ${typeof v1}`);

//dot
console.log(
    `Manufacturer is`,
    car.manufacturer,
    `and its type is ${typeof car.manufacturer}`
);

const v3 = car['manufacturer'];

//bracket
console.log(`Manufacturer is`, v3, ` and its type is ${typeof v3}`);
