var phList = [];
getPharmacies();

function getPharmacies() {
    if (document.getElementById('searchInput').value == "") {
        phList = getPharmaciesList();
        document.getElementById('infoCart').innerHTML = "";
    } else {
        phList = getPharmaciesSearch(document.getElementById('searchInput').value);
        document.getElementById('infoCart').innerHTML = "";
    }

    for (var i = 0; i < phList.length; i++) {
        var status;

        if (phList[i].status == "fermer") {
            status = `<i class="fa fa-times" aria-hidden="true"></i>`;
        } else {
            status = `<i class="fa fa-check" aria-hidden="true" ></i>`;
        }
        var infoCart =
            `<div class="col-md-3">
        <div class="cartPH">
                    <div class="imagePH">
                        <img src="${phList[i].image}">
                        <a class="locate" onclick="localiser(${parseFloat(phList[i].attitude)},${parseFloat(phList[i].longitude)},'${phList[i].nom}','${phList[i].adresse}','${phList[i].telephone}','${phList[i].email}')">
                            <i class="fa fa-map-marker"></i>
                        </a>
                    </div>
                    <div class="infoPH">
                        <p>${phList[i].nom}</p>
                        <p>${phList[i].adresse}</p>
                        <p class="gard-style">
                            <span class="gard-text">Status</span>
                            <span id="status">
                                ${status}
                            </span>
                        </p>
                    </div>
        </div>
    </div>`;

        document.getElementById('infoCart').innerHTML += infoCart;
    }

}



function localiser(lat, lng, nom, adresse, telephone, email) {
    window.location.href = "./pharmacy info and location/infoLocation.html?lat=" + lat +
        "&lng=" + lng + "&nom=" + nom + "&adresse=" + adresse + "&tele=" + telephone + "&email=" + email;
}