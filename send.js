document.getElementById("name").addEventListener("input", myFunction);
document.getElementById("name").addEventListener("focus", myFunction);
var span = document.getElementById("error");
function myFunction() {

    var name = document.getElementById("name").value;
    if (name !== "") {
        span.style.visibility = 'hidden';
    } else {
        span.style.visibility = 'visible';
    }
}