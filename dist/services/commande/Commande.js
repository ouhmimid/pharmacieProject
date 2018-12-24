var phList = getPharmaciesList();


for (var i = 0; i < phList.length; i++) {
    var pharmaciesSelect =
        `<option>${phList[i].nom}</option>`;
    document.getElementById('inputPharmacie').innerHTML += pharmaciesSelect;
}
var medList = phList[0].medicament;
for (let j = 0; j < medList.length; j++) {
    var medicaments =
        `<option>${medList[j].nom}</option>`;
    document.getElementById('inputMedicament').innerHTML += medicaments;
}

function pharmacieSelected() {
    var phSelect = document.getElementById('inputPharmacie').value;
    document.getElementById('inputMedicament').innerHTML = "";
    var posPhSel = cherchPhPosition(phSelect);
    var medList = phList[posPhSel].medicament;
    for (let j = 0; j < medList.length; j++) {
        var medicaments =
            `<option>${medList[j].nom}</option>`;
        document.getElementById('inputMedicament').innerHTML += medicaments;
    }
}

function calculePrix() {
    var unitePrice =parseFloat(chercheMediPhPosition(document.getElementById('inputPharmacie').value));
    var Qte = document.getElementById('Qte').value;
    var prix = Qte * unitePrice;
    console.log(prix);
    document.getElementById('prix').innerHTML = prix.toString();
}

function cherchPhPosition(nom){
    var pos = -1;
    for (var i = 0; i < phList.length; i++) {
        if (phList[i].nom == nom) {
            pos = i;
        }
    }
    return pos;
}

function chercheMediPhPosition(nom){
    var phSelectedPos = cherchPhPosition(nom);
    var mediPrix;
    for (let i = 0; i < phList[phSelectedPos].medicament.length; i++) {
        if (phList[phSelectedPos].medicament[i].nom == document.getElementById('inputMedicament').value) {
            mediPrix = phList[phSelectedPos].medicament[i].prix;
        }
    }
    return mediPrix;
}