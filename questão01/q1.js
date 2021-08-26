/*Defina um conjunto de dados contendo a altura, peso e o sexo (M ou F) de 15 pessoas, em
seguida calcule e informe:
a. A média de altura do grupo; (check)
b. A mulher mais alta e o homem mais baixo;
c. O número de homens com mais de 1,70 m de altura;
d. O homem mais pesado;
e. O percentual de homens e de mulheres.
*/

var pessoas = [
    {sexo:`F`, altura:1.90, peso:80},
    {sexo:`M`, altura:1.55, peso:49},
    {sexo:`M`, altura:1.70, peso:60},
    {sexo:`F`, altura:1.65, peso:80},
    {sexo:`M`, altura:1.73, peso:69},
    {sexo:`M`, altura:1.80, peso:72},
    {sexo:`F`, altura:1.93, peso:80},
    {sexo:`M`, altura:1.57, peso:49},
    {sexo:`M`, altura:1.62, peso:60},
    {sexo:`F`, altura:1.95, peso:80},
    {sexo:`M`, altura:1.87, peso:70},
    {sexo:`M`, altura:1.70, peso:60},
    {sexo:`F`, altura:1.90, peso:80},
    {sexo:`M`, altura:1.55, peso:49},
    {sexo:`M`, altura:1.70, peso:60},

]
var total = pessoas.reduce(MedAlt,0)
function MedAlt(total,item){
    return total + (item.altura)/15  
}
console.log(`a média de alturas é de ${total.toFixed(2)}`)

