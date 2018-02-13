var invalidCountWidget = 0;
var firstName = document.forms["orderForm"]["firstName"];
var lastName = document.forms["orderForm"]["lastName"];
var address = document.forms["orderForm"]["address"];
var city = document.forms["orderForm"]["city"];
var postalCode = document.forms["orderForm"]["postalCode"];
var widget1qty = document.forms["orderForm"]["widget1qty"];
var widget2qty = document.forms["orderForm"]["widget2qty"];
var widget3qty = document.forms["orderForm"]["widget3qty"];
var errorCodeFirstName = document.getElementById("errorCodeFirstName");
var errorCodeLastName = document.getElementById("errorCodeLastName");
var errorCodeAddress = document.getElementById("errorCodeAddress");
var errorCodeCity = document.getElementById("errorCodeCity");
var errorCodePostalCode = document.getElementById("errorCodePostalCode");
var errorCodeWidget = document.getElementById("errorCodeWidget");

function validateForm() {
    invalidCountWidget = 0;
                      
    if (firstName.value == "") {
        firstName.style.border = "1px solid #DD0033";
        errorCodeFirstName.innerHTML = "You must enter a first name";
        invalidCountWidget += 1;
    } else {
        errorCodeFirstName.innerHTML = "";
        firstName.style.border = "1px solid black";
        invalidCountWidget == 0;
    }
            
    if (lastName.value == "") {
        errorCodeLastName.innerHTML = "You must enter a last name";
        lastName.style.border = "1px solid #DD0033";
        invalidCountWidget += 1;
    } else {
        errorCodeLastName.innerHTML = "";
        lastName.style.border = "1px solid black";
        invalidCountWidget == 0;
    }
            
    if (address.value == "") {
        errorCodeAddress.innerHTML = "You must enter an address";
        address.style.border = "1px solid #DD0033";
        invalidCountWidget += 1;
    } else {
        errorCodeAddress.innerHTML = "";
        address.style.border = "1px solid black";
        invalidCountWidget == 0;
    }
            
    if (city.value == "") {
        errorCodeCity.innerHTML = "You must enter a city";
        city.style.border = "1px solid #DD0033";
        invalidCountWidget += 1;
    } else {
        errorCodeCity.innerHTML = "";
        city.style.border = "1px solid black";
        invalidCountWidget == 0;
    }
            
    if (postalCode.value == "") {
        errorCodePostalCode.innerHTML = "You must enter a 6-digit postal code";
        postalCode.style.border = "1px solid #DD0033";
        invalidCountWidget += 1;
    } 
    else {
        errorCodePostalCode.innerHTML = "";
        postalCode.style.border = "1px solid black";
        invalidCountWidget == 0;
    }
            
    if (widget1qty.value == 0 && widget2qty.value == 0 && widget3qty.value == 0) {
        errorCodeWidget.innerHTML = " >  You must enter a value for a widget";
        widget1qty.style.border = "1px solid #DD0033";
        widget2qty.style.border = "1px solid #DD0033";
        widget3qty.style.border = "1px solid #DD0033";
        invalidCountWidget += 1;
    } 
            
    if (widget1qty.value > 0 || widget2qty.value > 0 || widget3qty.value > 0) {
        errorCodeWidget.innerHTML = "";
        widget1qty.style.border = "1px solid black";
        widget2qty.style.border = "1px solid black";
        widget3qty.style.border = "1px solid black";
        invalidCountWidget == 0;
    }
            
    if (invalidCountWidget == 0) {
        return true;
    } else {
        return false;
    }
}

function cancelForm() {
    errorCodeFirstName.innerHTML = "";
    errorCodeLastName.innerHTML = "";
    errorCodeAddress.innerHTML = "";
    errorCodeCity.innerHTML = "";
    errorCodePostalCode.innerHTML = "";
    errorCodeWidget.innerHTML = "";
    firstName.style.border = "1px solid black"; 
    lastName.style.border = "1px solid black";
    address.style.border = "1px solid black";
    city.style.border = "1px solid black";
    postalCode.style.border = "1px solid black";
    widget1qty.style.border = "1px solid black";
    widget2qty.style.border = "1px solid black";
    widget3qty.style.border = "1px solid black";
}