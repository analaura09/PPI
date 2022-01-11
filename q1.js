/*Defina um conjunto de dados contendo a altura, peso e o sexo (M ou F) de 15 pessoas, em
seguida calcule e informe:
a. A média de altura do grupo; (check)
b. A mulher mais alta e o homem mais baixo; (check)
c. O número de homens com mais de 1,70 m de altura;(check)
d. O homem mais pesado;(check)
e. O percentual de homens e de mulheres.(check)
*/
function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }

function sexoAleatorio(){
    const sexo = ['M','F']
    sorteio = Math.floor(Math.random() * sexo.length)
    return  sexo[sorteio]
}

class Pessoa{
    constructor(altura, peso, sexo){
        this.altura = parseFloat(altura)
        this.peso = peso
        this.sexo = sexo
    }
}


let media_altura = 0
let mulher_mais_alta = 0
let homem_mais_baixo = 3
let homens_de_170 = 1.70
let homem_mais_pesado = 0
let total = 0
let quant_fem = 0
let quant_masc = 0
let cont_homens=0
for(i = 0; i < 15; i++){
    var pessoa = new Pessoa(getRandomArbitrary(1.5,2), getRandomArbitrary(40, 100), sexoAleatorio())
    console.log(i, pessoa.altura, pessoa.peso, pessoa.sexo)
    media_altura += pessoa.altura
    if(pessoa.sexo === 'F'){
        quant_fem++
    }
    if(pessoa.sexo === 'M'){
        quant_masc++
    }
    if (pessoa.sexo === 'M' && pessoa.altura > homens_de_170){
        homens_de_170 = pessoa.altura
        //console.log(homens_de_170)
        cont_homens++
    
    }
    if (pessoa.sexo === 'F' && pessoa.altura > mulher_mais_alta){
        mulher_mais_alta = pessoa.altura
    }
    if(pessoa.sexo === 'M' && pessoa.altura < homem_mais_baixo){
        homem_mais_baixo = pessoa.altura
    }

    if (pessoa.sexo === 'M' && pessoa.peso > homem_mais_pesado){
        homem_mais_pesado = pessoa.peso
    }

}

console.log(`A média da aultura é: ${(media_altura/15).toFixed(2)}`)
console.log(`A mulher mais alta é ${mulher_mais_alta}`)
console.log(`O homem mais baixo é ${homem_mais_baixo}`)
console.log(`Existe ${cont_homens.toFixed()} homens com mais de 1,70 de altura`)
console.log(`O homem mais pesado tem ${homem_mais_pesado} Kg`)
console.log(`A porcentagem de mulheres é ${((quant_fem/15)*100).toFixed()}%`)
console.log(`A porcentagem de homens é ${((quant_masc/15)*100).toFixed()}%`)