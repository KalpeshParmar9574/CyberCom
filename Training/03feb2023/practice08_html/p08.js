// form validation
function validation() {
    var submit = true;
        var submit = true;
        // name check 
          var fname = document.forms['myform']["fname"].value;
          var lname = document.forms['myform']["fname"].value;
      
          if (fname == "" || lname== "") {
              _erroMsg("Name is to short it is not valid","nameErr")
              submit = false;
              return submit
          }
          // email check 
          var email = document.forms['myform']["email"].value;
          var reEmail = document.forms['myform']["re_email"].value;
          const regex = /^[a-zA-Z0-9.! #$%&'*+/=? ^_`{|}~-]+@[a-zA-Z0-9-]+(?:\. [a-zA-Z0-9-]+)*$/;
          if (regex.test(email)) {
              _erroMsg("Email is  not valid");
              submit = false;
              return submit;
          }
          if (email !== reEmail) {
              _erroMsg(" Email and Re enter email is not match ","emailErr");
              submit = false
              return submit;
          }
      
          // password check
      
          var pass = document.forms['myform']["pass"].value;
          var re_pass = document.forms['myform']["re_pass"].value;
          if (pass !== re_pass) {
              _erroMsg("password is not match with re_type password","passErr")
              submit = flase;
              return submit;
          }
          // note is future mobile check is added 
          return submit;

    

}

function _erroMsg(errmsg,errid) {
    // alert(errmsg);
    var err = document.getElementById(errid);
    err.textContent = errmsg;
   

}
//  function for the data store in local storage
function storeData() {
    // for personal details
    var fn = document.getElementById('fname').value;
    
    var ln = document.getElementById('lname').value;
  
    var dob = document.getElementById('dob').value;
   
    var gender = document.getElementById('gender').value;

    // for account info
    var em = document.getElementById('email').value;
   
    var pass = document.getElementById('pass').value;
  
    var sec_q = document.getElementById('security_question').value;
    
    var sec_a = document.getElementById('security_answer').value;
    
    // for contact info 
    var add = document.getElementById('addr').value;
   
    var city = document.getElementById('city').value;
   
    var state = document.getElementById('state').value;
   
    var zcode = document.getElementById('zipcode').value;
    
    var phn = document.getElementById('phn').value;
    
    var phn = document.getElementById('phn').value;
 
    var tphn = document.getElementById('type_phn').value;
    
    var user = {
        fname: fn,
        lname: ln,
        dob: dob,
        gender: gender,
        email: em,
        pass: pass,
        sec_Q: sec_q,
        sec_A: sec_a,
        add: add,
        city: city,
        state: state,
        zipcode: zcode,
        phNo: phn,
        
        
    }
    localStorage.setItem(user);
    

    
    // displaying data

    
   
}

