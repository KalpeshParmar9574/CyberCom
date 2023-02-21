const _loginSession = function () {
  
    let session = JSON.parse(sessionStorage.getItem("adminLoginData"));
    
if (!session) {
    window.location.replace("../htmlfiles/login.html")
}
document.querySelector(".currentUser").textContent = `Hello ${session[0].name}`;

    
    
    debugger
    let loginData = JSON.parse(localStorage.getItem("userLoginData"));
    console.log(loginData)
    if (!loginData) {
        document.querySelector("#loginDetails").textContent = "data is not available";
    } else {
        
        let table = document.querySelector("#loginDetails")
      
    
        let rowCount = table.rows.length;
        for (let item = 0; item < loginData.length; item++){
            
            let row = table.insertRow(rowCount);
            row.insertCell(0).innerHTML = loginData[item].name;
            row.insertCell(1).innerHTML = loginData[item].loginTime;
            row.insertCell(2).innerHTML = loginData[item].logoutTime;
        
        }  
    }

   
}
// nav bar 
const _dashBoardButtonClick = function () {
    window.location.replace("../htmlfiles/dashboard.html")
}
const _usersdButtonClick = function () {
    window.location.replace("../htmlfiles/userDashBoard.html")
}

const _loginSessionsdButtonClick = function () {
    window.location.replace("../htmlfiles/loginSessionDashBoard.html")
}
const _logoutButtonClick = function () {
 
    window.location.replace("../htmlfiles/login.html")
}
