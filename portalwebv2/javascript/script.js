document.getElementById("btn_register").addEventListener("click", captura);
document.getElementById("btn_inicio").addEventListener("click", capturaInicio);
document.getElementById("btn__register").addEventListener("click", register);
document.getElementById("btn__iniciar-sesion").addEventListener("click", iniciarSesion);

//validar formulario//
document.addEventListener("DOMContentLoaded", function() {
document.getElementById("form1").addEventListener('submit', validarFormulario); 
document.getElementById("form2").addEventListener('submit', validarFormulario2);
});

window.addEventListener("resize", anchoPagina);

//declaracion de variables//

var formulario_login = document.querySelector(".formulario__login");
var formulario_register = document.querySelector(".formulario__register");
var contenedor_login_register = document.querySelector(".contenedor__login-register");
var caja_trasera_login = document.querySelector(".caja__trasera-login");
var caja_trasera_register = document.querySelector(".caja__trasera-register");


function anchoPagina(){
    if (window.innerWidth > 850) {

        caja_trasera_login.style.display = "block";
        caja_trasera_register.style.display = "block";
    }else{

        caja_trasera_register.style.display = "block";
        caja_trasera_register.style.opacity = "1";
        caja_trasera_login.style.display = "none";
        formulario_login.style.display = "block";
        formulario_register.style.display = "none";
        contenedor_login_register.style.left = "0px";
    }
}


anchoPagina();


function iniciarSesion(){

    if (window.innerWidth > 850) {

    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "10px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.opacity = "1";
    caja_trasera_login.style.opacity = "0";
    }else{
    formulario_register.style.display = "none";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "block";
    caja_trasera_register.style.display = "block";
    caja_trasera_login.style.display = "none";

    }
}
function register(){
    if (window.innerWidth>850){

    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "410px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.opacity = "0";
    caja_trasera_login.style.opacity = "1";
    }else{

    formulario_register.style.display = "block";
    contenedor_login_register.style.left = "0px";
    formulario_login.style.display = "none";
    caja_trasera_register.style.display = "none";
    caja_trasera_login.style.display = "block";
    caja_trasera_login.style.opacity = "1";

    }
}

//captura de datos//

function captura(){

    var nombre = document.getElementById("nombre").value;
    var apellido = document.getElementById("apellido").value;
    var nombre_usuario = document.getElementById("usuario").value;
    var correo = document.getElementById("correo").value;
    var contraseña = document.getElementById("contraseña").value;
    console.log(nombre, apellido, nombre_usuario, correo, contraseña)
  }
function capturaInicio(){

    //var nombre_usuario = document.getElementById("usuario").value;//
    var correo = document.getElementById("correo1").value;
    var contraseña = document.getElementById("contraseña1").value;
    console.log(correo, contraseña)
  }

  //validar formularios y envio//
function validarFormulario(evento) {
  evento.preventDefault();
  var usuario = document.getElementById('correo1').value;
  if(usuario.length == 0) {
    alert('No has escrito nada en el usuario');
    return;
  }
  var clave = document.getElementById('contraseña1').value
  if (clave.length < 6) {
    alert('La clave no es válida');
    return;
  }
  this.submit();
}

function validarFormulario2(evento) {
  evento.preventDefault();
  var usuario = document.getElementById('correo').value;
  if(usuario.length == 0) {
    alert('No has escrito nada en el usuario');
    return;
  }
  var nombre = document.getElementById('nombre').value;
  if(nombre.length == 0) {
    alert('No has escrito nada en el nombre');
    return;
  }
  var apellido = document.getElementById('apellido').value;
  if(apellido.length == 0) {
    alert('No has escrito nada en el apellido');
    return;
  }
  var correo2 = document.getElementById('correo').value;
  if(correo2.length == 0) {
    alert('No has escrito nada en el correo');
    return;
  }
  var clave1 = document.getElementById('contraseña').value
  if (clave1.length < 6) {
    alert('La clave no es válida');
    return;
  }
  this.submit();
}