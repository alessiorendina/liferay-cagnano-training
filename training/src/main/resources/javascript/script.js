function check_data() {
    let password = document.getElementById("password");
    let email = document.getElementById("email");
    let name = document.getElementById("name");

    if (!name.validity.valid) {
        alert("Invalid name");
    }
    else if (!email.validity.valid){
        alert("Email is not valid type");
     }
    else if (!password.validity.valid){
        alert("Password must be at least 6 characters long");
    }
    else{
        alert("Registration completed!");
    }
}