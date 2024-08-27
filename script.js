const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const btnCopiar = document.querySelector(".btn-copiar");
const mensajeInfo = document.querySelector(".mensaje-inf")


/*La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"*/


// window.screen.width
// window.screen.height

//funcion del boton encriptar
function btnEncriptar(){
    
    //crear constante textoEncriptado, recibe paramaetro encriptar, necesita pasar el valor de textarea
    const textoEncriptado = encriptar(textArea.value)

    //mostrar datos en el campo de mensaje
    mensaje.value = textoEncriptado
    
    //limpia area cuando se hace click para encriptar
    textArea.value = "";

    //quitar imagen al hacer click
    mensaje.style.backgroundImage = "none";

    //hacer visible boton copiar 
    btnCopiar.style.display = "block";

    //quitar texto informativo de espacio de mensaje
    mensajeInfo.style.display = "none";

}

//la funcion necesitaparametro para recibir entradas
function encriptar(stringEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
   
    //convertir de mayus a minus
    stringEncriptada = stringEncriptada.toLowerCase()

    //lea toda la matriz
    for(let i = 0; i < matrizCodigo.length; i++){

        //condicion para verificar letras que ingresan mediante el arrays
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            
            //sustitucion letras, texto y llave
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])


        }
       
    }
    //retornar cadena
    return stringEncriptada;
   
}


function desencriptar(stringDesEncriptada){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
   
    //convertir de mayus a minus
    stringDesEncriptada = stringDesEncriptada.toLowerCase()

    //lea toda la matriz
    for(let i = 0; i < matrizCodigo.length; i++){

        //condicion para verificar letras que ingresan mediante el arrays
        if(stringDesEncriptada.includes(matrizCodigo[i][1])){
            
            //sustitucion letras, texto y llave
            stringDesEncriptada = stringDesEncriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])


        }
       
    }
    //retornar cadena
    return stringDesEncriptada;
   
}


//funcion del boton encriptar
function btndesEncriptar(){
    
    //crear constante textoEncriptado, recibe paramaetro encriptar, necesita pasar el valor de textarea
    const textoEncriptado = desencriptar(textArea.value)

    //mostrar datos en el campo de mensaje
    mensaje.value = textoEncriptado
    
    //limpia area cuando se hace click para encriptar
    textArea.value = "";

}
//funcion para copiar al portapeles
function copiarAlPortapapeles(){
    //seleccionar texto
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);

}

