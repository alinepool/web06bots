console.log("Pagina en contrucción con Patricio Estrella");

function clickPatricio(){
    alert("La mayonesa es un instrumento?");
}

function changeColor( elementHtml, color ) { /* elementHtlm trabaja conthis para realizar la accion */
    // alert("Que emoción, voy a cambiar mi color")
    console.log(elementHtml);
    console.log(color);
    
    elementHtml.style.color = color;
}

function changeColorWithPrompt( elementHtml) {
    const color = prompt("Dime el color en inglés", "yellow");
    changeTextOfUserColor(elementHtml, color);
    changeColor( elementHtml, color );
}

function changeTextOfUserColor(element, color){
    element.innerHTML = "<h3>Ahora soy <em>" + color + "</em></h3>";
}

function resetColor(){
    const refRedColor = document.getElementById("red-color"); /* al ser un objeto se le da un atributo y un metodo */
    const refGreenColor = document.getElementById("green-color"); /* al ser un objeto se le da un atributo y un metodo */
    const refPurpleColor = document.getElementById("purple-color");
    const refUserColor = document.getElementById("user-color");

    /* refRedColor.style.color = "black"; */
    changeColor(refRedColor, 'black');
    changeColor(refGreenColor, 'black');
    changeColor(refPurpleColor, 'black');
    changeColor(refUserColor, 'black');
    changeTextOfUserColor(refUserColor, 'black');
}

function changeName(){
    const newName = prompt("¡Hola! ¿Cual es tu nombre?");
    const refGretting = document.getElementById("gretting");
    refGretting.innerHTML = "Hola  ${newName}";
}