var not = [
	{
		"codigo":"001",
		"nombre":"Juan Piguave",
		"nota":8
	},
	{
		"codigo":"002",
		"nombre":"Elver Galarga",
		"nota":6
	},
	{
		"codigo":"003",
		"nombre":"Gabriel Pacheco",
		"nota":10
	},
	{
		"codigo":"004",
		"nombre":"Jonel  Follón",
		"nota":5
	},
	{
		"codigo":"005",
		"nombre":"Rosa Meltrozo",
		"nota":6
	},
	{
		"codigo":"006",
		"nombre":"Luck skywocker",
		"nota":1
	},
	{
		"codigo":"007",
		"nombre":"Rodrigo Chupa",
		"nota":9
	},
	{
		"codigo":"008",
		"nombre":"Jorge de la Selva",
		"nota":6
	},
	{
		"codigo":"009",
		"nombre":"Rosado de la Colina",
		"nota":7
	},
	{
		"codigo":"010",
		"nombre":"Homero Simpson",
		"nota":2
	}


];
function listar (){
	var salida ="<table class='table table-responsive'> ";
	salida +="<thead> ";
	salida +="<tr> ";
	salida +="<th> Codogo </th>" ;
	salida +="<th> Nombre </th>" ;
	salida +="<th> Nota </th>" ;
	salida +="</tr>" ;
	salida +="</thead>" ;
	salida +="<tbody>" ;
	var i;
	for (i=0; i < not.length; i++ ){
		salida +="<tr id="+ not[i].codigo + ">" ;
		salida +="<td> " + not[i].codigo + "</td>" ;
		salida +="<td> " + not[i].nombre + "</td>" ;
		salida +="<td> " + not[i].nota + "</td>" ;
		salida +="</tr> ";


		
	}
	salida +="</tbody>" ;
	salida +="</table>" ;
	document.getElementById("pantalla").innerHTML=salida;

}
function promedio (){
	var i;
	var suma= 0;
	var promedio;
	for (i=0; i < not.length; i++ ){
		suma += not[i].nota; 
	}
	promedio=suma/i;
	document.getElementById("promedio").innerHTML="<em>Promedio es: </em> <strong>" + promedio +"</stong>";



}
function masAlta(){
	var alta =0;
	var codigo="";
	var nombre="";
	var i ;
	for (i=0;i<not.length;i++){
		if (not[i].nota > alta){
			codigo=not[i].codigo;
			nombre=not[i].nombre;
			alta=not[i].nota;
		}
	}
	document.getElementById("masAlta").innerHTML="<em>Nota más alta: </em> <strong>" + alta +"</stong> <br> de: " + nombre;
	if (document.getElementById("pantalla").innerHTML > ""){
		document.getElementById(""+codigo+"").className='success';
	}

}
function masBaja(){
	var baja =99;
	var codigo="";
	var nombre="";
	var i ;
	for (i=0;i<not.length;i++){
		if (not[i].nota < baja){
			codigo=not[i].codigo;
			nombre=not[i].nombre;
			baja=not[i].nota;
		}
	}
	document.getElementById("masBaja").innerHTML="<em>Nota más Baja: </em> <strong>" + baja +"</stong> <br> de: " + nombre;
	if (document.getElementById("pantalla").innerHTML > ""){
		document.getElementById(""+codigo+"").className='danger';
	}

}
