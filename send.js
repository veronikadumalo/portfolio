document.getElementById("name").addEventListener("input", checkName);
document.getElementById("name").addEventListener("focus", checkName);
var spanName = document.getElementById("errorName");
var nameTrue = false;
var emailTrue = false;
var messageTrue = false;
document.getElementById("send-button").disabled = true;
function checkName() {
    var name = document.getElementById("name").value;
    if (name !== "") {
        spanName.style.visibility = 'hidden';
        nameTrue = true;
        CheckAll();
    } else {
        spanName.style.visibility = 'visible';
        nameTrue = false;
        CheckAll();
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
        CheckAll();
    } else {
        spanEmail.style.visibility = 'visible';
        emailTrue = false;
        CheckAll();
        
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
        CheckAll();
    } else {
        spanMessage.style.visibility = 'visible';
        messageTrue = false;
        CheckAll();
    }
    
    
}

function CheckAll(){
    if(messageTrue==true && emailTrue==true && nameTrue==true ){
        document.getElementById("send-button").disabled = false;
    }else{
        document.getElementById("send-button").disabled = true;
    }
}

function sendEmail(){
    document.getElementById("contact-form").action="mailto:dumaloveronika@gmail.com";
}


