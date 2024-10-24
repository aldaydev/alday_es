let select = document.querySelector('.contact__mensaje select[name="asunto"]');
let opcionOtros = select.querySelector('option[value="otros"]');
let mensajeContainer = document.querySelector('.mensaje__container');
let asuntoLabel = mensajeContainer.getElementsByTagName('label')[0];
let otrosInput = document.createElement('input');

function definirOtros(){
    otrosInput.style.width = "40rem";
    otrosInput.style.alignSelf = "center";
    otrosInput.setAttribute('type', 'text');
    otrosInput.setAttribute('placeholder', 'Describe el asunto');
    console.log(otrosInput);

    asuntoLabel.appendChild(otrosInput);
}

function quitarOtros(){
    otrosInput.style.display = 'none';
}

select.addEventListener('change', ()=>{

    if(select.value == 'otros'){
        definirOtros();
        otrosInput.style.display = 'block';
    }else{
        quitarOtros();
    }
    
});

let enlace = document.getElementById('enlace');

let div = document.createElement('div');
div.style.width = '50%';
div.style.display = 'block';
div.style.zIndex = '999';
div.style.top = '25%';
div.style.left = '25%';
div.style.backgroundColor = '#142f30';
div.style.position = 'fixed';
let volver = document.createElement('a');
let title = document.createElement('h3');
title.style.color = '#FFFBED';
title.style.textAlign = 'center';
title.style.marginTop = '6rem';
title.style.fontSize = '4rem';

let titleText = document.createTextNode('Política de privacidad');
let text = document.createElement('p');
text.style.textAlign = 'center';
text.style.margin = '3rem';
text.style.fontSize = '3rem';
let textNode = document.createTextNode('Los datos serán almacenados y gestionados por Rafa Alday y solo se hará uso de ellos para fines de la comunicación con la persona interesada. Si en cualquier momento quieres gestionar tus datos ponte en contacto con datos@alday.es');
text.style.color = '#FFFBED';
let volverText = document.createTextNode('Pulsa aquí para volver');
volver.style.textAlign = 'center';
volver.style.margin = '3rem';
volver.style.fontSize = '3rem';
volver.style.cursor = 'pointer';
volver.style.color = '#FFFBED';

function politica(){
    title.appendChild(titleText);
    div.appendChild(title);

    
    text.appendChild(textNode);
    div.appendChild(text);

    
    volver.appendChild(volverText);
    div.appendChild(volver);

    document.body.appendChild(div);
}


enlace.addEventListener('click', ()=>{
    politica();
});

volver.addEventListener('click', ()=>{
    
    document.body.removeChild(div);
});