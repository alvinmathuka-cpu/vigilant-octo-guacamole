const fs = require('fs'); //nodejs file system

//Testing out AppendFile
function testAppendFile() {
    const fileData = `Hello world`;
    const cb = (error) => {
        if (error) {
            console.log('File creation failed');
            console.log(error);
        }
    };
    fs.appendFile('testfile.txt', fileData, cb);
}
testAppendFile();

//Testing out WriteFile
function testingfs() {
    const fileName = `${Date.now()} + .txt`;
    let Data = ``;
    const cb = (error) => {};

    for (let a = 1; a <= 10000; a++) {
        Data = Data + `Awimbawe ${a}\n`;
    }
    //appendFile, writeFile
    fs.writeFile(fileName, Data, cb);
}

//This loop dictates how many times the file creation function loops
function main() {
    for (let b = 0; b < 5; b++) {
        testingfs();
    }
}

main();
