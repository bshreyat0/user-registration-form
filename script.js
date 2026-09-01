 
document.getElementById("registrationForm").addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    // Patterns
    let namePattern = /^[A-Za-z ]+$/;
    let phonePattern = /^[6-9][0-9]{9}$/;
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Clear previous errors
    let errors = document.querySelectorAll("small");
    errors.forEach(function(item){
        item.innerHTML = "";
    });

    // Name Validation
    function checkName(id){

        let input = document.getElementById(id);

        if(input.value.trim() == ""){

            input.nextElementSibling.innerHTML = "This field is required";
            valid = false;

        }

        else if(!namePattern.test(input.value)){

            input.nextElementSibling.innerHTML = "Only alphabets allowed";
            valid = false;

        }

    }

    checkName("fname");
    checkName("lname");
    checkName("father");
    checkName("mother");

    // DOB

    let dob = document.getElementById("dob");

    if(dob.value == ""){

        dob.nextElementSibling.innerHTML = "Select Date of Birth";
        valid = false;

    }

    // Gender

    let gender = document.getElementsByName("gender");

    let selected = false;

    for(let g of gender){

        if(g.checked){

            selected = true;

        }

    }

    if(!selected){

        document.getElementById("genderError").innerHTML = "Select Gender";
        valid = false;

    }

    // Phone

    let phone = document.getElementById("phone");

    if(!phonePattern.test(phone.value)){

        phone.nextElementSibling.innerHTML = "Enter valid 10-digit number";
        valid = false;

    }

    // Email

    let email = document.getElementById("email");

    if(!emailPattern.test(email.value)){

        email.nextElementSibling.innerHTML = "Enter valid Email ID";
        valid = false;

    }

    // Password

    let password = document.getElementById("password").value;

    let confirmPassword = document.getElementById("confirmPassword").value;

    if(password.length < 8){

        document.getElementById("password").nextElementSibling.innerHTML =
        "Minimum 8 characters";
        valid = false;

    }

    if(password != confirmPassword){

        document.getElementById("confirmPassword").nextElementSibling.innerHTML =
        "Passwords do not match";
        valid = false;

    }

    // Photo

    if(document.getElementById("photo").files.length == 0){

        alert("Upload Passport Size Photo");
        valid = false;

    }

    // Signature

    if(document.getElementById("sign").files.length == 0){

        alert("Upload Signature");
        valid = false;

    }

    // Final

    if(valid){  

        alert("Registration Submitted Successfully!");

        document.getElementById("registrationForm").reset();

    }

});