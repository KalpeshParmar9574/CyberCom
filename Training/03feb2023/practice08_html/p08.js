// form validation

const form = document.getElementById('form');
form.addEventListener('submit',(e)=> {
    e.defaultPrevented();
    
})
//  function for the data store in local storage
function storeData() {
    // for personal details
    var fn = document.getElementById('firstName').value;
    localStorage.setItem("firstname", fn);
    var ln = document.getElementById('lastName').value;
    localStorage.setItem("firstname", ln);
    var dob = document.getElementById('dob').value;
    localStorage.setItem("firstname", dob);
    var gender = document.getElementById('gender').value;
    localStorage.setItem("firstname", gender);
    // for account info
    var em = document.getElementById('email').value;
    localStorage.setItem("email", em);
    var pss = document.getElementById('pass').value;
    localStorage.setItem("pass", pss);
    var sec_q = document.getElementById('security_question').value;
    localStorage.setItem("seurityQuestion", sec_q);
    var sec_a = document.getElementById('security_answer').value;
    localStorage.setItem("security", sec_a);
    // for contact info 
    var add = document.getElementById('addr').value;
    localStorage.setItem("addr", add);
    var city = document.getElementById('city').value;
    localStorage.setItem("city", city);
    var state = document.getElementById('state').value;
    localStorage.setItem("state", state);
    var zcode = document.getElementById('zipcode').value;
    localStorage.setItem("zipcode", zcode);
    var phn = document.getElementById('phn').value;
    localStorage.setItem("phn", phn);
    var phn = document.getElementById('phn').value;
    localStorage.setItem("phn", phn);
    var tphn = document.getElementById('type_phn').value;
    localStorage.setItem("type_phn", tphn);
    

    
    // displaying data

    
   
}

