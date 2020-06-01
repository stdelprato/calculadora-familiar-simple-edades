function obtenerMayorNumero(numeros){
    let mayorProv = numeros[0];

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] > mayorProv){
            mayorProv = numeros[i];
        }
    }

    return mayorProv;
}

function obtenerMenorNumero(numeros){
    let menorProv = numeros [0];

    for(let i = 0; i < numeros.length; i++){
        if(numeros[i] < menorProv){
            menorProv = numeros[i];
        }
    }

    return menorProv;
}

function obtenerPromedio(numeros){
    let promedio = 0;
    let suma = 0;

    for(let i = 0; i < numeros.length; i++){
        suma += Number(numeros[i]);
    }

    promedio = suma / (numeros.length);

    return promedio.toFixed(2);
}