function parodytiZmones() {
    const list = getZmones();
    const div = document.getElementById("sarasas");
    let str = "<ul>";
    for (const zmogus of list) {
        str += "<li>" + zmogus.vardas + " " + zmogus.pavarde + "</li>";
    }
    str += "</ul>";
    div.innerHTML = str;
}