var userName = document.querySelector("#username");
var password = document.querySelector("#password");
var email = document.querySelector("#email");


// document.getElementById("error").innerHTML = "Please fill the User Name field"

var error = document.getElementById("error")
var errorName = (names) => error.innerHTML = "Please fill the " + names + " field";
var errorMain = document.getElementById("error-main")
var style = () => {


    setInterval(() => {
        error.style.display = 'none'
        // error.style.transition = '2s'
    }, 3000)
    clearInterval()
    error.style.display = 'block'
    error.style.transition = '2s'
    error.setAttribute('class', 'error')
}
var onSubmit = function () {
    if (userName.value === "") {
        errorName("User Name");
        style();
    } else if (password.value === "") {
        errorName("Password");
        style();
    } else if (email.value === "") {
        errorName("Email");
        style();
    }











    else {
        console.log(userName.value);
        console.log(password.value);
        console.log(email.value);
    }
}