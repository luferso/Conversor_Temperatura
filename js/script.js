var result = document.getElementById("box_resultado");

function coleta_dados(){
    var temp_inicial = parseFloat(document.getElementById("temp_inicial").value);
    var escala = document.getElementById("escalas").value;
    var temp_final;

    conversor(escala, temp_inicial, temp_final)

}

function conversor(escala, temp_inicial, temp_final){
    switch (escala){
        case "kelvin":
            kelvin(temp_final, temp_inicial, escala);
            break
        default:
            fahrenheit(temp_final, temp_inicial, escala);
            break
    }

}

function kelvin(temp_final, temp_inicial, escala){
    temp_final = temp_inicial + 273;
result.innerHTML = `<h2>${temp_final} K</h2>`;
}

function fahrenheit(temp_final, temp_inicial, escala){
    temp_final = (temp_inicial*1.8) + 32;
result.innerHTML = `<h2>${temp_final} °F</h2>`;
}