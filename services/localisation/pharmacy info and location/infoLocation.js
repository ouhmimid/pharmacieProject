var map;

function initMap() {
    var url_string = window.location.href;
    var url = new URL(url_string);
    var lat = parseFloat(url.searchParams.get("lat"));
    var lng = parseFloat(url.searchParams.get("lng"));
    var nom = url.searchParams.get("nom");
    var adresse = url.searchParams.get("adresse");
    var telephone = url.searchParams.get("tele");
    var email = url.searchParams.get("email");
    
    
    console.log(lat + "/" + lng + "/" + nom + "/" + adresse + "/" + telephone);
    
    document.getElementById('nomPharmacie').innerHTML = nom;
    document.getElementById('adressePharmacie').innerHTML = adresse;
    document.getElementById('telephonePharmacie').innerHTML = telephone;    
    document.getElementById('emailPharmacie').innerHTML = email;

    map = new google.maps.Map(document.getElementById('map'), {
        center: {
            lat: lat,
            lng: lng
        },
        zoom: 20
    });

    var marker = new google.maps.Marker({
        position: {
            lat: lat,
            lng: lng
        },
        map: map
    })
}