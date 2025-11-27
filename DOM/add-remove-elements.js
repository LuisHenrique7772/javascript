let secao = document.getElementsByTagName("section");
let novoParagrafo = document.createElement("p");//cria um elemento no meu HTML
let formulárioElemento = document.getElementById("formulário")


novoParagrafo.textContent = "paragrafo criado via JS" //poe um conteudo no p


secao[0].appendChild(novoParagrafo)

formulárioElemento.removeChild();


// document.body.appendChild(novoParagrafo)
