const formulario = document.getElementById('form');
const usuario = document.getElementById('id_usr');
const pais = document.getElementById('pais');
const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const direccion = document.getElementById('direccion');
const ccUsuario = document.getElementById('ccUsuario');
const contrasena = document.getElementById('ccPassword');
const telefono = document.getElementById('telefono');
const email = document.getElementById('email');
const comprobarContrasena = document.getElementById('verificacionPassword');
const radioSi = document.getElementById('EleccionNegativa');
const radioNo = document.getElementById('Eleccionpositiva');
const conjunto = document.getElementById('conjunto');



function validar() {
    if (nombre.value.length > 25) {
        alert('El nombre es muy largo')
        nombre.focus();
        nombre.select();
    }
    if (apellidos.value.length > 25) {
        alert('Los apellidos son muy largo')
        apellidos.focus();
        apellidos.select();
    }
    if (ccUsuario.value.length != 0 && (ccUsuario.value.length > 20 || ccUsuario.value.length < 10)) {
        alert('El usuario es muy corto o sobrepasas el numero de caracteres indicado')
        ccUsuario.focus();
        ccUsuario.select();
    }
}

function ingresoContraseña() {
    const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const caracteres = ['#', '%', '/', '&'];
    var i = 0;
    var error = 0;
    if (contrasena.value.length != 0 && (contrasena.value.length < 15 || contrasena.value.length > 20)) {
        alert('La contraseña no comple con los requisitos');
        contrasena.focus();
        contrasena.select();
    } else {
        while (i < numeros.length) {
            if (contrasena.value.indexOf(numeros[i]) == -1) {
                error += 1;
            }
            i++;
        }
        if (error == 10) {
            alert('La contraseña debe contener al menos un numero' + ' ' + numeros);
            contrasena.focus();
            contrasena.select();
        } else {
            error = 0;
            i = 0;
            while (i < caracteres.length) {
                if (contrasena.value.indexOf(caracteres[i]) == -1) {
                    error += 1;
                }
                i++;
            }
            if (error == 4) {
                alert('La contraseña debe contener al menos un caracter especial' + ' ' + caracteres);
                contrasena.focus();
                contrasena.select();
            }
        }
    }
}

function validarContraseña() {
    if (comprobarContrasena.value != contrasena.value && contrasena.value.length != 0) {
        alert('Las contraseñas no coinsiden')
        comprobarContrasena.focus();
        comprobarContrasena.select();
    }
}

function validarDireccion() {
    if (direccion.value.indexOf("cll") != 0 && direccion.value.indexOf("cra") != 0 && direccion.value.indexOf("av") != 0 && direccion.value.indexOf("anv") != 0 && direccion.value.indexOf("trans") != 0) {
        alert('La direccion no es valida');
        direccion.focus();
        direccion.select();
    }
}


function validarEmail() {
    var vemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!(vemail.test(email.value))) {
        alert('La direccion de correo electronico no es valida ');
        email.focus();
        email.select();
    }
}

function validarRadio(x) {
    if (x == 1) {
        conjunto.style.display = 'block';
    } else {
        conjunto.style.display = 'none';
    }
}