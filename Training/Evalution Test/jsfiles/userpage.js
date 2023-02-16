let loginTime = Date();
let session = JSON.parse(sessionStorage.getItem("userLoginData"));
const _userOnLoad = function () {
    
    
    console.log(session)
if (!session) {
    window.location.replace("../htmlfiles/login.html")
    } 
    console.log(session);
    document.querySelector(".currentUser").textContent = `Hello ${session[0].name}`;
    let dob = session.dob;
    if (Date(dob) == Date.now()) {
        document.querySelector("#dob").textContent="Happy BirthDay!!!"
    }

    

}
const userLogout = function () {
    debugger
    let userData = JSON.parse(localStorage.getItem('userLoginData'));
    Data = {
        name: session[0].name,
        loginTime: loginTime,
        logoutTime:Date()
    }
    if (!userData) {
        localStorage.setItem('userLoginData',JSON.stringify([Data]))
    } else {
        userData.push(Data);
    }
window.location.replace("../htmlfiles/login.html")
}