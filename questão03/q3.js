var contador = 1
var resposta = document.getElementById("respostas")
class Pessoa{
  constructor(idade, nota){
      this.idade = parseFloat(idade)
      this.nota = nota
  }
}


function calcular(){

    let linhas = document.getElementById('minha-tabela').getElementsByTagName('tr') 
    let pessoas = []
    let media_idade_otimo = 0
    let total_regular = 0
    let idade_otimo = 0
    let total_otimo = 0
    let total_bom = 0

    if(linhas.length > 1){
        for (let index = 1; index < linhas.length; index++) {
           
            const dados = linhas[index].innerText.split("\t")
            pessoas.push(new Pessoa(dados[1],dados[2]))
          
        }
        for (const pessoa of pessoas) {
            console.log(pessoa.idade,pessoa.nota)
                if (pessoa.nota === '3'){
                    media_idade_otimo += pessoa.idade
                    total_otimo++
                }
                if(pessoa.nota === '1'){
                    total_regular++
                }
                if(pessoa.nota === '2'){
                    total_bom++
                
                }
        }
      
        console.log("A média das idades das pessoas que responderam 'ótimo' é de: " + Math.round(media_idade_otimo/total_otimo))
        console.log("A quantidade de pessoas que responderam 'regular': " + total_regular)
        console.log(`O total de pessoas que responderam 'bom' foi ${total_bom} e o percentual ${((total_bom*100)/pessoas.length).toFixed(2)}%`)

        resposta.innerHTML += "A média das idades das pessoas que responderam 'ótimo' é de: " + Math.round(media_idade_otimo/total_otimo).toFixed(2) + "<br>"
        resposta.innerHTML += `A quantidade de pessoas que responderam 'regular': ${total_regular} <br>`
        resposta.innerHTML += `O total de pessoas que responderam 'bom' foi ${total_bom} e o percentual ${((total_bom*100)/pessoas.length).toFixed(2)}% <br>`
        }
    else{
        alert("Tabela vazia")
    }
}

function checkDados(){
    resposta.innerHTML = ""
    if (contador < 16){
        let modal = document.querySelector("#exampleModal")  
        let idade = document.querySelector("#idade").value
        let nota = document.querySelector("#nota").value
       
    
        if ( idade!=="" && nota !==""){
            let tabela = document.querySelector("#dados-tabela")
            let linha = tabela.insertRow() 
            linha.insertCell(0).innerText = `${contador++}`
            linha.insertCell(1).innerText = `${idade}`
            linha.insertCell(2).innerText = `${nota}`
           
        }
    }else{
        if(confirm("Lista cheia")){
            limparTabela()
            checkDados()
        }
    }
}

function gerarAleatorio(){
    resposta.innerHTML = ""
    limparTabela()
    if (contador > 0){
        contador = 1
    }
    let tabela = document.querySelector("#dados-tabela")
    for (i = 0; i <15; i++){
        let linha = tabela.insertRow() 
        linha.insertCell(0).innerText = `${contador++}`
        linha.insertCell(1).innerText = `${getRandomInt(16,60)}`
        linha.insertCell(2).innerText = `${notaAleatorio()}`
    } 

}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}
function notaAleatorio(){
  const nota = ['1','2','3']
  let sorteio = Math.floor(Math.random() * nota.length) 
  return  nota[sorteio]
}

function limparTabela(){
    let tabela = document.querySelector("#dados-tabela")
    while (tabela.hasChildNodes()) { 
        tabela.removeChild(tabela.lastChild); //exclui as linhas antigas mantendo sempre 15
    }  
    contador = 1  
}
