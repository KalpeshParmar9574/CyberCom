// navbar redirection with js







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


    let session = JSON.parse(sessionStorage.getItem("userLoginData"));
    if (session) {
        let userSessionDetails = {
            name: session.name,
            loginTime: session.loginTime,
            logoutTime: Date()
        }
        localStorage.setItem('userLoginSessionData', JSON.stringify(userSessionDetails));
    }

  
    window.location.replace("../htmlfiles/login.html")
}





// fetching user data from the local storage
const _onloadDashBoard = function () {
// geeting user details from the sessions
// if session is not created than below code is prevent user to open the dash board 
    let session = JSON.parse(sessionStorage.getItem("adminLoginData"));
    console.log(session)
if (!session) {
    window.location.replace("../htmlfiles/login.html")
}
document.querySelector(".currentUser").textContent = `Hello ${session[0].name}`;
   

// below code is getting the age vise user total numbers 
    let userDataLS = JSON.parse(localStorage.getItem("userData"));
    console.log(userDataLS);
    let count2 = 0;
    let count1 = 0
    let count3 = 0;

    userDataLS.forEach((item) => {
        if (item.age < 18) {
            count1++
        }
        return count1
    })
    userDataLS.forEach((item) => {
        if (item.age < 50) {
            count2++
        }
        return count2
    })

    userDataLS.forEach((item) => {
        if (item.age > 50) {
            count3++
        }
        return count3
    })

    console.log(count2);
        
 }

// on load function for the userDashBoard 
const _onloadUserDashBoard = function () {
 
    let session = JSON.parse(sessionStorage.getItem("adminLoginData"));
    if (!session) {
        window.location.replace("../htmlfiles/login.html")
    }
    document.querySelector(".currentUser").textContent = `Hello ${session[0].name}`;
    _showUserData()
    // let userData = JSON.parse(localStorage.getItem("userData"));
}


// ******script for  userDashborad for storing and editing the user data ******//
const _addUser = function () {
   
    let userName = document.getElementById("userName").value;
    let userEmail = document.getElementById("userEmail").value;
    let userPass = document.getElementById("userPass").value;
    let dob = document.getElementById("userDob").value;
    let age = _ageCalculate(dob);

  
    let currentuserData = JSON.parse(localStorage.getItem('userData'));
    if (currentuserData && currentuserData.length > 0) {
        let userData = {
            name: userName,
            email: userEmail,
            pass: userPass,
            dob : dob,
            age: age
        }
        currentuserData.push(userData);
        localStorage.setItem('userData', JSON.stringify(currentuserData));
    } else {
        let userData = {
            name: userName,
            email: userEmail,
            pass: userPass,
            dob : dob,
            age: age
        }
        localStorage.setItem('userData',JSON.stringify([userData]))
    }
    

    _showUserData()
}
// below function is calculating the age 
const _ageCalculate = function (dob) {
    var dob = new Date(dob);
    var month_diff = Date.now() - dob.getTime();
    var age_dt = new Date(month_diff);    
    var year = age_dt.getUTCFullYear();
    var age = Math.abs(year - 1970);
    return age;
}

// below function is show the userdata which is currently stored in local storage 
const _showUserData = function () {
  
    let userData = JSON.parse(localStorage.getItem('userData'));
    console.log(userData.length)
    if (userData) {
 
        let table = document.getElementById('userDetails')
    
        var rowCount = table.rows.length;
       
        for (let item = 0; item < userData.length; item++){
            
            var row = table.insertRow(rowCount);
           
            row.insertCell(0).innerHTML = userData[item].name;
            row.insertCell(1).innerHTML = userData[item].email;
            row.insertCell(2).innerHTML = userData[item].pass;
            row.insertCell(3).innerHTML = userData[item].dob;
            row.insertCell(4).innerHTML = userData[item].age;
            row.insertCell(5).innerHTML = `<button onclick="_editUser(${item})">Edit</button> <button onClick="removeUser(${item})">Delete</button>  `;
        }  
    }   
}
debugger
function removeUser(item) {
    let data = JSON.parse(localStorage.getItem("userData"));
    data.splice(item, 1);
    localStorage.setItem('userData', JSON.stringify(data));
}

const _editUser = function (item) {
    console.log(item)
    var userData =
        JSON.parse(localStorage.getItem('userData'));
         document.getElementById("userName").value=userData[item].name;
        document.getElementById("userEmail").value=userData[item].email;
         document.getElementById("userPass").value=userData[item].pass;
    document.getElementById("userDob").value = userData[item].dob;

    document.getElementById("addUser").setAttribute('class', "hidden");
     document.getElementById("updateUser").removeAttribute('class', "hidden");
    document.querySelector("#updateUser").setAttribute('onclick',`update(${item})`)
    debugger
   
}
debugger
function update(i) {
    let user = JSON.parse(localStorage.getItem("userData"));
    user[i].name = document.getElementById("userName").value;
    user[i].email = document.getElementById("userEmail").value;
    user[i].pass = document.getElementById("userPass").value;
    user[i].dob = document.getElementById("userDob").value;
    console.log(user);
    localStorage.setItem('userData', JSON.stringify(user));
    document.getElementById("addUser").removeAttribute('class', "hidden");
    document.getElementById("updateUser").setAttribute('class', "hidden");
    _showUserData()

}
