const botonNumero = Array.from(document.getElementsByClassName("numero"));
const botonOperacion= Array.from(document.getElementsByClassName("operacion"));
const pantallaElement = document.getElementById("pantalla");
const historial= document.getElementById("historial");
const botonPunto= document.getElementById("punto");
const botonBorrar= document.getElementById("borrar");
const botonFlecha= document.getElementById("eliminar");
const botonParentecisIsquierda= document.getElementById("parentecisIsquierda");
const botonParentecisDerecha= document.getElementById("parentecisDerecha");

//variables
let numeroAnterior;
let numeroReinicia = false;//reinicio de cuenta

//funciones
botonNumero.forEach(boton => boton.addEventListener("click",(e) => numeroClick(e.target.textContent)));
botonOperacion.forEach(boton => boton.addEventListener("click",(e) => operacionClick(e.target.textContent)));
botonPunto.addEventListener("click",punto);
botonBorrar.addEventListener("click",borrar);
botonFlecha.addEventListener("click",eliminar);
botonParentecisIsquierda.addEventListener("click",parentecisIsquierda);
botonParentecisDerecha.addEventListener("click",parentecisDerecha);

function numeroClick(numero){
    //console.log(numero);
    if(numeroReinicia){
        pantallaElement.textContent= parseFloat(numero);//numero reinicia 
    } else {
        pantallaElement.textContent= parseFloat(pantallaElement.textContent + numero);
}

}


function operacionClick(operacion){
    if(!numeroAnterior){//si no hay numero anterior no se podra ejecutar ningun boton de operacion 
        if(pantallaElement.textContent === "0") return;
        numeroAnterior= parseFloat(pantallaElement.textContent);//se guarda en formato numero
    }
    else{
        let resultado;
        switch(historial.textContent){
            case"+":
            resultado= numeroAnterior + parseFloat(pantallaElement.textContent)
            break;

            case"-":
            resultado= numeroAnterior - parseFloat(pantallaElement.textContent)
            break;

            case"/":
            if(pantallaElement.textContent === "0"){
                resultado= 0
                break
            }
            resultado= numeroAnterior / parseFloat(pantallaElement.textContent)
            break;

            case"*":
            resultado= numeroAnterior * parseFloat(pantallaElement.textContent)
            break;

        }
        pantallaElement.textContent= resultado;
        numeroAnterior = resultado;
    }
    numeroReinicia = true;
    historial.textContent= operacion;
    
}
function punto(){
    //si el numero es entero
    if(Number.isInteger(parseFloat(pantallaElement.textContent))){
        pantallaElement.textContent +=".";
    }
}

function parentecisIsquierda(){
    if(Number.isInteger(parseFloat(pantallaElement.textContent))){
        pantallaElement.textContent +="(";
    }
}

function parentecisDerecha(){
    if(Number.isInteger(parseFloat(pantallaElement.textContent))){
        pantallaElement.textContent +=")";
    }
}

function borrar(){
    pantallaElement.textContent = 0;
    historial.textContent = "";
}

function eliminar(){
    borrar();
    numeroAnterior = 0;
    historial.textContent = "";
}