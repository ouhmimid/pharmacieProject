function medicament(nom, image, prix) {
    this.nom = nom || "null";
    this.image = image || "null";
    this.prix = prix || null;
}

function pharmacie(nom, status, adresse, telephone, attitude, longitude, image, medicament = [], email) {
    this.nom = nom || "null";
    this.status = status || "null";
    this.adresse = adresse || "null";
    this.telephone = telephone || "null";
    this.attitude = attitude || null;
    this.longitude = longitude || null;
    this.image = image || "null";
    this.medicament = medicament || null;
    this.email = email;

    Object.defineProperties(this, {
        "nom": {
            get: function () {
                return nom
            },
            set: function (value) {
                nom = value
            }
        },
        "status": {
            get: function () {
                return status
            },
            set: function (value) {
                status = value
            }
        },
        "adresse": {
            get: function () {
                return adresse
            },
            set: function (value) {
                adresse = value
            }
        },
        "telephone": {
            get: function () {
                return telephone
            },
            set: function (value) {
                telephone = value
            }
        },
        "attitude": {
            get: function () {
                return attitude
            },
            set: function (value) {
                attitude = value
            }
        },
        "longitude": {
            get: function () {
                return longitude
            },
            set: function (value) {
                longitude = value
            }
        },
        "image": {
            get: function () {
                return image
            },
            set: function (value) {
                image = value
            }
        },
        "medicament": {
            get: function () {
                return medicament
            },
            set: function (value) {
                medicament = value
            }
        },
        "email": {
            get: function () {
                return email
            },
            set: function (value) {
                email = value
            }
        }
    });
}
var pharmaciesList = [
    new pharmacie("Pharmacie acharif al idrissi", "ouvert", "El Jadida", "0523374920", 33.230461, -8.5275588, "", [
        new medicament("doliprane", "null", 15),
        new medicament("supradine", "null", 15),
        new medicament("voltarine", "null", 15),
        new medicament("pitadin", "null", 15),
    ], "test1@test.com"),
    new pharmacie("Pharmacie Sidi Bouzid", "ouvert", "C. Com. De Sidi Bouzid, 24000, El Jadida", "0523348281", 33.2317743, -8.5521306, "", [
        new medicament("doliprane", "null", 15),
        new medicament("supradine", "null", 15),
        new medicament("voltarine", "null", 15),
        new medicament("pitadin", "null", 15),
    ], "test2@test.com"),
    new pharmacie("Pharmacie fadwa", "fermer", "El Jadida 24000", "0523390253", 33.2264356, -8.5219276, "", [
        new medicament("doliprane", "null", 15),
        new medicament("supradine", "null", 15),
        new medicament("voltarine", "null", 15),
        new medicament("pitadin", "null", 15),
    ], "--"),
    new pharmacie("Pharmacie Sanaa", "ouvert", "Av. J, Sect. Ii, Résid. Nour Al Mohit, 24000, El Jadida", "0523393534", 33.247829, -8.532317, "", [
        new medicament("doliprane", "null", 15),
        new medicament("supradine", "null", 15),
        new medicament("voltarine", "null", 15),
        new medicament("pitadin", "null", 15),
    ], "test4@test.com")
];

function getPharmaciesList() {
    return this.pharmaciesList;
}
var searchList = [];
function getPharmaciesSearch(searchName) {
    searchList = [];
    var cpt = 0;
    for (let i = 0; i < this.pharmaciesList.length; i++) {
        for (let j = 0; j < this.pharmaciesList[i].nom.length; j++) {
            if (this.pharmaciesList[i].nom[j] == searchName && cpt == 0) {
                searchList.push(this.pharmaciesList[i]);
                cpt++;
            }
        }
        cpt = 0;
    }
    return searchList;
}