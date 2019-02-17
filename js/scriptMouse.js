//Declaración de Variables
var teclas = {
	UP: 38,
	DOWN: 40,
	LEFT: 37,
	RIGHT: 39
};
var posicion = {
	x:151,
	y: 151
};
var posicionNuevo = {
	x:posicion.x,
	y: posicion.y
};

var estado=0;
var color="blue";
var cuadrito=document.getElementById("miCanvas");
var papel=cuadrito.getContext("2d");

//Declaración de Eventos
cuadrito.addEventListener("mouseup", soltarMouse);
cuadrito.addEventListener("mousedown", presionarMouse);
cuadrito.addEventListener("mousemove", dibujarMouse);

//Proceso a Ejecutar
dibujarLinea(color, posicion.x-1, posicion.y-1, posicion.x+1, posicion.y+1, papel);

//Métodos
function presionarMouse(evento) {
	estado=1;
	posicion.x=evento.clientX-8;
	posicion.y=evento.clientY-8;
	console.log(posicion);
}
function soltarMouse(evento) {
	estado=0;
	posicion.x=evento.clientX-8;
	posicion.y=evento.clientY-8;
}
function dibujarMouse(evento) {
	if(estado==1) {
		posicionNuevo.x=evento.clientX-8;
		posicionNuevo.y=evento.clientY-8;
		dibujarLinea(color, posicion.x, posicion.y, posicionNuevo.x, posicionNuevo.y, papel);
		posicion.x=posicionNuevo.x;
		posicion.y=posicionNuevo.y;

	}
}
function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo) {
	lienzo.beginPath();
	lienzo.strokeStyle=color;
	lienzo.lineWidth=3;
	lienzo.moveTo(xInicial, yInicial);
	lienzo.lineTo(xFinal, yFinal);
	lienzo.stroke();
	lienzo.closePath();
}