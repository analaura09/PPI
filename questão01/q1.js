/*Defina um conjunto de dados contendo a altura, peso e o sexo (M ou F) de 15 pessoas, em
seguida calcule e informe:
a. A média de altura do grupo; (check)
b. A mulher mais alta e o homem mais baixo;
c. O número de homens com mais de 1,70 m de altura;
d. O homem mais pesado;
e. O percentual de homens e de mulheres.



var pessoas = [
    {sexo:'F', altura:1.90, peso:80},
    {sexo:'M', altura:1.55, peso:49},
    {sexo:'M', altura:1.70, peso:60},
    {sexo:'F', altura:1.65, peso:80},
    {sexo:'M', altura:1.73, peso:69},
    {sexo:'M', altura:1.80, peso:72},
    {sexo:'F', altura:1.93, peso:80},
    {sexo:'M', altura:1.57, peso:49},
    {sexo:'M', altura:1.62, peso:60},
    {sexo:'F', altura:1.95, peso:80},
    {sexo:'M', altura:1.87, peso:70},
    {sexo:'M', altura:1.70, peso:60},
    {sexo:'F', altura:1.90, peso:80},
    {sexo:'M', altura:1.55, peso:49},
    {sexo:'M', altura:1.70, peso:60},

]
var total = pessoas.reduce(MedAlt,0)
function MedAlt(total,item){
    return total + (item.altura)/15  
}
console.log(pessoas)
console.log(`a média de alturas é de ${total.toFixed(2)}`)
*/





function getRandomArbitrary(min, max) {
    return (Math.random() * (max - min) + min).toFixed(2);
  }

function sexoAleatorio(){
    const sexo = ['M','F']
    sorteio = Math.floor(Math.random() * sexo.length) //aleatoriedade
    return  sexo[sorteio]
}

class Pessoa{
    constructor(altura, peso, sexo){
        this.altura = parseFloat(altura)
        this.peso = peso
        this.sexo = sexo
    }
}

//for ..of

let media_altura = 0
let mulher_mais_alta = 0
let homem_mais_baixo = 3
let homens_de_170 = 1.70
let homem_mais_pesado = 0
let total = 50

for(i = 0; i < 15; i++){
    let pessoa = new Pessoa(getRandomArbitrary(1.5,2), getRandomArbitrary(40, 100), sexoAleatorio())
    console.log(i, pessoa.altura, pessoa.peso, pessoa.sexo)
    media_altura += pessoa.altura
    if (pessoa.sexo === 'F' && pessoa.altura > mulher_mais_alta){
        mulher_mais_alta = pessoa.altura
    }
    if(pessoa.sexo === 'M' && pessoa.altura < homem_mais_baixo){
        homem_mais_baixo = pessoa.altura
    }
    if (pessoa.sexo === 'M' && pessoa.altura > homens_de_170){
        homens_de_170 = pessoa.altura
    }
    if (pessoa.sexo === 'M' && pessoa.peso > homem_mais_pesado){
        homem_mais_pesado = pessoa.peso
    }
    if (pessoa.sexo ==='F' && (pessoa.sexo.length%pessoa.length) -1 *  100){
        total = pessoa.sexo.length
    }
}

console.log("A média da aultura é: "+(media_altura/15).toFixed(2))
console.log(`A mulher mais alta é ${mulher_mais_alta}`)
console.log(`O homem mais baixo é ${homem_mais_baixo}`)
console.log(`Existe ${homens_de_170.toFixed()} homens com mais de 1,70 de altura`)
console.log(`O homem mais pesado tem ${homem_mais_pesado} Kg`)
console.log(`A porcentagem de mulheres é de ${total}%`)
