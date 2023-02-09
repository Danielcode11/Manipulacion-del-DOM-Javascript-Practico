const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
//const p = document.querySelector('p');
//const parrafito = document.getElementsByClassName('parrafito'); // . para seleccionar una clase
//const pid = document.getElementById('pid'); // # para seleccionar un id 
const input1 = document.querySelector('#caluclo1');
const input2 = document.querySelector('#caluclo2');
const btn = document.querySelector('#btncalcular');
const pResult = document.querySelector('#result');

form.addEventListener('submit', sumarInputValues);

function sumarInputValues(event) {
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}












//console.log(input.value);

// imprimir o console log de todos al tiempo
//console.log({
//    h1,
//    p,
//    parrafito,
//    pid,
//    input
//});

//h1.innerHTML = 'patito <br> Feo';

//console.log(h1.getAttribute('class'));  //Get para leer el atributo
//h1.setAttribute('class', 'rojo');  //Set Modificar

//h1.classList.add('azul') //agregar clase
//h1.classList.remove('verde')  //Eliminar clase
// h1.classList.toggle('verde');
// h1.classList.contains('verde');

//input.value = "456"

//const img = document.createElement('img');
//img.setAttribute('src', 'https://husky-siberiano.fandom.com/es/wiki/Caracter%C3%ADsticas?file=Husky_blanco.jpg');
//console.log(img);

//pid.append(img);
