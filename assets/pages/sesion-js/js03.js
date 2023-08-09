console.log("Sesion JS 03 Contol de flujo");
console.log("No olvidaremos el reto de Ed");

//------Declaracion de bloque de codigo-------------
/* 
Sintaxia:
        {

        }
Las varibles declaradas con let y const 
solo tendran alcance dentro del bloque o bloques anidados.
Si la variable en el bloque, tiene el mismo nombre que una variable fuera del 
bloque, se le da prioridad a la variable dentro del bloque.
*/

//let y const no se pueden redeclarar
//let firstname= "lalo";
//const lastname = "Garcia";
var age = "25";


let firstname = "Aline";
const lastname = "Pool";
var age = "24";

{
    let firstname = "Mau";
    const lastname = "Peniche";
    var age = "26";
    const colorFavorito = "Azul";
    var comidaFavorita = "Pozole";
    console.log(`${firstname} ${lastname}`);//Mau Peniche
    console.log(age);//26
    console.log(colorFavorito);//azul 
    console.log(comidaFavorita);//Pozole

    {
        const colorFavorito = "morado";
        console.log(colorFavorito);// morado
        console.log(firstname);//mau
        {
            console.log(colorFavorito);//morado
            console.log(firstname);//mau
        }

    }
}

console.log(`${firstname} ${lastname}`);//Aline Pool
console.log(age);//24
//console.log(colorFavorito);//error
console.log(comidaFavorita);//pozole

//-------------------Condicional if-else-------------------
/*
Ejecuta una sentencia si una condicion especifica es evaluada
como verdadera

 Sintaxis:
    if ( condición ) sentencia;

    if ( condición ) {
        sentencias;
    }

    if ( condición ) sentencia;
    else sentencia_si_condición_es_falsa;

    if ( condición ) {
        sentencias;
    }
    else {
        sentencias;
    }

    if (condición) sentencia;
    else if (condicion 2) sentencia;
         else sentencia_si_condicion2_es_falsa;


    if ( condicion1 ) sentencias;
    else if ( condicion2 ) sentencia;
    else if ( condicion3 ) sentencia;
    else if ( condicion4 ) sentencia;
     .....
    else if ( condicionN ) sentencia;
    else condición;   

*/

const temperatura = 25;
let mensaje = "Temperatura de ";

if (temperatura === 22) {
    mensaje += `${temperatura} grados centigrados es ideal`;
}
else if (temperatura >= 15 && temperatura <= 21) {
    mensaje += `${temperatura} grados centigrados es fria`;
}
else if (temperatura >= 23 && temperatura <= 30) {
    mensaje += `${temperatura} grandos es calurosa`;
}
else {
    mensaje = `La temperatura ${temperatura} grados centigrados no es ideal :c`;
}
console.log(mensaje);


//------------------Condicional Switch-----------------
/* 
La condicional Switch evalua una expresion y se compara con el 
valor de cada instancia en 'case' y se ejecuta las sentencias 
asociadas a es 'case' hasta encontrar la sentencia break o se
finalicen todas las sentencias de la condicional switch.

Sintaxis:
switch (expresion){
    case valor1:
        sentencia;
}
*/





/**
 * Establece la velocidad de un ventilador
 * @param {number} velocidad del ventilador
 * @return {number} mensaje de la velocidad establecida del ventilador
 */
const setVelocidadVentilador = (velocidad = 0) => {
    let mensaje;

    //La condicional utiliza la comparacion estricta(===)
    switch (parseInt(velocidad)) {
        case 0:
            mensaje = "apagado";
            break;
        case 1:
            mensaje = "velocidad baja";
            break;
        case 2:
            mensaje = "velocidad media"; //si se quita brek aqui brinda el resultado media
            break;
        case 3:
            mensaje = "velocidad alta";
            break;
        default:
            mensaje = "el nivel no existe";
            break;
    }
    return mensaje;
}
console.log(`La velocidad del ventilador esta en ${setVelocidadVentilador(1)}`);//baja
console.log(`La velocidad del ventilador esta en ${setVelocidadVentilador(8)}`);//no existe
console.log(`La velocidad del ventilador esta en ${setVelocidadVentilador(2)}`);// media
console.log(`La velocidad del ventilador esta en ${setVelocidadVentilador("2")}`);// alta
console.log(`La velocidad del ventilador esta en ${setVelocidadVentilador()}`);// apagado


