let dias = window.prompt( "escreva os dias da semana")

switch( dias){
    case "1":
 console.log( function dias );
 break;
 case "2":
 console.log( function escolhaUmNumero )
 break;

 case "3":
 console.log( function idade )
 break;

 case "4":
 console.log( function numerosParesDe0a20 )
 break;

 case "5":
 console.log( function anoNacimento )
 break;

 default:
    console.log (" esse número não existe :(")
    break;
}


// ----------------------------------------------------
function dias(){
let dias = window.prompt( "escreva os dias da semana")

switch( dias){
    case "1":
 console.log( "segunda-feira" );
 break;
 case "2":
 console.log("terça-feira")
 break;

 case "3":
 console.log("quarta-feira")
 break;

 case "4":
 console.log("quinta-feira")
 break;

 case "5":
 console.log("sexta-feira")
 break;

 case "6":
 console.log("sabado")
 break;

 case "7":
 console.log("domingo")
 break;

default:
    console.log ("não é numero de 1 a 7")
    break;
}}
// ----------------------------------------------------
function  escolhaUmNumero(){
let n = parseInt( prompt(" escolha um numero"))
for(let t = 1 ; t <= 10; t ++){
console.log( t + "X" + t + " = " + (numero*t))

}}
// ----------------------------------------------------
function idade(){
let idade = parseInt (prompt(" digite uma idade:"))

while(idade < 18 ){
idade = parseInt(prompt(" voce é menor de idade "))
}

console.log("voce é maior de idade, sua idade é:" + soma)}
// ----------------------------------------------------
function numerosParesDe0a20(){
let num = 0
console.log("numeros  pares de 0 a 20 ")

while ( num <= 20){
    if(num%2 == 0)
    console.log( num )
num
}}
// ----------------------------------------------------

function anoNascimento(){

let anoNacimento = parseInt(prompt("digite o ano de nascimento"))

let  anoAtual = new Date().getFullYear()

let idade = anoAtual - anoNacimento

if( idade >= 18 ){
console.log(" ja pode ser preso ")
console.log(" sua idade é " + idade)
}
else{
console.log(" voce é de menor")
console.log("sua idade é : " + idade )
}}




