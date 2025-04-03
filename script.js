let titulo = document.getElementById("titulo");
console.log(titulo);
titulo.textContent = "Meus esportes favoritos";
titulo.style.color ="blue";

let descrição = document.getElementsByClassName("descrição");
console.log(descrição[0]);

let descrição1 = document.getElementsByClassName("descrição1");
console.log(descrição[1]);
 
let descrição2 = document.getElementsByClassName("descrição2");
console.log(descrição[2]);

let descrição3 = document.getElementsByClassName("descrição3");
console.log(descrição[3]);

let descrição4 = document.getElementsByClassName("descrição4");
console.log(descrição[4]);

let li = document.getElementsByTagName("li");
console.log(li[0]);

let li1 = document.getElementsByTagName("li1");
console.log(li[1]);

let li2 = document.getElementsByTagName("li2");
console.log(li[2]);

let li3 = document.getElementsByTagName("li3");
console.log(li[3]);

let li4 = document.getElementsByTagName("li4");
console.log(li[4]);

let tituloQS = document.querySelector("#titulo");
let paragrafoQS = document.querySelectorAll(".descrição");
console.log("Exibindo com Query Selector" + tituloQS.textContent);

const lista = document.querySelector("ul");
const novoEsport1 = document.createElement("li");
novoEsport1.textContent = "Ping Pong";
novoEsport1.classList.add("esporte");

const novoEsport2 = document.createElement("li");
novoEsport2.textContent = "Ginástica";
novoEsport2.classList.add("esporte");

lista.appendChild(novoEsport1);
lista.appendChild(novoEsport2);