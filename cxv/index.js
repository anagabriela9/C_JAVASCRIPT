/* query selector te selecciona el primer elemento que encuentre
. para clase
# para id 

es más cómodo el querySelector que el getElementId*/
const element = document.querySelector("#card-3");
console.log(element);

const element1 = document.querySelector(".card");
console.log(element1);

const element2 = document.querySelector(".card header");
console.log(element2);

const element3 = document.querySelector(".card:nth-child(2)");
console.log(element3);

const elements = document.querySelectorAll(".card");
console.log(elements);

//por etiqueta
const elements1 = document.querySelectorAll("footer");
console.log(elements1);

//por name
const elements2 = document.querySelectorAll("[name=\'color\'");
console.log(elements2);

const elementsByCN = document.getElementsByClassName("card");
const elementsByQSA = document.querySelectorAll(".card");

console.log(elementsByCN);
console.log(elementsByQSA);