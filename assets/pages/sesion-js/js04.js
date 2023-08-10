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


for (let equipo = 0; equipo < personasEnCh30.length /filas/; equipo++) {
    for (let persona = 0; persona <  personasEnCh30[ equipo ].length; persona++) {
        console.log( personasEnCh30[ equipo ][ persona ] );    
    }
}