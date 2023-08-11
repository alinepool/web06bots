console.log("Sesión JS04 matrices y bucles");
console.log("Ni perdón, ni olvido.... reto para Ed");

//Declaramos un arreglo de 2 dimensiones(matriz).
//Arrays anidados.
//[  []  ,  []   ,   []   ]

const personasEnCh30 = [
    ["Luis", "Allan", "Anneth", "Maryluz"], /* ByteMe */
    ["Ed", "Jimena", "Marifer", "Leo"], /*PerryCode */
    ["Lu", "Leo", "Daniel", "Gina"] /*BugBusters */
];

console.log(`Integrantes de BugBusters son: ${personasEnCh30[2]}`);
console.log(`Integrantes de BugBusters son: ${personasEnCh30[2].join(", ")}`);
                                                        //Feliz Cumpleaños
                                                        //Fila Columna
console.log(`Integrantes de BugBusters son: ${personasEnCh30[2][0]}`);
/* 
personasEnCh30[1][3]= "Brayan"; */
personasEnCh30[1].splice (3 , 1, "Brayan");
console.table(personasEnCh30);

console.log(personasEnCh30[0][2] ); // anet

console.log( personasEnCh30[0][2]  ); // Anneth

// Este for itera sobre los equipos integradores
for (let equipo = 0; equipo <  personasEnCh30.length  ; equipo++) {  
    console.log(`Equipo ${equipo} : ${personasEnCh30[equipo]}` )  ;
    
    // Este for itera sobre las personas
    for( let persona = 0; persona < personasEnCh30[equipo].length ; persona++ ){
     console.log(`Participante: ${ personasEnCh30[equipo][ persona ] }`);
    } 
}

// ----------------------- Uso de for... of ------------------
/* Ejecuta una sentencia por cada elemento de un objeto iterable(array, colección, string).
Sintaxis:
    for (const iterator of object) {
    
    }
*/
console.table( personasEnCh30 ); 

const myPet = "Kraken";
for (const character of myPet  ){
    console.log( character );
}

myPet.split("").forEach( character => console.log( character ));


for (const equipo of personasEnCh30 ) {
    console.log( equipo ); // Arreglo de equipos
    for (const persona of equipo) {
        console.log( persona ); //  Persona de cada equipo
    }
}

// ---------------- forEach -------------------------
/*
 Método que se utiliza para iterar colecciones, arreglos.
 Permite ejecutar una función por cada elemento del arreglo.

*/

console.table( personasEnCh30 ); 

function itinerarEquipos(equipo, indice, arreglo) {
    console.log(`${indice}: ${equipo}`)
    quipo.forEach(itinerarPersonas);
    return equipo;//arreglo de cada equipo 
}

function itinerarPersonas(persona, indice){
    console.log(`Indice P ${indice}: ${persona}`)
    return persona;
}
// personasEnCh30.forEach(  itinerarEquipos );

personasEnCh30.forEach( (equipo, indexEquipo) => 
                    equipo.forEach( (persona, indexPer)=> 
                    console.log(` [${indexEquipo}][${indexPer}] : ${persona}` )));
 
// Solo se imprimi el elemento (persona)                    
//personasEnCh30.forEach( equipo => equipo.forEach( persona=> console.log(`${persona}`)));

for (let index = 0; index < 10; index++) {
    if (index > 5 )break;
    console.log(index);
    
}

//realizar tablas de multiplicar del 1 al 5
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10 ; j++) {
           console.log(`${i} * ${j} = ${ i * j}`);
    }
}

console.log("================Uso de break===========")
//Realizar la multiplicacion hasta el 4
//1*1, 1*2, 1*3

rompeCicloSuperior:
for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 10 ; j++) {
        if(i===2 && j == 5)break rompeCicloSuperior;
           console.log(`${i} * ${j} = ${ i * j}`);
    }
}

console.log("================Uso contunue ===========")
/*
 Termina la ejecución en la iteración actual y continua con la próxima iteración.
 ( o en el tag que se indique).
*/
console.log("===== Uso de continue con tag =======")
// Realizar la multiplicación hasta el  3
// 1*1, 1*2, 1*3 ..... 2*3... 5*3
continuaCicloSuperior: 
for (let i = 1; i <= 5; i++) {    
    for (let j = 1; j <= 10; j++) {
        if ( j > 3 ) continue continuaCicloSuperior;
        console.log(`${i} * ${j} = ${ i * j }`);        
    }    
}

let counter = 1;

while () {
    console.log(`Veces que has continuado: ${counter}` );
}

// ============== Ciclo Do-While ======================
/*
 Crea un bucle que ejecuta una sentencia mientras la condición especificada
 se cumpla. La evaluación se realiza después de ejecutar la sentencia.
 Por lo tanto, la sentencia se va a ejecutar por lo menos una vez.

 Sintaxis:

    do {
        sentencias;
    } while( condición );

*/

let valor= -2;
while (valor < 5) {
    console.log(`Valor en While ${valor}`);
    valor ++;
}