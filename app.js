// Creemos recrear una app para, que te cree una baraja de cartas!

function defaultDeck() {
    let arr = [];

    for (i = 1; i <= 13; i++) {


        if (i === 11) {
            arr.push("J-O");
            arr.push("J-E");
            arr.push("J-B");
            arr.push("J-C");
        } else if (i === 12) {
            arr.push("CO");
            arr.push("C-E");
            arr.push("C-B");
            arr.push("C-C");
        } else if (i === 13) {
            arr.push("R-O");
            arr.push("R-E");
            arr.push("R-B");
            arr.push("R-C");
        } else {
            arr.push(i + "-O");
            arr.push(i + "-E");
            arr.push(i + "-B");
            arr.push(i + "-C");
        }
    }

    return arr;
}

function customizedDeck(arrRemove) {
    let arrO = [];
    let arrE = [];
    let arrB = [];
    let arrC = [];

    for (i = 0; i < arrRemove.length; i++) {
        console.log(arrRemove[i]);





    }
    return arrRemove;
}

// let toma = [8, 9]
// let datos = customizedDeck(toma);

// console.log(datos);

// let basura = [1, 8, [3, 5]];
// console.log(basura.indexOf(3));

let dato = defaultDeck().indexOf("J-O");

console.log(dato);

// for (i = 0; i < oros.length; i++) {

//     for (j = 0; j < oros[i].length; j++)
//         console.log(oros[i][j]);
// }

// console.log(oros[1][1]);