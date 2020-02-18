/* 1 ) El 5 de Oro
El sorteo del 5 de Oro es uno de los más populares de Uruguay y consiste en sortear 5 números al azar de un 
total de 48 números posibles (del 01 al 48),
además de un número extra (conocido como “bolilla extra”). 
Los números sorteados no se pueden repetir.
Nuestro cliente nos pide realizar un simulador del sorteo en JavaScript.
El simulador debe elegir al azar los 5 números del 5 de oro y la “bolilla extra”,
mostrando al final esos numeros en consola. Es válido que la aplicación muestre el “01” simplemente como “1”.
 */

var arr = [];
function getRandomNumber(low, high) {
    while(arr.length < 5){
    var r = Math.floor(Math.random() * (high - low + 1)) + low;
    if(arr.indexOf(r) === -1) arr.push(r);
    console.log(r);
    console.log(arr);
    }
    return r
}

/////////////////////////FUNCION RECETARIO/////////////////////

/* STRING LITERAL EXAMPLE
function doubleMessage(number) {
  return `Your number doubled is ${2 * number}`;
}

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

*/

var recetario = [{receta1: 1, ingredientes:"molleja, perejil, tomate", temperatura:"cocido"},
          {receta2: 2, ingredientes:"palta, perejil, tomate", temperatura:"frio"},
          {receta2: 3, ingredientes:"tomate, lechuga", temperatura:"frio"}];

function receta(y){
    recetario.filter(function(x){
    if(x.ingredientes.includes(`${y}`) || x.temperatura.includes(`${y}`)){
        console.log(x);
    }
  })
}

/////////////////////////FUNCION FACTURA////////////////////////////

var factura = [{nombre:'Pendrive 16GB', precio: 230},
               {nombre:'Memoria MicroSD 8GB', precio: 150},
               {nombre:'Disco Duro Externo 2TB', precio: 3300},
               {nombre:'Pack de 100 DVDs virgenes', precio: 500},
               {nombre:'Router Inalambrico 300Mbps', precio: 750},
               {nombre:'Impresora Laser comun', precio: 2500},
               {nombre:'Teclado común para PC', precio: 120},
               {nombre:'Teclado común para PC', precio: 120},
               {nombre:'Teclado común para PC', precio: 120},
               {nombre:'Mouse optico USB', precio: 130},
               {nombre:'Monitor LCD 19 pulgadas', precio: 2100},
               {nombre:'Placa de video 1Gb DDR3', precio: 2050 }];

var subtotal = [];
var iva = [];

factura.forEach(function(x){
    return iva.push(x.precio * .23), subtotal.push(x.precio)
});

var total = subtotal.map(function (num, idx) {
  return num + iva[idx];
});

////////////////////////////////FUNCION SWITCH AVIONCITOS//////////////////////////7
let avioncitos = calcularAvioncitos(prompt("escriba cuantos aviones de papel realiza por dia"));

function calcularAvioncitos(avioncitos){
  console.log(avioncitos)
  switch (true){

    case avioncitos >0 && avioncitos <= 4:
        alert("no sos adicto!");
        break;    
  
    case avioncitos >= 5 && avioncitos <= 9:
        alert("eres parte de la formacion de riesgo!");
        break;
  
    case avioncitos >= 9 && avioncitos <= 20:
        alert("claramente sos adicto!");
        break;
  
    case avioncitos >20:
        alert("estas mas limado que barbote!");
        break;
  
    default:
        alert("lima");
  }
  calcularAvioncitos(prompt("escriba cuantos aviones de papel realiza por dia"));
}


//////////////////// OTRA FORMA CON IF ELSE///////////////////////

//// la mejor solucion 
let counter = 0;
let avioncitos = calcularAvioncitos(prompt("escriba cuantos aviones de papel realiza por dia"), counter);

function calcularAvioncitos(avioncitos, counter){
    if (avioncitos >0 && avioncitos <= 4) {
    alert("no sos adicto!");

  } else if (avioncitos >= 5 && avioncitos <= 9) {
    alert("eres parte de la formacion de riesgo!");

  } else if (avioncitos >= 60 && avioncitos <= 20) {
    alert("claramente sos adicto!");

  } else /* it is greater than 20 */ {
    alert("estas mas limado que barbote!");
  }
    /* intento de realizar counter para salir de bucle con x intentos
  if(counter === 5){
    calcularAdiccion(prompt("escriba cuantos aviones de papel realiza por dia"));
    counter ++;
  } else {
    console.log("Se acabaron los intentos");
  } */
}


/// otra solucion

function calcularAvioncitos(){

  let avioncitos = prompt("escriba cuantos aviones de papel realiza por dia");


    if (avioncitos >0 && avioncitos <= 4) {
    alert("no sos adicto!");

  } else if (avioncitos >= 5 && avioncitos <= 9) {
    alert("eres parte de la formacion de riesgo!");

  } else if (avioncitos >= 60 && avioncitos <= 20) {
    alert("claramente sos adicto!");

  } else /* it is greater than 20 */ {
    alert("estas mas limado que barbote!");
  }
}
