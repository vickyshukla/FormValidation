let nameValue = document.getElementById("name-error");
let phoneValue = document.getElementById("phone-error");
let emailValue = document.getElementById("email-error");
let messValue = document.getElementById("message-error");
let subValue = document.getElementById("submit-error");

function validateName(){
    let name = document.getElementById("form-name").value;
    if(name.length == 0){
        nameValue.innerHTML = "Name is required";
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameValue.innerHTML = "Write your full name.";
        return false;
    }
    nameValue.innerHTML = '<i class="fas fa-check"></i>';
    return true;
}

function validatePhone(){
    let phone = document.getElementById("form-phone").value;

    if(phone.length == 0){
        phoneValue.innerHTML = "Phone no is required";
        return false;
    }
    if(phone.length !== 10){
        phoneValue.innerHTML = "Phone no should be 10 digit only";
        return false;
    }
    if(!phone.match(/^[0-9]{10}$/)){
        phoneValue.innerHTML = "Enter a number(0-9) digit.";
        return false;
    }
    phoneValue.innerHTML = '<i class="fas fa-check"></i>';
    return true;
}

function validateEmail(){
    let email = document.getElementById("form-email").value;
    if(email.length == 0){
        emailValue.innerHTML = "Email is required";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailValue.innerHTML = "Enter a valid email";
        return false;
    }
    emailValue.innerHTML = '<i class="fas fa-check"></i>';
    return true;
}

function validateMessage(){
    let message = document.getElementById("form-mess").value;
    let required = 30;
    let left = required - message.length;
    if(left > 0){
        messValue.innerHTML = left + " More charecter required";
        return false;
    }
    messValue.innerHTML = '<i class="fas fa-check"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()){
        subValue.style.display = "block";
        subValue.innerHTML = "Please feel all the required field correctly."
        setTimeout(function(){subValue.style.display = "none";}, 5000);
        return false;
    }
}





