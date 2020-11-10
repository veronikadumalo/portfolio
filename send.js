document.getElementById("name").addEventListener("input", checkName);
document.getElementById("name").addEventListener("focus", checkName);
var spanName = document.getElementById("errorName");
var nameTrue = false;
var emailTrue = false;
var messageTrue = false;
function checkName() {
    var name = document.getElementById("name").value;
    if (name !== "") {
        spanName.style.visibility = 'hidden';
        nameTrue = true;
    } else {
        spanName.style.visibility = 'visible';
        nameTrue = false;
    }
}

document.getElementById("email").addEventListener("input", checkEmail);
document.getElementById("email").addEventListener("focus", checkEmail);
var spanEmail = document.getElementById("errorEmail");
function checkEmail() {
    var email = document.getElementById("email").value;
    if (email !== "") {
        spanEmail.style.visibility = 'hidden';
        emailTrue = true;
    } else {
        spanEmail.style.visibility = 'visible';
        emailTrue = false;
    }
}

document.getElementById("message").addEventListener("input", checkMessage);
document.getElementById("message").addEventListener("focus", checkMessage);
var spanMessage = document.getElementById("errorMessage");
function checkMessage() {
    var messagetext = document.getElementById("message").value;
    if (messagetext !== "") {
        spanMessage.style.visibility = 'hidden';
        messageTrue = true;
    } else {
        spanMessage.style.visibility = 'visible';
        messageTrue = false;
    }
}