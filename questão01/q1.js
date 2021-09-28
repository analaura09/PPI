var contador = 1
var resposta = document.getElementById("respostas")
class Pessoa{
    constructor(altura, peso, sexo){
        this.altura = parseFloat(altura)
        this.peso = parseFloat(peso)
        this.sexo = sexo
    }
}

function calcular(){

    let linhas = document.getElementById('minha-tabela').getElementsByTagName('tr') 
    let pessoas = []
    let media_altura = 0
    let mulher_mais_alta = 0
    let homem_mais_baixo = 3
    let total_homens = 0
    let total_mulheres = 0

    if(linhas.length > 1){
        for (let index = 1; index < linhas.length; index++) {
            const dados = linhas[index].innerText.split("\t")
            pessoas.push(new Pessoa(dados[1],dados[2],dados[3]))
            

        }
        for (const pessoa of pessoas) {
            console.log(pessoa.altura,pessoa.peso,pessoa.sexo)
            media_altura += pessoa.altura
            if (pessoa.sexo === 'F' && pessoa.altura > mulher_mais_alta){
                mulher_mais_alta = pessoa.altura
            }
            if(pessoa.sexo === 'M' && pessoa.altura < homem_mais_baixo){
                homem_mais_baixo = pessoa.altura
            }
            if(pessoa.sexo === 'M'){
                total_homens ++
            }
            else{
                total_mulheres++
            }
        }
        console.log(`A média de altura é: ${(media_altura/pessoas.length).toFixed(2)}`)
        console.log(`A mulher mais alta é ${mulher_mais_alta}`)
        console.log(`O homem mais baixo é ${homem_mais_baixo}`)
        console.log(`O total de homens é ${total_homens} e o percentual ${((total_homens*100)/pessoas.length).toFixed(2)}%`)
        console.log(`O total de mulheres é ${total_mulheres} e o percentual ${((total_mulheres*100)/pessoas.length).toFixed(2)}%`)
        resposta.innerHTML = "A média de altura é: "+(media_altura/pessoas.length).toFixed(2) + "<br>"
        resposta.innerHTML += `A mulher mais alta é ${mulher_mais_alta} <br>`
        if (homem_mais_baixo === 3){
            homem_mais_baixo = 0
        }
        else{
            resposta.innerHTML += `O homem mais baixo é ${homem_mais_baixo} <br>`
        }
        resposta.innerHTML += `O total de homens é ${total_homens} e o percentual ${((total_homens*100)/pessoas.length).toFixed(2)}% <br>`
        resposta.innerHTML += `O total de mulheres é ${total_mulheres} e o percentual ${((total_mulheres*100)/pessoas.length).toFixed(2)}%`
    }
    else{
        alert("Tabela vazia")
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
        linha.insertCell(1).innerText = `${getRandomArbitrary(1.5,2)}`
        linha.insertCell(2).innerText = `${getRandomArbitrary(40, 100)}`
        linha.insertCell(3).innerText = `${sexoAleatorio()}`
    } 

}

function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }

function sexoAleatorio(){
    const sexo = ['M','F']
    sorteio = Math.floor(Math.random() * sexo.length) //aleatoriedade
    return  sexo[sorteio]
}

function limparTabela(){
    let tabela = document.querySelector("#dados-tabela")
    while (tabela.hasChildNodes()) { 
        tabela.removeChild(tabela.lastChild); //exclui as linhas antigas mantendo sempre 15
    }  
    contador = 1  
}

function checkDados(){
    resposta.innerHTML = ""
    if (contador < 16){
        let modal = document.querySelector("#exampleModal")  
        let alt = document.querySelector("#altura").value
        let peso = document.querySelector("#peso").value
        let sexo = document.querySelector("#datalistOptions").getElementsByTagName("option")[1].value
    
        if ( alt !=="" && peso !=="" && sexo !==""){
            let tabela = document.querySelector("#dados-tabela")
            let linha = tabela.insertRow() 
            linha.insertCell(0).innerText = `${contador++}`
            linha.insertCell(1).innerText = `${alt}`
            linha.insertCell(2).innerText = `${peso}`
            linha.insertCell(3).innerText = `${sexo}`
        }
    }else{
        if(confirm("Lista cheia")){
            limparTabela()
            checkDados()
        }
    }
}


