const preguntas=[
    '¿Cuál de las siguientes opciones odiarías más que la gente te llamara?',
    'Se colocan cuatro copas ante ti. ¿Cuál elegirías beber?',
    'Uno de tus compañeros de casa hizo trampa en un examen de Hogwarts usando una pluma autodeletreadora. Ahora ha llegado a ser el primero de la clase en Encantamientos, superándote y quedando en segundo lugar. El profesor Flitwick sospecha de lo sucedido. Te lleva a un lado después de su lección y te pregunta si tu compañero usó o no una pluma prohibida. ¿A qué te dedicas?',
    'Se colocan cuatro cajas ante ti. ¿Cuál intentarías abrir?',
    'Entras en un jardín encantado. ¿Qué te gustaría más examinar primero?',
    'Un muggle te confronta y te dice que está seguro de que eres una bruja o un mago. Tú:',
    'Tú y dos amigos debéis cruzar un puente custodiado por un troll de río que insiste en luchar contra uno de vosotros antes de que los deje pasar a todos. Tú:',
    'Una vez cada siglo, el arbusto Flutterby produce flores que adaptan su aroma para atraer a los incautos. Si te atrajera, olería a:',
    'A altas horas de la noche, caminando solo por la calle, escuchas un grito peculiar que crees que tiene una fuente mágica. Tú:'
];
const opciones=[
    {opA:'Común', opB:'Ignorante', opC:'Cobarde',opD:'Egoista'},
    {opA:'El líquido plateado, espumoso y brillante, como si contuviera diamantes molidos.', opB:'La bebida suave, espesa y de un intenso color púrpura que desprende un delicioso olor a chocolate y ciruelas.', opC:'El líquido dorado tan brillante que duele la vista y que hace que las manchas solares bailen por toda la habitación.',opD:'El misterioso líquido negro que brilla como tinta y desprende vapores que te hacen tener visiones extrañas.'},
    {opA:'Miente y di que no lo sabes (pero espera que alguien más le diga la verdad al profesor Flitwick).', opB:'Dígale al profesor Flitwick que debería preguntarle a su compañero de clase (y resuelva decirle a su compañero que si él no dice la verdad, usted lo hará).', opC:'Dígale la verdad al profesor Flitwick. Si tu compañero de clase está dispuesto a ganar haciendo trampa, merece que lo descubran. Además, como ambos están en la misma casa, los puntos que él pierda los recuperarás tú, por ocupar el primer lugar en su lugar.',opD:'No esperaría a que le pidieran que le dijera la verdad al profesor Flitwick. Si supieras que alguien está usando una pluma prohibida, se lo dirías al profesor antes de que comenzara el examen.'},
    {opA:'La pequeña caja de carey, adornada con oro, en cuyo interior parece chillar una pequeña criatura.', opB:'La reluciente caja de color negro azabache con cerradura y llave plateadas, marcada con una runa misteriosa que sabes que es la marca de Merlín.', opC:'El ornamentado cofre dorado, que se alza sobre patas con garras, cuya inscripción advierte que en su interior se encuentran tanto conocimientos secretos como tentaciones insoportables. ',opD:'La pequeña caja de peltre sencilla, con un mensaje rayado que dice "Abro sólo para los dignos".'},
    {opA:'El árbol de hojas plateadas que produce manzanas doradas.', opB:'Los gordos hongos rojos que parecen estar hablando entre sí.', opC:'La piscina burbujeante, en cuyo fondo algo luminoso se arremolina.',opD:'La estatua de un viejo mago con un ojo extrañamente brillante.'},
    {opA:'Le Preguntas ¿qué le hace pensar eso?', opB:'Estar de acuerdo y preguntarle si le gustaría una muestra gratuita de un hechizo.', opC:'Acepta y aléjate, dejándolo con la duda de si estás mintiendo o no.',opD:'Dígales que está preocupado por su salud mental y ofrézcase a llamar a un médico.'},
    {opA:'¿Intentar confundir al troll para que los deje pasar a los tres sin pelear?', opB:'¿Sugiere sortear para decidir cuál de ustedes peleará?', opC:'¿Sugerir que los tres peleen (sin decírselo al troll)?',opD:'¿Voluntario para luchar?'},
    {opA:'Una chimenea crepitante', opB:'El mar', opC:'Pergamino fresco',opD:'Hogar'},
    {opA:'¿Procede con precaución, manteniendo una mano en tu varita oculta y atento a cualquier perturbación?', opB:'¿Saca tu varita e intenta descubrir la fuente del ruido?', opC:'¿Saca tu varita y mantente firme?',opD:'Retírate a las sombras para esperar los acontecimientos, mientras revisas mentalmente los hechizos defensivos y ofensivos más apropiados, ¿en caso de que surjan problemas?'}
]
let posActual=0;
function comenzar(){
    posActual=0;
    document.getElementById("pantalla-inicial").style.display="none";
    document.getElementById("quiz").style.display="block";
    cargarPregunta();
}

function cargarPregunta(){
    if(preguntas.length<=posActual){
        terminarJuego();
    }else{
        document.getElementById("pregunta").innerHTML= preguntas[0];
        document.getElementById("l0").innerHTML= opciones[posActual[0]];
        document.getElementById("l1").innerHTML= opciones[posActual[1]];
        document.getElementById("l2").innerHTML= opciones[posActual[2]];
        document.getElementById("l3").innerHTML= opciones[posActual[3]];
    }
}
function respuesta(){
    posActual++;
    setTimeout(cargarPregunta, 1000);
}

let items = document.querySelectorAll('.slider .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');

let active = 0;
function loadShow() {
    let stt = 0;
    items[active].style.transform = `none`;
    items[active].style.zIndex = 1;
    items[active].style.filter = 'none';
    items[active].style.opacity = 1;
    for (var i = active + 1; i < items.length; i++) {
        stt++;
        items[i].style.transform = `translateX(${120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(-1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    stt = 0;
    for (var i = active - 1; i >= 0; i--) {
        stt++;
        items[i].style.transform = `translateX(${-120 * stt}px) scale(${1 - 0.2 * stt}) perspective(16px) rotateY(1deg)`;
        items[i].style.zIndex = -stt;
        items[i].style.filter = 'blur(5px)';
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }
    next.style.visibility = active === items.length - 1 ? 'hidden' : 'visible';
    prev.style.visibility = active === 0 ? 'hidden' : 'visible';
}
loadShow();
next.onclick = function () {
    active = active + 1 < items.length ? active + 1 : active;
    loadShow();
}
prev.onclick = function () {
    active = active - 1 >= 0 ? active - 1 : active;
    loadShow();
}