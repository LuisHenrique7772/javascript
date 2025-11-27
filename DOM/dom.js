let elementosPorClass = document.getElementsByClassName("text")
let elementoPorID = document.getElementByID("formulário")
let elementoPorTag = document.getElementByTagName("p")


console.log(elementosPorClass);
console.log(elementosPorID);

console.log(elementoPorTag);
console.log(elementoPorTag[0].textcontent);

elementoPorTag[0].textcontent = "luis lindo";// modifica o conteúdo do elemento
elementoPorTag[0].style.color = "red"; // modifica a cor do elemento
elementoPorTag[0].style.color = "30px"; 



// exiba o 2 elemento da variavel elementos

