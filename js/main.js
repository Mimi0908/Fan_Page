
/*claro oscuro*/
const btnswitch = document.querySelector('#switch');

btnswitch.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    btnswitch.classList.toggle('active');

    if (document.body.classList.contains('dark')) {
        localStorage.setItem('dark-mode', 'true');
    }
    else {
        localStorage.setItem('dark-mode', 'false');
    }
});

if (localStorage.getItem('dark-mode') === 'true') {
    document.body.classList.add('dark');
    btnswitch.classList.add('active');
}
else {
    document.body.classList.remove('dark');
    btnswitch.classList.remove('active');
}

/*formulario*/ 
import { validar, campos,validarLugar, resetearEstilos} from "./ExpresionesRegulares.js";

const formulario=document.getElementById("Form");
const inputs=document.querySelectorAll("#Form input");
const select= document.getElementById("lugar");

inputs.forEach( (input)=> {
    input.addEventListener('blur', validar);
    input.addEventListener('keyup', validar);
});

select.addEventListener('change', validarLugar);

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    const opcion= select.value;
    if(campos.lugar && campos.nombre){
        alert("enviado");
        document.getElementById('form_mensj').classList.remove('form_mensj-activo');
        eliminarEstilos();
        resetearEstilos();
        if(opcion=== '1' && opcion=== '2'){
            window.location.href ='QuizHogwarts.html'
        }
        
        
    }else {
        document.getElementById('form_mensj').classList.add('form_mensj-activo');
      }
})

function eliminarEstilos(){
    formulario.reset();
}

