var userName = document.querySelector("#username");
var password = document.querySelector("#password");
var email = document.querySelector("#email");
var gender = document.getElementsByClassName("gender");
var city = document.querySelector("#country");
var consent = document.querySelector("#consent");
// document.getElementById("error").innerHTML = "Please fill the User Name field"

var error = document.getElementById("error")

var errorName = (names) => {
    if (names == "success") {
        error.innerHTML = "You successfully register"
    } else {
        error.innerHTML = "Please fill the " + names + " field"
    }
};
var style = (check) => {
    setInterval(() => {
        error.style.display = 'none'

    }, 3000)
    // clearInterval()
    error.style.display = 'block'
    if (check == 'error') {
        error.setAttribute('class', 'card error')
    } else {
        error.setAttribute('class', 'card success')

    }
}

var chooseGender = ""


var getUser = []

var onSubmit = function () {
    for (var i = 0; i < gender.length; i++) {
        // console.log(gender[i].value);
        if (gender[i].checked) {
            chooseGender = gender[i].value;
        }
    }
    if (userName.value == "") {
        errorName("User Name");
        style("error");
    } else if (password.value == "") {
        errorName("Password");
        style("error");
    } else if (email.value == "") {
        errorName("Email");
        style("error");
    } else if (chooseGender == "") {
        errorName("Gender");
        style("error");
    } else if (city.value == "none") {
        errorName("City")
        style("error");
    } else if (!consent.checked) {
        errorName("consent")
        style("error");
    }











    else {
        // console.log(userName.value);
        // console.log(password.value);
        // console.log(email.value);
        var userObject = {
            name: userName.value,
            password: password.value,
            email: email.value,
            gender: chooseGender,
            city: city.value,
            consent: consent.value
        }
        getUser.push(userObject);
        errorName("success")
        style("success");

        disEle(getUser);


    }
    function disEle(arr) {
        var ele = "";
        for (var i = 0; i < arr.length; i++) {
            ele += "<tr>" +
                "<td>" + arr[i].name + "</td>" + "<td>" + arr[i].password + "</td>" + "<td>" + arr[i].email + "</td>" + "<td>" + arr[i].gender + "</td>" + "<td>" + arr[i].city + "</td>" + "<td>" + arr[i].consent + "</td>"
                + "</tr>";

        }
        document.getElementById("bindUser").innerHTML = ele
    }
}