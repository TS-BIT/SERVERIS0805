const fs = require("fs/promises");
// turit masyva su failu pavadinimais
// perskaityti visus failus is eils ir rezultatus sudeti i viena kintamaji
// jei kuris nors failas nerastas, prie rezultato pridedam "[pavadinimas.txt neperskaitytas]"
// atspausdinti bendra rezultata

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
