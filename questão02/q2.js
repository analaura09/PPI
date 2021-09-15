/*Faça um programa que receba 10 números, calcule e imprima a soma dos números ímpares e
a soma dos números primos.(check)*/

var c = 0
var par = 0
var imp = 0
var pri = 0
var num = document.querySelector('input#num')
var lista = document.querySelector('select#add')
var res = document.querySelector('div#res')
var numeros = []

function inlista(num, l){
    if(l.indexOf(Number(num))){
        return true
    }else{
        return false
    }
}

function Adicionar(){
    if (inlista(num.value, numeros)){
        numeros.push(Number(num.value))
        var item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado.`
        lista.appendChild(item)
        res.innerHTML = ''
    }
    num.value = ''
    num.focus()
}

function ePar(num){
    if (num%2 ==0){
        par+= num
    }else{
        imp+= num
    }
}

function ePrimo(num){
    var divisor = 0
    for (i = num; i > 0; i--){
        if (num%i == 0){
            divisor ++
        }
    }
    if(divisor == 2){
        pri += num
    }
        
}

function Somar(){
    res.innerHTML += `<p>A soma dos números primos dá: <p/>`
    res.innerHTML += `<p>A soma dos números pares dá: <p/>`
    res.innerHTML += `<p>A soma dos números impares dá: <p/>`
    
}

//for(c = 1; c <= 10; c++){
    //var num = parseInt(prompt("Digite um número:"))

    
    
        //console.log(`[${num}] está sendo dividido por ${i}`)
        
    
        //console.log(`[${pri}]`)

