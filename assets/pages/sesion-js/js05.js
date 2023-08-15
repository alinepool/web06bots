console.log("JS 05 Condiciones y expresiones");

//-----------------Operadores aritmeticos--------------
/* adicion +
multiplicacion *
substraccion -
division /
resto %
exponencial ** --- Math.pow() saca raiz cuadrada seno coseno Math.pow(2, 3) 2**3
*/

//-----Procedencia de operadores ------------------
// link mozilla

let operaciones = 5 * 2 + 3 ** 2 - 4;
console.log(operaciones);
console.log(4 % 3 + 2 * 3 / 2 - 1);

//-------Operadores de asignacion ----------------------
/*
Asigna un valor a su operador izquierdo basandose en el valor de su derecha: 

asignacion =

Operadores abreviados( compuestos):
op1 += op2 -> op1 + op2
op1 -= op2 -> op1 - op2
op1 *= op2 -> op1 * op2
*/

let asignacion = 3;
console.log(asignacion += 3 * 3 ** 3 + 10); //94
console.log(asignacion);//94
console.log(asignacion += 3 * (3 ** 3) + 10); //  += 94 + 91   185
console.log(2 ** (3 ** 2));// en la potencia de hace primero la derecha 512 
//Es preferible hacerlo sin parentesis ya que se ve mas limpio

//--------------Operador unario---------------
//Solo actuan sobre un operando
//Negacion
let numero = 3;
let dinero = -numero; // -3

//Conversion numerica
let pago = + dinero; // -3 No se cambia el signo
let intereses = +  "5.23"; // numerico
console.log(typeof (intereses));//
intereses = 3;
console.log(intereses += 5 + + "3");// 11

//Operador logico not
let isActive = !true; // false

// operador de incremento y decremento en unidad.
/*
        Operador de pre-incremente y pre-decremento
    ++ valor
    -- valor

        Operador de post-incremento y post-decremento 
    valor  ++
    valor --
*/
let number = 10;
++number; // preincremento
console.log(number);//11
number++; //post-incremento
console.log(number)//12

number = 20;
console.log(++number);//21
console.log(number++);//21
console.log(number);//22

let index = 0;
for (   ; index < 5; index++) {
    console.log(index);

}
console.log("Valor de index" + index);

let a = 0, b = 0;
for (    ; a < 3; b = a++) {
    console.log(a, b);
}
console.log(a, b); // 3, 2

let x = 3;                             //x   y
let y = ++x;                           //4,  4
console.log(`x : ${x++} y: ${++y}`);   //4   5
console.log(`x : ${x} y: ${y}`);       //5   5


// ---------------- Operadores lógicos && y || ---------------
/*
 También son conocidos como operadores de corto circuito ( short-circuit operators ).

 &&  : La evaluación se detiene tan pronto como se encuentra un operador falso.
       Ya no se evalua el segundo operando y se retorna la expresión de OP1.
 OP1 && OP2 Si OP1 es verdadero, se retorna la expresión de OP2.
 OP1 || OP2 Si OP1 es verdadero, se retorna la expresión de OP1.

*/

const va = true, vb = false , vc = true; // cont va, const vb, const vc
const n1 = n2 = n3 = true; // const n1, var n2, var n3.
console.log( va || vb && vc ); // true
// Conversión a booleano
// En la conversión de boolean los siguientes valores son false:
// "", 0, null, undefined, NaN

console.log(  va && "Holi Crayoli" ); // "Holi Crayoli"
console.log(  vb && "Holi Crayoli" ); // false
console.log(  NaN && "Holi Crayoli" ); // NaN
console.log(  "false" && "Holi Crayoli" ); // "Holi Crayoli"
console.log(  "" && "Activado" ); // ""
console.log(  "Activado" && "" ); // ""
console.log(  "Mau" && "Activado" ); // "Activado"

console.log(  "Activado" || "" ); // Activado
console.log(  "activado" || varSinDeclarar ); // activado

const person = {
  name : "Leo",
  lastname : "Ronaldo",
  age : 25,
  //occupation : "Full-Stack developer",
};

console.log(`nombre: ${ person.name }`);
console.log(`nombre: ${ person["name"] }`);

/* if ( person.occupation === undefined || person.occupation === "" ){
  person.occupation = "Software Enginner";
} */
// const occupation = person.occupation     ; // Software Enginner 

// const occupation = person.occupation === undefined ? "Software Enginner" : person.occupation; // Software Enginner 

const occupation = person.occupation ||  "Software Enginner"; // Software Enginner 
// const occupation = person.occupation ??  "Software Enginner"; // operador nullish Coalescing

console.log(`Ocupación: ${ occupation }`); // Software Enginner

//---------Comparacion estricta----------
/*
=== Estrictamente se debe comparar el valor y el tipo de dato
!== Estrictamente diferemte, debe ser diferente en valor y tipo

*/
console.log( "23"=== 23 ); //false
console.log( "true"=== true );//false
console.log( "true"== true );//false NaN == 1
console.log( "45" !== 23 ); //true

//---------Comparacion estricta----------
/*
Es una expresion en JS que hace posible extraer  datps de arreglos u objetos
y nos ayuda a realizar asignaciones mas complejas 
*/

let dataA = 10;
let dataB = 20;
console.log(`a: ${dataA}, b: ${dataB}`);
//Interccambiar datos A:20, B:10
/*
let a = 10
let b = 20

temp = a
a = b
b = temp */

[dataA, dataB ] = [dataB, dataA];
console.log(`a:${dataA}, b: ${dataB}`);

const car = {
    model :"Vento",
    year :"2023",
    brand :"VW",
    color : "red",
    price : 320_000,
    additionalInfo : {
        bluetooth : true,
        crusedrive : true,
        gps : false,
    }
}

/* console.log(`Modelo : ${ car.model }`);//Vento
console.log(`Año : ${ car.year }`);//2023
console.log(`Modelo : ${car.model}, Año : ${ car.year }`);//2023 */


//const carModel = car.model;
//const carYear = car.year;
/* const { year, model : carModel } = car;

console.log(`Modelo : ${ model}, Año : ${year}`);
console.log(`Tiene bluetooth : ${ car.additionalInfo.bluetooth ? "si" : "no"}`); */

// ------------------  ejercicio ------------------------
/*
   Hacer una función que realice la división de 2 números
   y entregue (return) en entero el cociente y residuo.

   Llamar a la función y mostrar en la consola el resultado.
*/

const num1 = 9;
const num2 = 4;
function div (num1,  num2) {
    let cociente = parseInt (num1/ num2);
    let residuo =  num1 % num2;
    return{cociente, residuo};
}
console.log(`división : ${div(num1,num2).cociente}, residuo:${div(num1,num2).residuo}`);
