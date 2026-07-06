let name = 'Alice';

function sayMyName() {
    let name = 'Bob';
    console.log('Line 4:', name);

    if (true) {
        let name = 'Charlie';
        console.log('Line 8:', name);
    }

    console.log('Line 11:', name);

    // let name = "David";
}

sayMyName();

console.log('Line 17:', name);
