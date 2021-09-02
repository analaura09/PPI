/*Faça um programa que receba a idade e a opinião de 15 espectadores de um cinema em relação
a um determinado filme, sendo ótimo - 3, bom - 2, regular -1, em seguida calcule e informe:
a. A média das idades das pessoas que responderam ótimo;(check)
b. A quantidade de pessoas que responderam regular;(check)
c. A porcentagem de pessoas que responderam bom entre todos os espectadores
analisados.(check)
*/

var c = 0
var otimo = 0
var regular = 0
var bom = 0
var idadeotimo = 0
var opnregular = 0
var opnbom = 0
var media = 0
for (c = 1;c <= 15;c++){
    idade = parseInt(prompt("["+c+"] Digite sua idade:"))    
    opn = prompt("Digite aqui sua opnião sobre o filme: regular - 1, bom - 2, ótimo - 3: ")

    while (opn < 1 || opn > 3){
        alert("Digite uma opção valida")
        opn = prompt("Digite aqui sua opnião sobre o filme: regular - 1, bom - 2, ótimo - 3: ")
    }
    if (idade == 0){
        alert("Digite uma opção valida")
    }
    else{
        if (opn == 3){
            otimo += idade
            idadeotimo++
        }
        if (opn == 1){
            regular += opn
            opnregular++
        }
        if (opn == 2){
            bom += opn
            opnbom++
        }
    }
    
}
media = otimo/idadeotimo
bomporcen = (opnbom*100)/15

console.log(`A quantidade de pessoas que responderam regular foi: ${opnregular}`)
console.log(`A media de idade das pessoas que respoderam otimo foi ${media}`)
console.log(`A porcentagem das pessoas que responderam bom foi ${bomporcen}%`)