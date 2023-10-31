
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
import { validar, campos, resetearEstilos} from "./ExpresionesRegulares.js";

const formulario=document.getElementById("Form");
const inputs=document.querySelectorAll("#Form input");
const select= document.querySelector("#lugar");

inputs.forEach( (input)=> {
    input.addEventListener('blur', validar);
    input.addEventListener('keyup', validar);
});

let option=select.value;

formulario.addEventListener('submit',(e)=>{
    e.preventDefault();
    if(option!=0 && campos.edad && campos.nombre){
        alert("enviado");
        eliminarEstilos();
        resetearEstilos();
    }else {
        document.getElementById('form_mensj').classList.add('form_mensj-activo');
      }
})

function eliminarEstilos(){
    formulario.reset();
}