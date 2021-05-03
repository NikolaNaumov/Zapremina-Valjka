var poluprecnik = document.getElementById("poluprecnik");
var visina = document.getElementById("visina");
poluprecnik.addEventListener("keyup", racunanje);
visina.addEventListener("keyup", racunanje);

var r = poluprecnik.value;
var h = visina.value;
var V = r * r * h * 3.14;

function racunanje() {
    var r = poluprecnik.value;
    var h = visina.value;
    var V = r * r * h * 3.14;

    if (r != "" && h != "") {
        console.log(V);
        var rezultat = document.getElementById("rezultat");
        rezultat.classList.remove("hidden");
        var span = document.getElementById("span");
        span.innerText = V.toFixed(2);
    }
}

function restart() {
    document.getElementById("poluprecnik").value = "";
    document.getElementById("visina").value = "";
    var span = document.getElementById("span");
    rezultat.classList.add("hidden");
}