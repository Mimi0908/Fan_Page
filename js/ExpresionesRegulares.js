const expresiones = {
    nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/,
    edad: /^[0-9]{1,3}$/
}

const campos = {
    nombre: false,
    edad: false,
    lugar:false
}

const validar = (e) => {
    switch (e.target.name) {
        case "nombre":
            validarCampo(expresiones.nombre, e.target, 'nombre');
            break;
        case "edad":
            validarCampo(expresiones.edad, e.target, 'edad');
            break;
    }
}

const validarCampo = (expresion, input, campo) => {
    if (expresion.test(input.value)) {
        document.getElementById(`form-input-${campo}`).classList.add('form-input-correcto');
        document.getElementById(`form-input-${campo}`).classList.remove('form-input-incorrecto');
        document.getElementById(`form-label-${campo}`).classList.add('form-label-correcto');
        document.getElementById(`form-label-${campo}`).classList.remove('form-label-incorrecto');
        document.getElementById(`error-${campo}`).classList.remove('error-activo');
        campos[campo] = true;
    } else {
        document.getElementById(`form-input-${campo}`).classList.remove('form-input-correcto');
        document.getElementById(`form-input-${campo}`).classList.add('form-input-incorrecto');
        document.getElementById(`form-label-${campo}`).classList.remove('form-label-correcto');
        document.getElementById(`form-label-${campo}`).classList.add('form-label-incorrecto');
        document.getElementById(`error-${campo}`).classList.add('error-activo');
        campos[campo] = false;
    }
}

const validarLugar = () => {
    if (lugar.value === '0') {
        document.getElementById('form-input-lugar').classList.remove('form-input-correcto');
        document.getElementById('form-input-lugar').classList.add('form-input-incorrecto');
        document.getElementById('form-label-lugar').classList.remove('form-label-correcto');
        document.getElementById('form-label-lugar').classList.add('form-label-incorrecto');
        document.getElementById('error-lugar').classList.add('error-activo');
        campos.lugar = false;
    } else {
        document.getElementById('form-input-lugar').classList.add('form-input-correcto');
        document.getElementById('form-input-lugar').classList.remove('form-input-incorrecto');
        document.getElementById('form-label-lugar').classList.add('form-label-correcto');
        document.getElementById('form-label-lugar').classList.remove('form-label-incorrecto');
        document.getElementById('error-lugar').classList.remove('error-activo');
        campos.lugar = true;
    }
}

function resetearEstilos() {
    for (const campo in campos) {
      if (campos.hasOwnProperty(campo)) {
        const label = document.getElementById(`form-label-${campo}`);
        const input = document.getElementById(`form-input-${campo}`);
        const error = document.getElementById(`error-${campo}`);
  
        label.classList.remove('form-label-incorrecto');
        label.classList.remove('form-label-correcto');
        input.classList.remove('form-input-incorrecto');
        input.classList.remove('form-input-correcto');
        error.classList.remove('error-activo');
      }
    }
  }

export { validar, campos, validarLugar, resetearEstilos };