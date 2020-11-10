document.getElementById("name").addEventListener("input", checkName);
document.getElementById("name").addEventListener("focus", checkName);
var spanName = document.getElementById("errorName");
function checkName() {
    var name = document.getElementById("name").value;
    if (name !== "") {
        spanName.style.visibility = 'hidden';
    } else {
        spanName.style.visibility = 'visible';
    }
}

document.getElementById("email").addEventListener("input", checkEmail);
document.getElementById("email").addEventListener("focus", checkEmail);
var spanEmail = document.getElementById("errorEmail");
function checkEmail() {
    var email = document.getElementById("email").value;
    if (email !== "") {
        spanEmail.style.visibility = 'hidden';
    } else {
        spanEmail.style.visibility = 'visible';
    }
}