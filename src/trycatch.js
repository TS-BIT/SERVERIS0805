function klaiduGeneratorius() {
    let sk = Math.random();
    // if (sk < 0.25) {
    //     throw sk;
    // } else if (sk < 0.5) {
    //     throw "klaida";
    // } else 
    if (sk < 0.5) {
        throw new Error("Klaida " + sk);
    }
    return "be klaidu " + sk;
}

function tustiVartai() {
    console.log("tustiVartai pradzia");
    console.log(klaiduGeneratorius());
    console.log("tustiVartai pabaiga");
}

function svetimasSavoKomandoj() {
    console.log("svetimasSavoKomandoj pradzia");
    try {
        tustiVartai();
    }
    catch (err) {
        console.log("Pagavau ir metu toliau...");
        throw err;
    }
    console.log("svetimasSavoKomandoj pabaiga");
}

function piktasSvetimasSavoKomandoj() {
    console.log("piktasSvetimasSavoKomandoj pradzia");
    try {
        svetimasSavoKomandoj();
    }
    catch (err) {
        console.log("Pagavau, o toliau metu kita...");
        let e = new Error("Kita klaida");
        e.cause = err;
        throw e;
    }
    console.log("piktasSvetimasSavoKomandoj pabaiga");
}

console.log("pradzia");
try {
    piktasSvetimasSavoKomandoj();
    console.log("try pabaiga");
}
catch(err) {
    console.log("klaida", err);
}
finally {
    console.log("visada veiks");
}

console.log("pabaiga");

// function skaiciuSuma(nuo, iki) {
//     if (typeof nuo !== "number" || typeof iki !== "number") {
//         throw "klaida";
//     }
//     let suma = 0;
//     for(let i = nuo; i <= iki; i++) {
//         suma += i;
//     }
//     return suma;
// }

// try {
//     console.log(skaiciuSuma(5, 7));
//     console.log(skaiciuSuma("labas", "viso"));
//     console.log("try pabaiga");
// }
// catch (err) {
//     console.log("pagavau klaida:", err);
// }
// finally {
//     console.log("sitas visada suveiks !!!");
// }

// console.log(skaiciuSuma(-1, 0));


// let j = `{
//     "vardas": "Jonas",
//     "pavarde": "Jonaitis"
// }`;
// console.log(j);
// console.log(typeof j);
// console.log(j.vardas);
// console.log("----");
// try {
//     let o = JSON.parse(j);
//     console.log(o);
//     console.log(typeof o);
//     console.log(o.vardas);
// } catch (err) {
//     console.log("failed to parse JSON");
// }
// console.log("tesiam darba toliau");


// let vardas = "Jonas";
// let pavarde = "Jonaitis";
// let labas = function() {
//     console.log("Labas", this.firstName, this.pavarde);
// };

// let zmogus = {
//     firstName: vardas,
//     pavarde,
//     labas
// };
// let tasPats = zmogus;


// console.log(zmogus);
// zmogus.labas();
