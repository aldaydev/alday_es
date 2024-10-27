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
    dialog.setAttribute('class', 'dialog');

    let title = document.createElement('h3');
    title.setAttribute('class', 'dialog__title');
    let titleText = document.createTextNode('POLÍTICA DE PRIVACIDAD');

    let text = document.createElement('p');
    text.setAttribute('class', 'dialog__text');
    let textNode = document.createTextNode('Los datos serán almacenados y gestionados por Rafa Alday y solo se hará uso de ellos para fines de la comunicación con la persona interesada. En ningún caso se cederá la información a terceros. Si aceptas estos terminos estás de acuerdo en que puedan almacenar dichos datos y utilizarlos para contactar contigo. Si en cualquier momento quieres gestionar, hacer algún cambio o solicitar la eliminación de tus datos ponte en contacto con datos@alday.es');

    let volver = document.createElement('a');
    volver.setAttribute('class', 'dialog__volver');
    let volverText = document.createTextNode('Pulsa aquí para volver');

    return [titleText, title, textNode, text, volverText, volver, dialog]
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
conditions[5].addEventListener('click', ()=>{
    
    document.body.removeChild(conditions[6]);
});

//----------Funcionalidad - Enviar formulario

//Función que recoge los datos del form
function getForm(){
    let nombre = document.querySelector('input[name=nombre]');
    let edad = document.querySelector('input[name=edad]');
    let sexo = document.querySelector('input[name=sexo]:checked');
    let email = document.querySelector('input[name=email]');
    let asunto = document.querySelector('select[name=asunto]');
    let mensaje = document.querySelector('textarea[name=mensaje]');
    let policy = document.querySelector('input[name=policy]:checked');

    console.log(typeof edad.value);

    if(edad.value == "" || edad.value == " "){
        edad = "No definido";
        return {
            nombre: nombre, 
            edad: edad,
            sexo: sexo,
            email: email,
            asunto: asunto,
            mensaje: mensaje,
            policy: policy
            };
    }else{
        return {
            
            nombre: nombre, 
            edad: edad.value,
            sexo: sexo,
            email: email,
            asunto: asunto,
            mensaje: mensaje,
            policy: policy
            };
    }

}

//Creación del contenedor de la ventana emergente
function createDialog(){
    let dialog = document.createElement('dialog');
    dialog.setAttribute('id', 'dialog');
    dialog.setAttribute('class', 'dialog');

    return dialog;
}

//Creación del botón para cerrar ventana emergente
function createVolver(){
    let volver = document.createElement('a');
    volver.setAttribute('id', 'volver');
    volver.setAttribute('class', 'dialog__volver');

    let volverText = document.createTextNode('Pulsa aquí para volver');
    volver.appendChild(volverText);

    return volver;
}

//Llamamos al dialog y al botón volver y los metemos en un let
let dialog = createDialog();
let volver = createVolver();

//Función que crea elem emergente e hijos (Formulario Enviado)
function createSent(){

    let title = document.createElement('h3');
    title.setAttribute('class', 'dialog__title');

    let titleText = document.createTextNode('FORMULARIO ENVIADO');

    let text = document.createElement('p');
    text.setAttribute('class', 'dialog__data');
    
    let form = getForm();
    
    let textNode = 
        `RESUMEN: <br> <br>
        Nombre: ${form.nombre.value} <br>
        Edad: ${form.edad} <br>
        Sexo: ${form.sexo.value} <br>
        Email: ${form.email.value} <br>
        Asunto: ${form.asunto.value} <br>
        Mensaje: <br> ${form.mensaje.value}
        `
    ;

    return [titleText, title, textNode, text, volver, dialog];
}


//Seleción del botón de ENVIAR y del FORM
let sendBtn = document.getElementById('submit');
let generalForm = document.getElementById('form');

//Función para cuando faltan campos por completar
function faltanCampos(){
    
    let main = document.querySelector('.contact__form');
    const noDiv = document.querySelector('.contact__personal');

    if(main.firstElementChild == noDiv){
        let div = document.createElement('div');
        let text = document.createElement('p').appendChild(document.createTextNode('Faltan algunos datos por rellenar o los has completado de manera incorrecta'));
        div.style.textAlign = 'center';
        div.style.fontWeight = 'bold';
        div.style.color = 'red';
    
        
        main.insertBefore(div, main.firstChild);
    
        div.appendChild(text);
        // document.body.appendChild(div);
    }
}

//Evento para enviar formulario
sendBtn.addEventListener('click', (e)=>{

    e.preventDefault();

    let option = getForm();
    
    //Campos obligatorios
    let nombreObligatorio = option.nombre.value == "" || option.nombre.value.length < 3;
    let emailObligatorio = option.email.value == "" || !option.email.value.includes("@") || !option.email.value.includes(".") || option.email.value.length < 5;
    let mensajeObligatorio = option.mensaje.value == "" || option.mensaje.value.length < 10;

    //Validación de campos obligatorios
    if(nombreObligatorio || emailObligatorio || mensajeObligatorio || option.policy == null){
        faltanCampos();
        window.scrollTo(0, 0);

        if(nombreObligatorio){
            option.nombre.setAttribute('class', 'campoError');
        }else if(emailObligatorio){
            option.nombre.classList.remove('campoError');
            option.email.setAttribute('class', 'campoError');
        }else if(mensajeObligatorio){
            option.email.classList.remove('campoError');
            option.mensaje.setAttribute('class', 'campoError');
        }else if(option.policy == null){
            let policyText = document.querySelector('.condiciones__container > label');
            option.mensaje.classList.remove('campoError');
            policyText.setAttribute('class', 'campoError');
        }
    //Si los compos están rellenos correctamente...
    }else{
        let formElements = createSent();

        formElements[1].appendChild(formElements[0]);
        formElements[5].appendChild(formElements[1]);
    
        
        formElements[3].innerHTML = formElements[2];
        formElements[5].appendChild(formElements[3]);
    
        formElements[5].appendChild(formElements[4]);
    
        document.body.appendChild(formElements[5]);

    }
});

//Evento para cerrar el dialog
volver.addEventListener('click', ()=>{
    dialog.innerHTML = "";
    document.body.removeChild(dialog);
});