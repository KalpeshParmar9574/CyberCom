
// login form validation 
// login functionality via sessions is still pending 
const _loginValidation = function () {

    var submit = true;
    // email check //
    let email = document.forms['loginForm']["email"].value;

    let pass = document.forms['loginForm']["pass"].value
    const regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    if (regex.test(email)) {
        _errorDisplay("Email is  not valid", "email");
        submit = false;
        return submit;
    }

    let adminData = JSON.parse(localStorage.getItem('adminData'));
    let userData = JSON.parse(localStorage.getItem('userData'));
    if (!adminData && !userData) {
        _errorDisplay("Email is  not regester please register ", "email");
        submit = false;
        return submit;
    } else {
     debugger
        if (adminData) {
            for (let item = 0; item < adminData.length; item++){
                if (adminData[item].email == email && adminData[item].pas == pass) {
                    let sessionUserData = [{
                        id: item,
                        name: adminData[item].name
                    }]
                    sessionStorage.setItem('adminLoginData', JSON.stringify(sessionUserData));
                    document.querySelector("#loginForm").setAttribute('action', "dashBoard.html");
                }
            }
        }
        debugger
        if (userData) {
            // let currenttime = Date().now;
            userData.forEach((item) => {
                if (item.email == email && item.pass) {
                  
                    let sessionUserData = [{
                    //  time:currenttime,
                        name: item.name,  
                        dob:item.dob
                    }]
                    sessionStorage.setItem('userLoginData', JSON.stringify(sessionUserData));
                    document.querySelector("#loginForm").setAttribute('action', "userpage.html");
                }
            });
        }
      
       
       
    }
}
const _redirectlg = function () {
    window.location.replace("../htmlfiles/register.html")
}

//*** below function is for the registration form validation and storing the data in to the local storage  */
// registratin form and validation is completed and the functionslity of redirection is pending 
const _regValidation = function () {
    debugger
    let username = document.forms['regForm']["Name"].value;
    let email = document.forms['regForm']["email"].value;
    let pass = document.forms['regForm']["pass"].value;
    let city = document.forms['regForm']["city"].value;
    let state = document.forms['regForm']["state"].value;
    var submit = true;
    // name validation //
    if (!username) {
        _errorDisplay("Name is to short it is not valid", "name")
        submit = false;
        return submit
    }
    // email check// 
    const regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
    if (regex.test(email)) {
        _errorDisplay("Email is  not valid", "email");
        submit = false;
        return submit;
    }

    // password  and re type password is match validation 
    let re_pass = document.forms['regForm']["re_pass"].value;
    if (pass !== re_pass) {
        _errorDisplay("password is not match with re_type password", "rePass")
        submit = false;
        return submit;
    }
    // data storing if the all the feilds are completely checked
    if (!_userDataStore(username, email, pass, city, state)) {
        _errorDisplay("Email is already  register please login ", "email")
        submit = false;
        return submit;
    }
    return submit;
}

// below function store the data in local storage 
const _userDataStore = function (userName, email, pass, city, state) {
    let userTempData = [{
        name: userName,
        email: email,
        pas: pass,
        city: city,
        state: state
    }]
    debugger
    let adminData = JSON.parse(localStorage.getItem('adminData'));
;
    if (adminData) {
        for (let item = 0; item < adminData.length; item++) {
            if (adminData[item].email == email) {
                return false;
            }
        }

        adminData.push(userTempData);
        localStorage.setItem('adminData', JSON.stringify(adminData));

        // session genration and storing the data in the session storage 
        let sessionUserData = [{
            id: adminData.length,
            name: userName
        }]
        sessionStorage.setItem('currentUserData', JSON.stringify(sessionUserData));
        return true;

    }
}

//***  below function is display the error message if it is occure in in any input field validation */
function _errorDisplay(errMsg, Id) {
    let errbox = document.getElementById(Id + "Err");// 
    errbox.textContent = errMsg;

}






