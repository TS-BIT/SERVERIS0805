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
    const item = getZmogus();
    const div = document.getElementById("zmogaus info");
    let str = "<ul>";
    for (const zmogus) {
        str += "<li>" + "vardas:" + " " + zmogus.vardas + "; " + "pavardė:" + " " + zmogus.pavarde + "; " + "gimimo data:" + " " + zmogus.gimimoData + "; " + "alga:" + " " + zmogus.alga + ". " + "</li>"
    }
    str += "</ul>";
    div.innerHTML = str;   
}

function pridetiZmogu() {
    const newitem = addZmogus(zmogus);
    const div = document.getElementById("ivesti zmogaus info");
    let str = "<ul>";
    for (const zmogus newitem) {
        str += "<li>" + "vardas:" + " " + zmogus.vardas + "; " + "pavardė:" + " " + zmogus.pavarde + "; " + "gimimo data:" + " " + zmogus.gimimoData + "; " + "alga:" + " " + zmogus.alga + ". " + "</li>"
    }
    str += "</ul>";
    div.innerHTML = str;   
}

function pasalintiZmogu() {
    const delitem = deleteZmogus(id);
    const div = document.getElementById("pasalinti zmogaus info");
    let str = "<ul>";
    for (const zmogus delitem) {
        str += "<li>" + "vardas:" + " " + zmogus.vardas + "; " + "pavardė:" + " " + zmogus.pavarde + "; " + "gimimo data:" + " " + zmogus.gimimoData + "; " + "alga:" + " " + zmogus.alga + ". " + "</li>"
    }
    str += "</ul>";
    div.innerHTML = str;   
}

