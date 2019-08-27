// Creemos recrear una app para, que te cree una baraja de cartas!

function createLetterDefault(arr) {
    let arrO = [];
    let arrE = [];
    let arrB = [];
    let arrC = [];

    for (i = 1; i <= 13; i++) {


        if (i === 11) {
            arrO.push("J-O");
            arrE.push("J-E");
            arrB.push("J-B");
            arrC.push("J-C");
        } else if (i === 12) {
            arrO.push("CO");
            arrE.push("C-E");
            arrB.push("C-B");
            arrC.push("C-C");
        } else if (i === 13) {
            arrO.push("R-O");
            arrE.push("R-E");
            arrB.push("R-B");
            arrC.push("R-C");
        } else {
            arrO.push(i + "-O");
            arrE.push(i + "-E");
            arrB.push(i + "-B");
            arrC.push(i + "-C");
        }
    }
    arr.push(arrO);
    arr.push(arrE);
    arr.push(arrB);
    arr.push(arrC);
    return arr;
}



oros = [];
createLetterDefault(oros);

console.log(oros);