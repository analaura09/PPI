/*Faça um programa que receba 10 números, calcule e imprima a soma dos números ímpares e
a soma dos números primos.*/

var c = 0
var par = 0
var imp = 0
var divisor = 0
var soma = 0
for(c =1; c <= 3; c++){
    var num = parseInt(prompt("Digite um número:"))

    if (num%2 ==0){
        par+= num
    }else{
        imp+= num
    }
}

console.log(`A soma dos numeros pares dá: ${par}`)
console.log(`A soma dos numeros impares dá: ${imp}`)
