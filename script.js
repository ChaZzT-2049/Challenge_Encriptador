const code_a = "ai";
const code_e = "enter";
const code_i = "imes";
const code_o = "ober";
const code_u = "ufat";

function encriptar(){
    const texto = document.getElementById("area").value;
    let texto_encripted = "";
    console.log(texto);
    for(i = 0; i < texto.length; i++){
        if(texto[i] != "a" && texto[i] != "e" && texto[i] != "i" && texto[i] != "o" && texto[i] != "u"){
            texto_encripted += texto[i];
        }if(texto[i] == "a"){
            texto_encripted += code_a;
        }if(texto[i]== "e"){
            texto_encripted += code_e;
        }if(texto[i]== "i"){
            texto_encripted += code_i;
        }if(texto[i]== "o"){
            texto_encripted += code_o;
        }if(texto[i]== "u"){
            texto_encripted += code_u;
        }
    }
    console.log(texto_encripted);
    displayResult(texto_encripted);
}
function displayResult(texto){
    const message = document.getElementById("message");
    const result = document.getElementById("result");
    document.getElementById("result-content").innerHTML = texto;
    message.style.display = "none";
    result.style.display = "flex";

}

const btn_encript = document.getElementById("encriptar");
btn_encript.onclick = encriptar;