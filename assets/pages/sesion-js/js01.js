console.log("Bienvenido a la sesion JS01")

//Tipos de datos en Js
//No primitivos:
//Object

//tipo de dato strign
const stringData = "Holi crayoli";
console.log( stringData );

//tipos de dato Number:
//numeros positivos, negativos, decimales, NaN, +Infinity, -Infinity
//para un salto de linea se puede utilizar \n, en template string no es necesario
console.log( `Tipos de datos number: ${12}, ${-6}, ${0.456}, ${5*"hola"}, ${45/0}, ${-45/0}`);
console.log( " --\"texto entre comillas dobles\"--");
console.log( ' -- \n "texto entre comillas dobles"--');

console.log(`Valor maximo representable en JavaScript : ${Number.MAX_VALUE}`)//1.7976931348623157e+308
console.log(`Si el valor es mayor a MAX_VALUE como 1.79769 : ${1.79e310}`)

console.log(`Valor (Entero) maximo seguro en JavaScript : ${Number.MAX_SAFE_INTEGER}`);//9007199254740991
//Cuando se realizan operaciones que exceden los límites de Max_SAFE_INTEGER
//se produce una perdida de presición.
console.log(` MAX_SAFE_INTEGER + 1: ${ Number.MAX_SAFE_INTEGER + 1 } ` )//9007199254740992
console.log(` MAX_SAFE_INTEGER + 2: ${ Number.MAX_SAFE_INTEGER + 2 } ` )//9007199254740992
console.log(` MAX_SAFE_INTEGER + 3: ${ Number.MAX_SAFE_INTEGER + 3 } ` )//9007199254740994 
console.log(` MAX_SAFE_INTEGER + 4: ${ Number.MAX_SAFE_INTEGER + 4 } ` )//9007199254740996 

//tipos de datos BigInt
//Sirven para representar valor numericos enteros de los que el tipo number
//no puede representar o no es seguro

console.log( "Operaciones con BigInt ");
const myBigInt = 9007199254740991n 
console.log(` MAX_SAFE_INTEGER + 1: ${ myBigInt + 1n } ` )//9007199254740992 
console.log(` MAX_SAFE_INTEGER + 2: ${ myBigInt + 2n } ` )//9007199254740993
console.log(` MAX_SAFE_INTEGER + 3: ${ myBigInt + 3n } ` )//9007199254740994 
console.log(` MAX_SAFE_INTEGER + 4: ${ myBigInt + 4n } ` )//9007199254740995 

//tipo de dato boolean
//se tiene 2 estados true/false
console.log(`Tipo de dato verdadero: ${true}`);
console.log(`Tipo de dato falso: ${false}`);

//tipo de datp undefined
//una variable que es declarada pero el tipo de dato no es definido
let myVar;
console.log(`Tipo de dato undefined: ${myVar}`);

//tipo de dato null
//Una variable que intensionalmente se borra el tipo de dato
let myVarNull;//undefined
console.log(`Tipo de datos myVarNull: ${ typeof myVarNull }`);//undefined
myVarNull = "No me gusta YLE";
console.log(`Tipo de datos myVarNull: ${ typeof myVarNull }`);//string
myVarNull = null;
console.log(`Tipo de dato myVarNull: ${typeof myVarNull }`);//object
//no menciona el tipo de dato debido a un error de lenguaje
console.log(`myVarNull es null: ${ myVarNull === null }`)//true

//tipo de dato symbol
//Representa un valor unico que se puede utilizar como clave en un objetos o identificador
const mySymbol = Symbol();
const mySymbol2 = Symbol();
const myKey = "codigo";
console.log(`mySymbol === mySymbol2 ${mySymbol === mySymbol2}`)

const myObj = {
    clave : "valor",
    [mySymbol] : 16,
    myKey : 123,
    [myKey] : 567,
}
console.log(myObj)

const cancionesCh30 = ["Trouble", "Saoko", "Rock Dj"];
//tipos de datos Object
const misDatosDePerfil = {
    name: "Sergio",
    lastname: "Torres",
    age: 39,
    isBelicosos: false,
    fullName : function(){
        return `Nombre completo de Sergh: ${this.name} ${this.lastname}`;
/*         return "Nombre completo de Sergh: "  + this.name +" " + this.lastname; */

    },
    //Agregar una funcion que muestre el nombre completo en mayusculas
    fullNameToUpperCase : function(){
        return `Nombre completo de Sergh: ${this.name.toUpperCase()} ${this.lastname.toUpperCase()}`;
    }
    
}

console.log( misDatosDePerfil);
console.table(misDatosDePerfil);
console.log(misDatosDePerfil.fullName );// no es correcto
console.log(misDatosDePerfil.fullName ());// se llama a la funcion con ()
console.log( misDatosDePerfil.fullNameToUpperCase());

//--------------------------------------------------------
//Conversion explicita de datos
const horaDescanso = 13.05;
console.log ("Hora Descanso " + horaDescanso + "h." );//concatenacion
const horaDescansoTxt = String ( horaDescanso );
console.log("Hora Descanso " + horaDescansoTxt + " h.");//concatenacion
console.log("Hora de retorno: " + horaDescanso + .15);//13.05.15

const colorVerde = 0x008000; //Represebtacion decimal: 32768
console.log(`El valor RGB del color verde es: ${colorVerde}`);
console.log(`El valor RGB del color verde es: ${colorVerde.toString()}`);
console.log(`El valor RGB del color verde es: ${colorVerde.toString(16)}`);
console.log(`El valor RGB del color verde es: ${colorVerde.toString(16).padStart(6,"0") }`);

//Conversión a Number
const myAgeTex = "25";
const sumatoria = 10 + myAgeTex;//1025
console.log(`Valor de la sumatoria ${sumatoria}`);//1025
console.log(`Valor de la sumatoria ${10 + Number(myAgeTex)}`);//35

console.log(`Valor de la sumatoria usando Number(): ${10 + Number(myAgeTex) }` );//35
console.log(`Valor de la sumatoria usando Number(): ${10 + parseInt(myAgeTex) }` );//35
console.log(`Valor de la sumatoria usando Number(): ${10 + parseFloat(myAgeTex) }` );//35
console.log(`Valor de la sumatoria usando Number(): ${10 + (+myAgeTex)}`)//35


// Diferencias entre usar Number() y parseInt()
// - Number convierte enteros y decimales
// - parseInt convierte solo la parte entera
console.log( parseInt(100.567)); // 100
// - Number devuelve NaN si la cadena contiene algún caracter no numérico
// - parseInt convierte los enteros hasta encontrar una caracter no numérico
//       Si la entrada no comienza con un valor numérico, devuelve NaN
console.log( Number("123 - 456" ) ); // NaN
console.log( parseInt("123 - 456" ) ); // 123
console.log( parseInt("$123 - 456" ) ); // NaN
console.log( "parseInt( '$123 - 456'.slice(1) ) :" +  parseInt( "$123 - 456".slice(1) ) ); // 123
console.log( Number( true ) ); // 1
console.log( parseInt( true ) ); // NaN

//Conversión a booleano
//En la conversion de bopolean los siguientes valores son false:
//"", 0, null, undefiend
console.log("Boolean(1): " + Boolean(1) );//true
console.log("Boolean('d'): "+ Boolean(" " ));//true

//
