const fs = require("fs/promises");

async function main() {
  console.log("start");

//   let allData;
//   let param1;
//   let param2;
//   let param3;
//   fs.readFile("a.txt").then(
//     (val) => {
//       param1 = val;
//       return fs.readFile("b1.txt");
//     },
//   ).then(
//     (val) => {
//       param2 = val;
//       return fs.readFile("c.txt");
//     },
//   ).then(
//     (val) => {
//       param3 = val;
//       return param1 + param2 + param3;
//     },
//   ).then(
//     (val) => {
//       allData = val;
//       console.log(allData);
//     },
//   ).catch(
//     (err) => {
//       console.log("Klaida", err);
//     },
//   ).then(
//     () => {
//       console.log("finish");
//     },
//   );

  try {
    let allData = await fs.readFile("a.txt") +
      await fs.readFile("b1.txt") +
      await fs.readFile("c.txt");
    console.log(allData);
  } catch (err) {
    console.log("Klaida", err);
  }
  console.log("finish");
}
main();
