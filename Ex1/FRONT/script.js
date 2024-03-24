function votar() {
    var disciplina = document.getElementById("disciplinas").value;
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:8080/disciplinas", true);
    xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    xhr.send(JSON.stringify(disciplina));
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                mostrarResultado();
            } else {
                console.log("Erro ao votar na enquete.");
            }
        }
    };
}

function mostrarResultado() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:8080/disciplinas", true);
    xhr.send();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                var resultado = JSON.parse(xhr.responseText);
                var html = "<h2>Resultado Parcial:</h2>";
                html += "<ul>";
                resultado.forEach(function(enquete) {
                    html += "<li>" + enquete.disciplina + ": " + enquete.votos + " votos</li>";
                });
                html += "</ul>";
                document.getElementById("resultado").innerHTML = html;
            } else {
                console.log("Erro ao obter resultado da enquete.");
            }
        }
    };
}

window.onload = function() {
    mostrarResultado();
};