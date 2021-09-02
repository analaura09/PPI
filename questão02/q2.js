/*Faça um programa que receba 10 números, calcule e imprima a soma dos números ímpares e
a soma dos números primos.(check)*/

var c = 0
var par = 0
var imp = 0
var pri = 0
for(c = 1; c <= 10; c++){
    var num = parseInt(prompt("Digite um número:"))

    if (num%2 ==0){
        par+= num
    }else{
        imp+= num
    }
    var divisor = 0
    for (i = num; i > 0; i--){
        //console.log(`[${num}] está sendo dividido por ${i}`)
        if (num%i == 0){
            divisor ++
        }
    }
    if(divisor == 2){
        pri += num
        //console.log(`[${pri}]`)
    }
}
console.log(`A soma dos números primos dá: ${pri}`)
console.log(`A soma dos numeros pares dá: ${par}`)
console.log(`A soma dos numeros impares dá: ${imp}`)