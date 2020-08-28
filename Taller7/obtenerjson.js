var requestURL = 'https://www.datos.gov.co/resource/xdk5-pm3f.json'; //Obtiene los datos de una url externa del Json
var request = new XMLHttpRequest();
var departamentos; //Variable que guarda los departamentos no repetidos
var municipios = new Array(); //Variable que guarda los municipios del departamento seleccionado
var DatosJson; //Variable que almacena el Json externo
var municipio = document.getElementById('municipio');
var departamento = document.getElementById('departamento');
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

Array.prototype.unique = function(a) { //Funcion para evitar que el array obtenga valores repetidos
    return function() { return this.filter(a) }
}(function(a, b, c) {
    return c.indexOf(a, b + 1) < 0
});

function mun() { //Funcion que ingresa los municipios del departamento seleccionado
    $('#municipio option').remove();
    $("#municipio").append('<option value="0">Seleccione...</option>');
    var contador = 0; //Contador que permite contar el numero de veces de ingreso al if y por ende el que lleva el indice del array municipios
    for (var i = 0; i < DatosJson.length; i++) {
        if (DatosJson[i].departamento == departamentos[departamento.value - 1]) { //el -1 es por el valor seleccionado, ya que está uno adelantado por la opcion de "Seleccion..." del html
            municipios[contador] = DatosJson[i].municipio;
            contador++;
        }
    }

    for (var i = 0; i < municipios.length; i++) {
        $("#municipio").append('<option value="' + (i + 1) + '">' + municipios[i] + '</option>'); //Impresion de los datos obtenidos en el select option
    }
}


function cargarDatos() { //Funcion principal que apenas termine de cargar la pagina trae todos los archivos principales
    var datajson = request.response;
    DatosJson = JSON.parse(JSON.stringify(datajson));
    var array = new Array();

    for (var i = 0; i < DatosJson.length; i++) {
        array[i] = DatosJson[i].departamento;
    }

    departamentos = array.unique();

    for (var i = 0; i < departamentos.length; i++) {
        $("#departamento").append('<option value="' + (i + 1) + '">' + departamentos[i] + '</option>');
    }

}