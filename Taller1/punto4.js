//QUI-GON JINN está encargado de revisar n sablesde luz y contabilizar la cantidad de energía de sables que tienen negativa en Joules. para la entrada {2,4,-8,5,-6} la cantidad de sables defectuosos con energía negativa fue de 2 sables.
function contadorEnergia (){
    let cont = 0
    let energiaSables = [2,-4,-8,5,-6];

    for (let i = 0; i < energiaSables.length; i++) {
        energiaSables[i]
            if(energiaSables[i] < 0){
                cont++
            }else{
            }
            }
            console.log("El numero de espadas con energia negativa es: " +cont);
}

contadorEnergia();