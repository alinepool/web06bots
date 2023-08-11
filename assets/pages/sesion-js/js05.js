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


//--------------Operadores logicos && y || -----------------
/*
&& : 

*/

