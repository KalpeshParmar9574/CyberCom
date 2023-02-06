// form validation

// email validation
function Validate() {
    let email = document.getElementById('email').value;
    let re_email = document.getElementByName('re_email').value;
     var reg = /^[a-zA-Z0-9.!#$%&'-]+@[a-zA-Z0-9-]+(?:\.[a-zA-z0-9-]+)*$/;
    if (email.match(reg)) {
        alert('valid');
        return true;
    } else {
        alert('not valid');
        return false;
    }
}


