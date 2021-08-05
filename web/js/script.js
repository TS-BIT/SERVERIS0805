function parodytiZmones() {
    const list = getZmones();
    const div = document.getElementById("zmoniu info");
    let str = "<ul>";
    for (const zmogus of list) {
        str += "<li>" + "vardas:" + " " + zmogus.vardas + "; " + "pavardė:" + " " + zmogus.pavarde + "; " + "gimimo data:" + " " + zmogus.gimimoData + "; " + "alga:" + " " + zmogus.alga + ". " + "</li>"
    }
    str += "</ul>";
    div.innerHTML = str;
}

function parodytiZmogu() {
    const row = getZmogus();
    const div = document.getElementById("zmogaus info");
    let str = "<ul>";
    for (const zmogus of row) {
        str += "<li>" + "vardas:" + " " + zmogus.vardas + "; " + "pavardė:" + " " + zmogus.pavarde + "; " + "gimimo data:" + " " + zmogus.gimimoData + "; " + "alga:" + " " + zmogus.alga + ". " + "</li>"
    }
    str += "</ul>";
    div.innerHTML = str;   
}

function pridetiZmogu() {
    const list = addZmogus(zmogus);
    const div = document.getElementById("ivesti zmogaus info");
    let str = "<ul>";
    for (const zmogus of list) {
        str += "<li>" + "vardas:" + " " + zmogus.vardas + "; " + "pavardė:" + " " + zmogus.pavarde + "; " + "gimimo data:" + " " + zmogus.gimimoData + "; " + "alga:" + " " + zmogus.alga + ". " + "</li>"
    }
    str += "</ul>";
    div.innerHTML = str;   
}

function pasalintiZmogu() {
    const list = deleteZmogus(id);
    const div = document.getElementById("pasalinti zmogaus info");
    let str = "<ul>";
    for (const zmogus of list) {
        str += "<li>" + "vardas:" + " " + zmogus.vardas + "; " + "pavardė:" + " " + zmogus.pavarde + "; " + "gimimo data:" + " " + zmogus.gimimoData + "; " + "alga:" + " " + zmogus.alga + ". " + "</li>"
    }
    str += "</ul>";
    div.innerHTML = str;   
}

