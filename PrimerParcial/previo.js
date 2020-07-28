var control=false;

function editar(nodo) {

	if (control == false) {
		var nodoTd = nodo.parentNode; 
		var nodoTr = nodoTd.parentNode; 
		var nodoContenido = document.getElementById('contenido');
		var nodosEnTr = nodoTr.getElementsByTagName('td');
		var alimento = nodosEnTr[0].textContent; 
		var calorias = nodosEnTr[1].textContent;
		var grasas = nodosEnTr[2].textContent; 
		var proteina = nodosEnTr[3].textContent;
		var carbohidratos = nodosEnTr[4].textContent; 
		var opciones = nodosEnTr[6].textContent;
		var edicion = '<td><input type="text" name="alimento" id="alimento" value="'+alimento+'" size="10"></td>'+
		'<td><input class="input-group" type="text" name="calorias" id="calorias" value="'+calorias+'" size="3"</td>'+
		'<td><input class="input-group" type="text" name="grasas" id="grasas" value="'+grasas+'" size="3"</td>'+
		'<td><input class="input-group" type="text" name="proteina" id="proteina" value="'+proteina+'" size="3"</td>'+
		'<td><input class="input-group" type="text" name="carbohidratos" id="carbohidratos" value="'+carbohidratos+'" size="3"</td>'+
		'<td><select class="form-control" name="imagen"><option value="0" size=5>Bien</option><option value="1" size=5>Mal</option></select></td><td>En edición</td>';
		
		nodoTr.innerHTML = edicion;

		nodoContenido.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
		'<form name = "formulario" action="recibido.html" method="get" onsubmit="envios()" onreset="anular()">'+
		'<input class="btn btn-primary" type = "submit" value="Aceptar"> <input class="btn btn-outline-danger" type="reset" value="Cancelar">';
		control = true;
	}else {
		alert ('Solo se puede editar un campo, para editar otro recargue la pagina.');
	}
}
function envios() {
	var nodoContenido = document.getElementById('contenido'); 
	nodoContenido.innerHTML = 'Pulse Aceptar para guardar los cambios o cancelar para anularlos'+
	'<form name = "formulario" action="recibido.html" method="get" onsubmit="envios()" onreset="anular()">'+
	'<input type="hidden" name="alimento" value="'+document.querySelector('#alimento').value+'">'+
	'<input type="hidden" name="calorias" value="'+document.querySelector('#calorias').value+'">'+
	'<input type="hidden" name="grasas" value="'+document.querySelector('#grasas').value+'">'+
	'<input type="hidden" name="proteina" value="'+document.querySelector('#proteina').value+'">'+
	'<input type="hidden" name="carbohidratos" value="'+document.querySelector('#carbohidratos').value+'">'+
	'<input class="btn btn-primary" type = "submit" value="Aceptar"> <input class="btn btn-outline-danger" type="reset" value="Cancelar">';
	document.formulario.submit();
}

function anular() {
window.location.reload();
}