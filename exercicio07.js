let valorTotal = parseFloat(prompt("ïnforme o valor total da compra: "))

let desconto 

if(valorTotal <= 100){
    desconto = 0 
    console.log(" o valor do desconto foi: " + desconto)
}
else if(valorTotal <= 200 ){
desconto = 0.1
console.log(" o valor do desconto foi: " + (desconto*100)) + "%"

}
else{
    desconto = 0.2 
    console.log(" o valor do desconto foi: " + (desconto*100)) + "%"
}
let valorFinal = valorTotal - (valorTotal*desconto)
console.log(" o valor final da compra com o desconto: R$" + valorFinal.toFixed(2))