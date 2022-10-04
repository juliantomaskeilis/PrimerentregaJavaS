// primer pre entrega!

alert("Bienvenidos Profes de coder a esta pre entrega!")

// Condicional y anidada
let user = prompt("como es tu nombre?");

if (user == "Maria Laura")
{alert("ah,vos sos la profe de mi cursada, Hola!!!")} 
else if (user == "Laura")
{alert("ah,vos sos la profe de mi cursada, Hola!!!")} 
else if (user == "Lau")
{alert("ah,vos sos la profe de mi cursada, Hola!!!")} 
else {alert("no, no sos mi profe de cursada, pero, mucho gusto")}

alert("A continuacion podras realizar dsitribucion de nuestras pecheras")

//equipo 1
for (let q = 1; q <= 5; q++)
{let nombre = prompt("Decime el nombre del jugador para el equipo 1");
console.log("Camiseta Numero "+ q +  " Nombre:"+ nombre)}

//equipo 2
for (let q = 6; q <= 10; q++)
{let nombre = prompt("Decime el nombre del jugador para el equipo 2");
console.log("Camiseta Numero "+ q +  " Nombre:"+ nombre)}


//pago

alert("el precio de la cancha es de $10000. Seleccione la cantidad de jugadores por los cuales quiere dividir el precio")

let estadio = 10000
let opcion = parseInt(prompt("Seleccione opcion de pago"))

function calcularPrecio (cancha,opcion)
{  let costoTotal = estadio / opcion
alert("El costo es: "+costoTotal)
}

calcularPrecio(estadio,opcion)