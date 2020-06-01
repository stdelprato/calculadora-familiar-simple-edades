const $form = document.querySelector('#calculador-edades');
const $integrantes = document.querySelector('#integrantes');
const $errores = document.querySelector('#errores');

function validarForm(event){
    const errorInputCantidad = validarInputCantidad($form["input-integrantes"].value)

    const errores = {
        ["input-integrantes"]: errorInputCantidad
    }

    borrarErrores();
    manejarErrores(errores);
    borrarIntegrantesAnteriores();
    crearIntegrantesCant();

    event.preventDefault();
}

$form.onsubmit = validarForm;

$form["boton-calcular"].onclick = function(){
    const edadesIntegrantes = obtenerEdadesIntegrantes();

    mostrarEdad("mayor", obtenerMayorNumero(edadesIntegrantes));
    mostrarEdad("menor", obtenerMenorNumero(edadesIntegrantes));
    mostrarEdad("promedio", obtenerPromedio(edadesIntegrantes));

    mostrarResultados();
    return false;
}

function crearIntegrante(indice){
    const crearDiv = document.createElement('div');
    const crearInput = document.createElement('input');
    const crearLabel = document.createElement('label');

    crearLabel.textContent = `Ingresa la edad del integrante numero ${indice}: `;
    crearDiv.className = 'integrante';
    crearInput.type = 'text';

    crearDiv.appendChild(crearLabel);
    crearDiv.appendChild(crearInput);

    $integrantes.appendChild(crearDiv);
}

function crearIntegrantesCant(){
    const $valorInput = $form["input-integrantes"].value;

    for (let i = 0; i < $valorInput; i++) {
        crearIntegrante(i + 1);
    }

    if($valorInput > 0){
        mostrarBotonCalcular();
    } else {
        ocultarBotonCalcular();
    }
}

function borrarIntegrantesAnteriores(){
    const $integrantesArray = document.querySelectorAll('.integrante');

    for (let i = 0; i < $integrantesArray.length; i++) {
        $integrantesArray[i].remove();
    }
}

function mostrarBotonCalcular(){
    document.querySelector('#boton-calcular').className = "";
}

function ocultarBotonCalcular(){
    document.querySelector('#boton-calcular').className = "oculto";
}

function mostrarResultados(){
    document.querySelector("#calculos").className = "";
}

function ocultarResultados(){
    document.querySelector("#calculos").className = "oculto";
}
////////////////////////////

function obtenerEdadesIntegrantes(){
    const $edades = document.querySelectorAll(".integrante input");
    let edadesArray = [];

    for(let i = 0; i < $edades.length; i++){
        edadesArray.push($edades[i].value);
    }

    return edadesArray;
}

function mostrarEdad(tipo, valor){
    document.querySelector(`#${tipo}-edad`).textContent = valor;
}

////////////////////////////

function validarInputCantidad(valor){
    if(valor < 0){
        return "No se puede ingresar un valor negativo";
    } else if(/[a-z]/i.test(valor)){
        return "Solo se pueden ingresar numeros";
    } else {
        return '';
    }
}

////////////////////////////

function manejarErrores(err){
    const keysErrores = Object.keys(err);
    const crearError = document.createElement("li");
    let cantidadErrores = 0;

    keysErrores.forEach(function(key){
        const error = err[key];

        if(error){
            cantidadErrores++;
            $form[key].className = 'error';

            const $crearError = document.createElement('li');
            $crearError.innerText = error;

            $errores.appendChild($crearError);
        } else {
            $form[key].className = '';

        }
    })
}

/////////////////////

function borrarErrores(){
    const $erroresLi = document.querySelectorAll('#errores li');

    for(let i = 0; i < $erroresLi.length; i++){
        $erroresLi[i].remove();
    }
}