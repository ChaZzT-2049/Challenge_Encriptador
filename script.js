//variables clave
const code_a = "ai";
const code_e = "enter";
const code_i = "imes";
const code_o = "ober";
const code_u = "ufat";

//contenedores del mensaje inicial, resultado y mensajes de alerta
const message = document.getElementById("message");
const result = document.getElementById("result");
const consola = document.getElementById('consola');

//funcion para encriptar
function encriptar(){
    //obtener valor del input
    let texto = document.getElementById("area").value;
    //variable que almacena el resultado
    let texto_encripted = "";
    //evaluar si el input esta vacio
    if(!texto) {
        //mensaje de alerta
        document.getElementById('cons-result').innerHTML = 'No ingresaste nada';
        consola.style.display = "block";
        //cancelar
        return;
    }else{
        //si hay algo en el input procede a encriptar
        console.log(texto);
        //ciclo que recorre la variable 
        for(i = 0; i < texto.length; i++){
            //si el valor del texto en la posicion i es diferente a los caracteres: a,e,i,o,u.
            //entonces captura el valor de la posicion que el ciclo esta recorriendo en la variable de resultado
            if(texto[i] != "a" && texto[i] != "e" && texto[i] != "i" && texto[i] != "o" && texto[i] != "u"){
                texto_encripted += texto[i];
            }
            //si el valor en la posicion i es a entonces lo reemplaza con la clave a: ai
            if(texto[i] == "a"){
                texto_encripted += code_a;
            }
            //si el valor en la posicion i es e entonces lo reemplaza con la clave e: enter
            if(texto[i]== "e"){
                texto_encripted += code_e;
            }
            //lo mismo con el resto da las claves
            if(texto[i]== "i"){
                texto_encripted += code_i;
            }
            if(texto[i]== "o"){
                texto_encripted += code_o;
            }
            if(texto[i]== "u"){
                texto_encripted += code_u;
            }
        }
        //llama a la  funcion mostrar resultado y le manda la valiable resultante
        console.log(texto_encripted);
        displayResult(texto_encripted);
    }
}
//funcion para desencriptar
function desencriptar(){
    //capturar valor del input
    let texto = document.getElementById("area").value;
    //variable resultante
    let texto_decripted = "";
    //si el input esta vacio
    if(!texto) {
        //mostrar mensaje de advertencia
        document.getElementById('cons-result').innerHTML = 'No ingresaste nada';
        consola.style.display = "block";
        return;
    }
    //reemplazar todas las claves en el texto encriptado y almacenarlo en el resultado
    texto_decripted = texto.replaceAll(code_a, "a").replaceAll(code_e, "e").replaceAll(code_i, "i").replaceAll(code_o, "o").replaceAll(code_u, "u");
    //mostrar resultado
    console.log(texto_decripted);
    displayResult(texto_decripted);
}
//funcion para mostrar resultado
function displayResult(texto){
    //ingresa el resultado en el html
    document.getElementById("result-content").innerHTML = texto;
    //oculta el mensaje inicial y muestra el contenedor del resultado
    message.style.display = "none";
    result.style.display = "flex";
}
//copiar resultado en el portapapeles
function copyResult() {
    //crea una variable que almacena el contenido del parrafo de resultado
    let texto = document.getElementById("result-content").textContent;
    //pregunta al navegador para copiar el texto
    navigator.clipboard.writeText(texto).then(() => {
        //texto copiado
        console.log("exito, texto copiado: ", texto);
        document.getElementById('cons-result').innerHTML = 'Texto copiado con exito';
        consola.style.display = "block";
    }, () => {
        //error
        console.log("error, algo salio mal");
        document.getElementById('cons-result').innerHTML = 'Algo salio mal, intentelo de nuevo';
        consola.style.display = "block";
    });
}
//funcion para ocultar el contenedor de alertas
function closeConsole(){
    consola.style.display = "none";
}  

//obtener los botones encriptar, desencriptar, copiar y cerrar para llamar a sus respectivas funciones
const btn_encript = document.getElementById("encriptar");
btn_encript.onclick = encriptar;

const btn_decript = document.getElementById("desencriptar");
btn_decript.onclick = desencriptar;

const btn_copy = document.getElementById("copiar");
btn_copy.onclick = copyResult;

const btn_close = document.getElementById("cerrar");
btn_close.onclick = closeConsole;