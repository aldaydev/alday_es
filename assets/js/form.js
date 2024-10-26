//----------Funcionalidad - Asuntos: Otros

//Selección de elementos necesarios y creación de nuevo input
let select = document.querySelector('.contact__mensaje select[name="asunto"]');
let opcionOtros = select.querySelector('option[value="otros"]');
let mensajeContainer = document.querySelector('.mensaje__container');
let asuntoLabel = mensajeContainer.getElementsByTagName('label')[0];
let otrosInput = document.createElement('input');

//Función que genera e inserta el nuevo input
function definirOtros(){
    otrosInput.style.width = "40rem";
    otrosInput.style.alignSelf = "center";
    otrosInput.setAttribute('type', 'text');
    otrosInput.setAttribute('name', 'otros');
    otrosInput.setAttribute('placeholder', 'Describe el asunto');

    asuntoLabel.appendChild(otrosInput);
}

//Función que oculta el input
function quitarOtros(){
    otrosInput.style.display = 'none';
}

//Evento para añadir o quitar el input "Asunto: Otros"
select.addEventListener('change', ()=>{

    if(select.value == 'otros'){
        definirOtros();
        otrosInput.style.display = 'block';
    }else{
        quitarOtros();
    }
    
});

//----------Funcionalidad - Elemento Emergente Condiciones

//Seleción del enlace a condiciones
let enlace = document.getElementById('enlace');

//Función que crea elem emergente e hijos (Condiciones)
function createConditions(){
    //Creación y diseño de elemento de la ventana emergente
    let dialog = document.createElement('dialog');
    dialog.style.width = '50%';
    dialog.style.display = 'block';
    dialog.style.zIndex = '999';
    dialog.style.top = '25%';
    dialog.style.left = '25%';
    dialog.style.backgroundColor = '#142f30';
    dialog.style.position = 'fixed';

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

    let volver = document.createElement('a');
    volver.style.textAlign = 'center';
    volver.style.margin = '3rem';
    volver.style.fontSize = '3rem';
    volver.style.cursor = 'pointer';
    volver.style.color = '#FFFBED';
    let volverText = document.createTextNode('Pulsa aquí para volver');

    return [titleText, title, textNode, text, volverText, volver, dialog, volver]
}

//Obtención de array con todos los elementos
let conditions = createConditions();

//Función que añade la ventana emergente de "condiciones"
function addConditions(){
    
    conditions[1].appendChild(conditions[0]);
    conditions[6].appendChild(conditions[1]);

    
    conditions[3].appendChild(conditions[2]);
    conditions[6].appendChild(conditions[3]);

    
    conditions[5].appendChild(conditions[4]);
    conditions[6].appendChild(conditions[5]);

    document.body.appendChild(conditions[6]);
}

//Evento que saca la ventana de condiciones
enlace.addEventListener('click', ()=>{
    addConditions();
});

//Evento que oculta la ventana de condiciones
conditions[7].addEventListener('click', ()=>{
    
    document.body.removeChild(conditions[6]);
});

//----------Funcionalidad - Enviar formulario


function getForm(){
    let nombre = document.querySelector('input[name=nombre]');
    let edad = document.querySelector('input[name=edad]').value;
    let sexo = document.querySelector('input[name=sexo]:checked').value;
    let email = document.querySelector('input[name=email]').value;
    let asunto = document.querySelector('select[name=asunto]').value;
    let mensaje = document.querySelector('textarea[name=mensaje]').value;

    return {
        nombre: nombre, 
        edad: edad,
        sexo: sexo,
        email: email,
        asunto: asunto,
        mensaje: mensaje
        };

}

//Función que crea elem emergente e hijos (Formulario Enviado)
function createSent(){
    //Creación y diseño de elemento de la ventana emergente
    let dialog = document.createElement('dialog');
    dialog.style.width = '50%';
    dialog.style.display = 'block';
    dialog.style.zIndex = '999';
    dialog.style.top = '25%';
    dialog.style.left = '25%';
    dialog.style.backgroundColor = '#142f30';
    dialog.style.position = 'fixed';

    let title = document.createElement('h3');
    title.style.color = '#FFFBED';
    title.style.textAlign = 'center';
    title.style.marginTop = '6rem';
    title.style.fontSize = '4rem';
    let titleText = document.createTextNode('Formulario enviado. Resumen:');

    let form = getForm();

    let text = document.createElement('p');
    text.style.textAlign = 'center';
    text.style.margin = '3rem';
    text.style.fontSize = '2rem';
    text.style.color = '#FFFBED';
    

    let textNode = 
        `Nombre: ${form.nombre.value} <br>
        Edad: ${form.edad} <br>
        Sexo: ${form.sexo} <br>
        Email: ${form.email} <br>
        Asunto: ${form.asunto} <br>
        Mensaje: ${form.mensaje} <br>
        `
    ;

    let volver = document.createElement('a');
    volver.style.textAlign = 'center';
    volver.style.margin = '3rem';
    volver.style.fontSize = '3rem';
    volver.style.cursor = 'pointer';
    volver.style.color = '#FFFBED';
    let volverText = document.createTextNode('Pulsa aquí para volver');

    return [titleText, title, textNode, text, volverText, volver, dialog, volver]
}


//Seleción del botón de ENVIAR
let sendBtn = document.getElementById('submit');

let generalForm = document.getElementById('form');


function faltanCampos(){
    let div = document.createElement('div');
    let text = document.createElement('p').appendChild(document.createTextNode('Faltan algunos datos por rellenar o los has completado de manera incorrecta'));
    div.style.textAlign = 'center';
    div.style.fontWeight = 'bold';
    div.style.color = 'red';

    let main = document.querySelector('.contact__form');
    main.insertBefore(div, main.firstChild);

    console.log(text);
    div.appendChild(text);
    // document.body.appendChild(div);
}

//Evento para enviar formulario
sendBtn.addEventListener('click', (e)=>{

    e.preventDefault();

    let option = getForm();

    if(option.nombre.value == "" || option.nombre.value.length < 3 ){
        faltanCampos();
        window.scrollTo(0, 0);
        sendBtn.setAttribute('href', '#name');
        option.nombre.style.backgroundColor = "red";
    }else if(){}
    }else{
        let formElements = createSent();

        formElements[1].appendChild(formElements[0]);
        formElements[6].appendChild(formElements[1]);
    
        
        formElements[3].innerHTML = formElements[2];
        formElements[6].appendChild(formElements[3]);
    
        
        formElements[5].appendChild(formElements[4]);
        formElements[6].appendChild(formElements[5]);
    
        document.body.appendChild(formElements[6]);
    }
});