const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');


/* Looping through images */

for(var c =1; c <= 5;c++){
    var imagem = document.createElement('img')
    imagem.setAttribute('src','images/pic' + c + '.jpg')
    thumbBar.appendChild(imagem)
    imagem.onclick = function(grande){
        displayedImage.src = grande.target.src
    }
}

//console.log(thumbBar)




/* Wiring up the Darken/Lighten button */
btn.onclick = function(){
    var bntDL = btn.getAttribute('class');
    if(bntDL === 'escuro') {
        btn.setAttribute('class','claro');
        btn.textContent = 'acender';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class','escuro');
        btn.textContent = 'apagar';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
}