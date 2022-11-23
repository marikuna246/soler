
const form = document.getElementById("registration");

form.addEventListener("submit", (ivent) => {
    ivent.preventDefault();

    let GetRegistObjeqt = {

    };

    const pfname = document.getElementById("error_fname");
    const fnameValue = document.getElementById("fname").value;
    if( fnameValue == ""  ){
        GetRegistObjeqt.fname = "error";
        pfname.innerText = "Fill in the field";
    }

    const lnameValue = document.getElementById("lname").value;
    if(lnameValue == ""){
        GetRegistObjeqt.lname = "error";
        document.getElementById("error_lname").innerText = "Fill in the field";
    }

    const emailValue = document.getElementById("email").value;
    const email = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(emailValue == ""){
        GetRegistObjeqt.email = "error";
        document.getElementById("error_email").innerText = "Fill in the field";
    }
    if(emailValue.match(email)){ 
        localStorage.setItem("gmail", emailValue); 
    }else{
        GetRegistObjeqt.DoNot = "error";
        document.getElementById("error_email").innerText = "Enter a valid email";
    }

    const passwordValue = document.getElementById("password").value;
    const RpasswordValue = document.getElementById("Rpassword").value;
    if(passwordValue == "" || passwordValue.length < 4){
        GetRegistObjeqt.password = "error";
        // document.getElementById("error_password").innerText = "Enter a valid password";
    }
    if(passwordValue !== RpasswordValue || RpasswordValue == ""){
        GetRegistObjeqt.Rpassword = "error";
        document.getElementById("error_rpassword").innerText = "Passwords do not match";
    }else{
        localStorage.setItem ("password", RpasswordValue);
    }
    let clic = false;
    document.querySelectorAll('[name = "female"]').forEach(element =>{
        if(element.checked){
            clic = true;
        }
    });
    if(!clic){
        document.getElementById("error_gender").innerText = "clic";
        GetRegistObjeqt.gender = "error";

    }
    if(Object.keys(GetRegistObjeqt).length == 0){
        form.setAttribute("action","index.html");
    }
})

let eye = document.getElementById("fa-eye-slash");
let eyePassword = document.getElementById("password");
eye.addEventListener("click", function (){
    if(eyePassword.type == "password"){
        eyePassword.setAttribute("type", "text");
        eye.classList.add("fa-eye");
        eye.classList.remove("fa-eye-slash");
    }else{
        eyePassword.setAttribute("type", "password");
        eye.classList.add("fa-eye-slash");
        eye.classList.remove("fa-eye");
    }
})
