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
var CAMINARPIXEL=2;
var color="blue";
var cuadrito=document.getElementById("miCanvas");
var papel=cuadrito.getContext("2d");

//Declaración de Eventos
document.addEventListener("keydown", dibujarTeclado);

//Proceso a Ejecutar
dibujarLinea(color, posicion.x-1, posicion.y-1, posicion.x+1, posicion.y+1, papel);

//Métodos
function dibujarTeclado(evento) {
	var codTeclado=evento.keyCode;
	console.log(codTeclado+" "+evento.altKey);
	switch(codTeclado) {
		case teclas.UP:
			console.log("Arriba");
			posicionNuevo.y=posicion.y-CAMINARPIXEL;
			break;
		case teclas.DOWN:
			console.log("Abajo");
			posicionNuevo.y=posicion.y+CAMINARPIXEL;
			break;
		case teclas.LEFT:
			console.log("Izquierda");
			posicionNuevo.x=posicion.x-CAMINARPIXEL;
			break;
		case teclas.RIGHT:
			console.log("Derecha");
			posicionNuevo.x=posicion.x+CAMINARPIXEL;
			break;
		default:
			console.log("Otra Tecla");
			break;
	};
	dibujarLinea(color, posicion.x, posicion.y, posicionNuevo.x, posicionNuevo.y, papel);
	posicion.x=posicionNuevo.x;
	posicion.y=posicionNuevo.y;
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