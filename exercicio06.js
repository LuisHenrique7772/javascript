let anoNacimento = parseInt(prompt("digite o ano de nascimento"))

let let anoAtual = new Date().getFullYear()

let idade = anoAtual - anoNacimento

if( idade >= 18 ){
console.log(" ja pode ser preso ")
console.log(" sua idade é " + idade)
}
else{
console.log(" voce é de menor")
console.log("sua idade é : " + idade )
}
