let nota1 = parseFloat(prompt("infrorme a primeira nota: "))
let nota2 = parseFloat(prompt("infrorme a seunda nota: "))
let nota3 = parseFloat(prompt("infrorme a terceira nota: "))
let nota4 = parseFloat(prompt("infrorme a quarta nota: "))

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log ("a média do aluno é: " + media )

if(media =>7){
 console.log("aprovado")
}else if (media < 7 && media >= 5){
    console.log("recuperaçao")
}
else{
    console.log("reprovado")
}