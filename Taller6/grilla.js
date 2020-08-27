var requestURL = 'http://localhost:8083/Taller6/archivojson.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

window.onload = function cargarDatos() {
    var datajson = request.response;

    var DatosJson = JSON.parse(JSON.stringify(datajson));
    console.log(DatosJson[0].id);
    $("#Table").append('<tr><th scope="col" rowspan="3">ID</th>' +
        '<th scope="col" rowspan="3">Nombre</th>' +
        '<th scope="col" rowspan="3">Username</th>' +
        '<th scope="col" rowspan="3">Email</th>' +
        '<th scope="col" colspan="6">Adress</th>' +
        '<th scope="col" rowspan="3">Phone</th>' +
        '<th scope="col" rowspan="3">Website</th>' +
        '<th scope="col" colspan="3">Company</th></tr>' +
        '<tr><th scope="col" rowspan="2">Street</th>' +
        '<th scope="col" rowspan="2">Suite</th>' +
        '<th scope="col" rowspan="2">City</th>' +
        '<th scope="col" rowspan="2">Zipcode</th>' +
        '<th scope="col" colspan="2">Geo</th>' +
        '<th scope="col" rowspan="2">Name</th>' +
        '<th scope="col" rowspan="2">CatchPhrase</th>' +
        '<th scope="col" rowspan="2">BS</th></tr>' +
        '<tr><th scope="col">Lat</th>' +
        '<th scope="col">Lng</th></tr>)');

    for (i = 0; i < DatosJson.length; i++) {
        $("#Relleno").append('<tr><td>' + DatosJson[i].id + '</td>' +
            '<td>' + DatosJson[i].name + '</td>' +
            '<td>' + DatosJson[i].username + '</td>' +
            '<td>' + DatosJson[i].email + '</td>' +
            '<td>' + DatosJson[i].address.street + '</td>' +
            '<td>' + DatosJson[i].address.suite + '</td>' +
            '<td>' + DatosJson[i].address.city + '</td>' +
            '<td>' + DatosJson[i].address.zipcode + '</td>' +
            '<td>' + DatosJson[i].address.geo.lat + '</td>' +
            '<td>' + DatosJson[i].address.geo.lng + '</td>' +
            '<td>' + DatosJson[i].phone + '</td>' +
            '<td>' + DatosJson[i].website + '</td>' +
            '<td>' + DatosJson[i].company.name + '</td>' +
            '<td>' + DatosJson[i].company.catchPhrase + '</td>' +
            '<td>' + DatosJson[i].company.bs + '</td>' + '</tr>'
        );
    }

}