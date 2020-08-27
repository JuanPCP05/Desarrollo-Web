const formulario = document.getElementById('form');
const nombre = document.getElementById('nombre');
const apellidos = document.getElementById('apellidos');
const contrasena = document.getElementById('ccPassword');
const email = document.getElementById('email');
const Usuario = document.getElementById('Usuario');
const comprobarContrasena = document.getElementById('verificacionPassword');



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
}

function ingresoContraseña() {
    const numeros = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    const caracteres = ['#', '%', '/', '&'];
    var i = 0;
    var error = 0;
    if (contrasena.value.length != 0 && (contrasena.value.length < 5 || contrasena.value.length > 20)) {
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


function validarEmail() {
    var vemail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!(vemail.test(email.value))) {
        alert('La direccion de correo electronico no es valida ');
        email.focus();
        email.select();
    }
}

function calcularEdad() {
    let ahora = new Date();
    let nacimiento = document.getElementById('fnacimiento').value;
    let agno = nacimiento.split('-');
    let edad = ahora.getFullYear() - agno[0];
    document.getElementById('Edad').value = edad;
}

function validarUsuario() {
    const caracteres = ['#', '%', '/', '&', '!'];
    var i = 0;
    var error = 0;
    while (i < caracteres.length) {
        if (Usuario.value.indexOf(caracteres[i]) == -1) {
            error += 1;
            console.log(error);
        }
        i++;
    }
    if (error != 5) {
        alert('El usuario no debe contener caracteres especiales' + ' ' + caracteres);
        Usuario.focus();
        Usuario.select();
    }
}