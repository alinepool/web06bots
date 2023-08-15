console.log("Sesion js06 Manipulacion del DOM");

/**
 * Modificar un elemento HTML por medio de su ID
 */
const findElementById = () => {
    const title = document.getElementById("title");
    console.log(title);
    console.log( typeof title);
    console.log(title.innerHTML);
    //title.innerHTML = `Generation - Sesión JS 06`;
    title.innerHTML = `<span class="text-primary"> Generation </span> - Sesión JS 06`;
}

findElementById();

//--------------------ENCONTRAR EELEMENTOS POR SU ETIQUETA (TAG)-----------------

const changeElementsByTagName = () =>{
    const unorderList = document.getElementsByTagName("li"); //trae la collecion de elementos
    console.log(unorderList);//HTML Colleccion

    for(const listItem of unorderList){
        listItem.innerHTML = `<span class= "text-success fs-4" > ${listItem.innerHTML}  👽 </span>`
    }
}
changeElementsByTagName();

//--------------------Uso de selector universal--------------
//querySelector

const findElementByQuerySelector = () =>{
    //const element = document.querySelector ( "#title"); //seleccionar por ID
    //const element = document.querySelector ( ".text-warning"); //seleccionar por clase
    //const element = document.querySelector ( "ul"); //seleccionar por tag
    //const element = document.querySelector ( "li"); //seleccionar por tag
    const element = document.querySelector ( "h1 span"); //seleccionar por tag
    console.log(element);
}

findElementByQuerySelector();

//----------------Crear nuevo elemento de HTML----------------
//appendChild

const newElement = () => {
    const newElement = document.createElement ("div"); //<div></div>

    newElement.innerHTML = `La ch30 le gusta:
    <ul>
        <li> El Helado </li>
        <li> El chisme </li>
        <li> Los corridos tumbados </li>
        <li> Escuchar a mau </li>
        <li> Ser mejores amigos de Anneth</li>
    </ul>
    `;

    const descriptionch30 = document.querySelector("descriptionch30");
    descriptionch30.appendChild(newElement);
}
newElement();