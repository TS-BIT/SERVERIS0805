
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

console.log("pradzia");
let fileNamearray = ["aag1.txt", "bag.txt", "cag.txt"];
let duomenys = "";
try {
    duomenys += await fs.readFile(fileNamearray[0]);
} catch (err) {
    duomenys += ( fileNamearray[0] +" neperskaitytas, ");
    //console.log(fileNamearray[0] +" neperskaitytas");
    }  
try {    
    duomenys += await fs.readFile(fileNamearray[1]);
} catch (err) {
    duomenys += ( fileNamearray[1] +" neperskaitytas, ");
    //console.log(fileNamearray[1] +" neperskaitytas");
    }
try {    
    duomenys += await fs.readFile(fileNamearray[2]);
} catch (err) {
    duomenys += ( fileNamearray[2] +" neperskaitytas.");
    //console.log(fileNamearray[2] +" neperskaitytas");
    }
console.log(duomenys);
console.log("pabaiga");

/*
Ats:
pradzia
aag1.txt neperskaitytas, obuolys, kriause, mandarinas, apelsinas, greipfurtas, persimonas, braske, silauoge, zemuoge, agrastas, aviete, serbentas.
pabaiga
*/

/* 
async function main() {
  let failai = ["a.txt", "bu.txt", "b.txt", "c.txt"];

  let allData = "";
  for (const failas of failai) {
    try {
      allData += await fs.readFile(failas);
    } catch (err) {
      allData += `\n[${failas} neperskaitytas]\n`;
    }
  }
  console.log(allData);
}
main();
*/


// " \r\n " is naujos eilutes + tarpas
// " \n " tarpas 

