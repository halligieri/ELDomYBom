// variable donde se guardarÃ¡n los json creados
var estudiantes =[];
/*
Contructor que permite formar objetos JSON
*/
function Estudiante(codigo, nombre, nota){
	this.codigo= codigo;
	this.nombre = nombre;
	this.nota = nota;


}
/*
	Evento listener que permite la creaciÃ³n del json y la inserciÃ³n a la tabla
*/
 document.getElementById("registro").addEventListener("click", function(){
 	// se atrapan los datos desde la interfaz
	var cod = document.getElementById("codigo").value;
	var nombre = document.getElementById("nombre").value;
	var nota = parseFloat(document.getElementById("nota").value);

	// se valida que la nota sea una numero
	if (isNaN(nota)){
		alert("La nota debe ser un nÃºmero");
		return;
	}
	else{

		var nuevoEstudiante = new Estudiante(cod, nombre, nota);

		if (guardarJSON(nuevoEstudiante)==false){
			return;
		}
		var  tabla = document.getElementById("tabla");
		var i;
		var filaFinal;
		var fila;

		filaFinal = tabla.rows.length;
		fila = tabla.insertRow(filaFinal);


		var celda0 = fila.insertCell(0);
		var celda1 = fila.insertCell(1);
		var celda2 = fila.insertCell(2);


		celda0.innerHTML = nuevoEstudiante.codigo;
		celda1.innerHTML = nuevoEstudiante.nombre;
		celda2.innerHTML = nuevoEstudiante.nota.toPrecision(2);
		// limpiar los campos
		document.getElementById("codigo").value = "";
		document.getElementById("nombre").value = "";
		document.getElementById("nota").value = "";
	}
	alert(json);
	});


 function guardarJSON(json){
 	for (i=0; i< estudiantes.length; i++){
		if (estudiantes[i].codigo == json.codigo){
			alert("No pueden haber dos estudiantes con el mismo cÃ³digo");
			return false;
		}
	}
 	estudiantes[estudiantes.length] = json;
 	return true;
}



function notaPromedio(json){

var i;
var cont=0;

for (i=0; i< estudiantes.length; i++){

cont=cont+estudiantes[i].nota;
prom=cont/estudiantes.length;

}

alert("El promedio es " +prom.toPrecision(2));

}

function notaMaxima(json){
 var out ="-------------NOTA MAS ALTA----------------";
 var notaAlta = estudiantes[0].nota;
 var pos = 0;
 var add2 = out+="";
 for (i = 0; i < estudiantes.length; i++) {
 if (estudiantes[i].nota > notaAlta) {
 notaAlta = estudiantes[i].nota;
 pos = i;
 }
 }
 alert(  add2 +"Las nota mas baja de los estudiantes es: " +estudiantes[pos].nombre + " " + "Con una nota de: " +estudiantes[pos].nota.toPrecision(2) );
 }

function notaMinima(json){
 var out ="-------------NOTA MAS BAJA----------------";
 var notaBaja = estudiantes[0].nota;
 var pos = 0;
 var add2 = out+="";
 for (i = 0; i < estudiantes.length; i++) {
 if (estudiantes[i].nota < notaBaja) {
 notaBaja = estudiantes[i].nota;
 pos = i;
 }
 }
 alert(  add2 +"Las nota mas baja de los estudiantes es: " +estudiantes[pos].nombre + " " + "Con una nota de: " +estudiantes[pos].nota.toPrecision(2) );
 }
