
let NumeroSecreto = 0;
let Intentos = 0;
let ListaNumeroSorteados = [];
let NumeroMaximo = 10;//para verificar si existe algun num o text se escribe control+f para verificar si hay mas
console.log(NumeroSecreto);//muestra en consola el numero secreto 


function AsignarTextoElemento (elemento, texto) {
    let elementoHTML= document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
return;

}

function VerificarIntento (){
    let NumeroUsuario = parseInt(document.getElementById("NumeroUsuario").value);
   

console.log(Intentos);//muestra en la consola el numero de intentos
    if (NumeroUsuario === NumeroSecreto) {
    AsignarTextoElemento("p",`!ACERTASTE EL NUMERO en ${Intentos} ${(Intentos === 1) ? "ves" : "veces"}!`);
    document.getElementById("reiniciar").removeAttribute("disabled");

    } else {
//el usuario no acerto

        if (NumeroUsuario>NumeroSecreto){
            AsignarTextoElemento("p","El numero secreto es menor");
        } else{
            AsignarTextoElemento("p","El numero secreto es mayor");  
        }
            Intentos++;
            LimpiarCaja();
    }
    
return;
}


function LimpiarCaja(){
    document.querySelector("#NumeroUsuario").value = "";
    
}


function GenerarNumeroSecreto(params) {
    let NumeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1; //si el numero generado esta en la lista
    console.log(NumeroGenerado);
    console.log(ListaNumeroSorteados);



    //si ya se sorteo todos los numeros se muestra un mensaje en la pantalla donde acaba el juego

    if (ListaNumeroSorteados.length == NumeroMaximo){
        AsignarTextoElemento('p', 'Ya se Sortearon todos los numeros posibles');

     } else { 

    if (ListaNumeroSorteados.includes(NumeroGenerado)){
        return GenerarNumeroSecreto();

    } else {
        ListaNumeroSorteados.push(NumeroGenerado);
        return NumeroGenerado;
       }
      
    }
   
}


function CondicionesIniciales(){
    AsignarTextoElemento ('h1','JUEGO DEL NUMERO SECRETO!!!!');
    AsignarTextoElemento ('P',`Introduce un Numero del 1 al ${NumeroMaximo}`);
    NumeroSecreto = GenerarNumeroSecreto();
    Intentos = 1;
}



function ReiniciarJuego() {
   
    LimpiarCaja();//limpia la caja
    CondicionesIniciales(); // Indica intervalo de numeros, genera num aleatorio, inicia num intentos
    document.querySelector("#reiniciar").setAttribute("disabled","true")

    

}

 CondicionesIniciales();

