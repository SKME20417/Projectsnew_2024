function validateform() {
    document.getElementById("fullnameerror").innerHTML = "";
    document.getElementById("gendererror").innerHTML = "";
    document.getElementById("emailerror").innerHTML = "";
    document.getElementById("skillserror").innerHTML = "";
    document.getElementById("cityerror").innerHTML = "";


    var fullname = document.getElementById("fname").value;
    var email = document.getElementById('email').value;
    var city = document.getElementById('city').value;
    var gender = document.querySelector('input[name = "gender"]:checked');
    var skills = document.querySelectorAll('input[name = "skills"]:checked');

    if (fullname == "") {
        document.getElementById("fullnameerror").innerHTML = "Please enter a full name";
        return false;
    }
    if (!gender) {
        document.getElementById("gendererror").innerHTML = "Gender is required";
        return false;
    }

    var emailregex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailregex.test(email)) {
        document.getElementById("emailerror").innerHTML = "Invaild Email Id";
        return false;
    }
    if (skills.length == 0) {
        document.getElementById("skillserror").innerHTML = "Select atleast one skills";
        return false;
    }
    if (city == "") {
        document.getElementById("cityerror").innerHTML = "Please select a city"
        return false;
    }
    return true;


}