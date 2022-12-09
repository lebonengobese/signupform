// Function checks if theres int within user input 
function checkInputIsNumber(checkInput) {
    var value = document.forms["form_1"][checkInput].value;
    if (isNaN(value)) {
        console.log(checkInput)
        return false;
    }
    else {
        alert(checkInput, "Requires letters only.")
    }
}
document.getElementById("sign_up_btn").onclick = function () {

    let first_name = document.getElementById("f_name").value;
    let last_name = document.getElementById("l_name").value;
    let address = document.getElementById("address").value;
    let email = document.getElementById("email_id").value;
    let mobile_number = document.getElementById("mobile_num").value;
    let form_info = [];
    form_info = [first_name, last_name, address, email, mobile_number]
    console.log(form_info)

    // Exception Handling
    try {
        if (first_name == "") throw window.alert("First name is required.");
        if (last_name == "") throw window.alert("Last name is required.");
        if (address == "") throw window.alert("Address is required.");
        if (email == "") throw window.alert("Email is required.");
        if (mobile_number == "") throw window.alert("Mobile Number is required.")

    }
    catch (error) {
        console.log(error);
    }

    // Radio button check
    if (document.getElementById("gender").checked) {
        console.log(gender)
    }
    else {
        window.alert("Gender is required")
    }
    //


    // Function checks if theres int within user input 

    checkInputIsNumber("f_name")
    checkInputIsNumber("l_name")

    //

    // Cookies 
    let Regcookie;
    function cookieFunction(name, value, exp) {
        const date = new Date();
        date.setTime(date.getTime + exp * 24 * 60 * 60 * 1000)
        let expires = "expires=" + date.toUTCString();
        document.cookie = `${name}=${value}; ${expires}; path=/`;
    }
    cookieFunction("First Name", first_name, 30);
    cookieFunction("Email Address ", email, 30);
    cookieFunction("Mobile", mobile_number, 30);

    console.log(document.cookie)
    //
}

// Prevents users from entering special characters 
var specialKeys = new Array();
specialKeys.push(8);  //Backspace
specialKeys.push(9);  //Tab
specialKeys.push(46); //Delete
specialKeys.push(36); //Home
specialKeys.push(35); //End
specialKeys.push(37); //Left
specialKeys.push(39); //Right
function IsAlphaNumeric(e) {
    var keyCode = e.keyCode == 0 ? e.charCode : e.keyCode;
    var ret = ((keyCode >= 48 && keyCode <= 57) || (keyCode >= 65 && keyCode <= 90) ||
        (keyCode >= 97 && keyCode <= 122) ||
        (specialKeys.indexOf(e.keyCode) != -1 && e.charCode != e.keyCode));
    document.getElementById("error").style.display = ret ? "none" : "inline";
    return ret;
}
//