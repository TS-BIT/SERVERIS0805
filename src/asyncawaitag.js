
//metodas then sukuria promisa, kurio baigtis priklauso nuo pradinės f-j
/*
let p1 = sumaAsync(1, 3).then(
    val => console.log(val),
    return => 
);
*/

// visos f-j grazina reiksme undifinde 

// jei f-j async ji grazina promisa

// await islukstena sulaukia kol promisas bus isprestas ir grazina reiksme



// p1 bet kuriuo atveju bus resolventas

// settled: promise galutinins statutas

// resolved/fulfilled: teigiamas promise statusas

// rejected: neigiamas statutas
/*
async function main() {
    console.log("start");
    let rez;
    let param1;
    let param2;
    kvadratas(3).then(
    val => {
    param1 = val;
    return kvadratas(4)
    }
    ).then (
    val => {
    param2 = val;
    return param1 + param2;
    }
    ).then(
    val => {
    rez = val;
    console.log(rez);
    console.log("finish");
    }
    );
    // let rez = await kvadratas(3) + await kvadratas(4);
    // console.log(rez);
    // console.log("finish");
    }
    main();
    */


    // turit masyva su failu pavadinimais
// perskaityti visus failus is eils ir rezultatus sudeti i viena kintamaji
// jei kuris nors failas nerastas, prie rezultato pridedam "[pavadinimas.txt neperskaitytas]"
// atspausdinti bendra rezultata


import * as fs from "fs/promises";
//const fs = require("fs/promises");


let fileNamearray = ["aag.txt", "bag.txt", "cag.txt"];
let duomenys = "";
try {
    duomenys += await fs.readFile(fileNamearray[0]);
    duomenys += await fs.readFile(fileNamearray[1]);
    duomenys += await fs.readFile(fileNamearray[2]);
} catch (err) {
console.log(fileNamearray[""], err);
}
console.log(duomenys);
console.log("pabaiga");




