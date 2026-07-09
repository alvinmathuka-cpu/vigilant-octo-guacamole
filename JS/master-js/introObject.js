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
