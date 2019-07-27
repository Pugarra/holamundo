
// Establezco un objeto moro con datos texto y numéricos.
var moro = {
    nombre: "Moro",
    fichaje1: 1000,
    fichaje2: 2300,
};


//Creo la funcion que calcula la suma de dos propiedades de objeto

function fichajesmoro() {
    return moro.fichaje1+moro.fichaje2;
};

// Creo una función que resta una cantidad numérica a una función

function farel() {
    return 50000 - fichajesmoro();
};


//Inserto en los DIV el contenido llamando a propiedades de objeto y a funciones



document.getElementById("moro").innerHTML = moro.nombre;
document.getElementById("moroGastado").innerHTML = fichajesmoro();
document.getElementById("moroFarel").innerHTML = farel();