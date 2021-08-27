/*Faça um programa que receba 10 números, calcule e imprima a soma dos números ímpares e
a soma dos números primos.*/

var lista =[1,2,3,4,5,6,7,8,9,10]
//separando somente os numeros impares da lista
var impar = function(item){
    return (item %2 !=0)
}
var numimp = lista.filter(impar)
//somando os numeros impares da lista
var total = numimp.reduce((total,currentElement)=> total + currentElement)
console.log(total)


//separando somente os numeros primos da lista
var primo = function(item){
    return(item%2 !=0 || item%3 ==0 && item%item !=0 || item==2)
}
var numpri = lista.filter(primo)
//somando somente os numeros primos 
var Total = numpri.reduce((Total,currentElement)=> Total + currentElement)
console.log(Total)