//console.log(`valor: ? ${setVelocidadVentilador(prompt("velocidad", 1))}`);// baja para que user 
//determina velocidad por el usuario, evitar hacer comparaciones con decimales


//---------------Ejercicio Estaciones del año ----------------
/*
 Preguntar por el número de mes (prompt o DOM), del 1 al 12
 Desplegar de acuerdo al mes un Alert (mostrarlo en el DOM) la estación del año.

 mes 12,  1,  2 = invierno.
 mes  3,  4,  5 = primavera
 mes  6,  7,  8 = verano
 mes  9, 10, 11 = otoño 

 Realizar una versión con if-else-elseif y otra con switch.

*/

const mes = 2;
let message = "El mes es ";{ 

if (mes ===1 || mes ===2 || mes === 12) {
    message += `${mes} es invierno`;
    
} else if (mes >= 3 && mes <= 5) {
    message += `${mes} es primavera`;
    
} else if (mes >= 6 && mes <= 8) {
    message += `${mes} es verano`;
    
} else if (mes >= 9 && mes <= 11) {
    message += `${mes} es otoño`;

} else {
    message = `Mes invalido`;
}
 console.log(message)
}

console.log("=========================================")

/**
 * 
 * @param {number} mes 
 * @returns {number} 
 */
const estaciones = (mes = 1)=>{
    let msj;
switch (mes) {
    case 12:
    case 1:
    case 2:
        msj = "invierno"; 
        break;
    case 3:
    case 4:
    case 5:
        msj = "primavera";
        break;
    case 6:
    case 7:
    case 8:
        msj = "verano";
        break;
    case 9:
    case 10:
    case 11:
        msj = "otoño";
    break;
    default:
        msj = "la estación no existe";
        break;
    }
    return msj;
}

/* console.log(`La estacion es ${estaciones(8)}`);
console.log(`La estacion ${estaciones(prompt("Estacion", 8))}`);
 */

//-------------------------Operador ternario---------------
/*
es el unico operador de JS que tiene 3 operandos.
Generalmente se utiliza como opcion a la sentencia if-else.

 Sintaxis:
  condición ? expresiónSiCondiciónEsVerdadera : expresionSiCondiciónEsFalsa; 

*/
const pagoTarjetaCredito = false;

/* let msj;
if (pagoTarjetaCredito === true ) msj= "A realizado el pago de su TC";
// 
else msj = "No ha realizado el pago de TC";
 */
//             condici    ?operador ternario     comparacion: true -  false
//se usa en operaciones cortas que sean facil de leer

/* const msj = pagoTarjetaCredito === 0 ? "A realizado el pago de TC" : "No ha realizado el pago de TC";

console.log(`El usuario ${msj}`);
 */
// --------------- mini ejercicio  ----------------------------
/*
 Preguntar con prompt la edad del usuario: 20
 Si es >= 18 indicar en la consola "El usuario es mayor de edad";
 Si no cumple con la condición "El usuario no es mayor de edad".
*/

/* const userAge = parseInt(prompt ("Escribe tu edad", 17));
const comment = userAge >= 18 ? "es mayor de edad" : "no es mayor de edad";
console.log(`El usuario ${comment}`)
 */
//......... Cálculo del factorial de un número usando recursividad ...............

/* function factorialConRecursividad( numero ){
    if ( numero <= 0 ) {
        return 1;
    } else {
        console.log(`${numero} * ${numero-1}`);
        return numero * factorialConRecursividad( numero -1 );
    }
}

console.log(`El factorial recursivo de 5 es: 
${factorialConRecursividad(5)}`); */

function factorialConRecursividad(numero){
    return numero < 1 ? 1 : numero * factorialConRecursividad (numero - 1);
}

/* const factorialConRecursividad = numero => (numero <=0) ? 1 :numero * factorialConRecursividad(numero - 1);
console.log (`El factorial de 5 es; ${factorialConRecursividad(5)}`); */