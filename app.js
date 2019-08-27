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
    let array = defaultDeck();

    for (i = 0; i < arrRemove.length; i++) {
        console.log(array.indexOf(arrRemove[i]));
        array.splice(array.indexOf(arrRemove[i]), 1);


    }
    return array;
}


let arrRemove = ["8-E", "9-B"];
let custom = customizedDeck(arrRemove);
console.log(custom);

// for (i = 0; i < arrRemove.length; i++) {
//     array.splice(array.indexOf(arrRemove[i]), 1)
//     console.log(array.indexOf(arrRemove[i]));
// }
// let toma = ["8-E", "9-B"]
// let datos = customizedDeck(toma);

// console.log(datos);

// let basura = [1, 8, [3, 5]];
// console.log(basura.indexOf(3));

// let dato = defaultDeck().indexOf("J-O");

// console.log(dato);

// for (i = 0; i < oros.length; i++) {

//     for (j = 0; j < oros[i].length; j++)
//         console.log(oros[i][j]);
// }

// console.log(oros[1][1]);