   
//********  task 1-2-3  **********//
   // function for adding and removing data from the list
   // addDataToList function add the child listItemnode in the UL list 
   // removeData function remove the list item from the UL list it is remove the element util the one element is left in the list it is use the for loop for removing multiple elements 
   
   
   //  function addData(){
        //     debugger
        //  var listItem = document.createElement("li");
        //  var list = document.getElementById("lis");
        //  listItem.innerHTML="new added data";
        //  list.appendChild(listItem);

        // }
        // add data function
        function addDataToList() {
			var listItem = document.createElement("li");
            var lis = document.getElementById("list");
			listItem.innerHTML = "new";
			lis.appendChild(listItem);
		}
        // remove data function 
        function removeData(){
            const list = document.getElementById("list"); 
            while(list.childElementCount>1){
                list.removeChild(list.firstChild);
            }
}
// below fnctions changen the text of the elements based on the events like button click 
// in below two functions i use getElementByTagName and the put the number [1] which mention that which element should be selected 
function changetxt01(){
    document.getElementsByTagName("p")[1].textContent="change by button 01"
            }
            function changetxt02(){
    document.getElementsByTagName("p")[2].textContent="change by text02 button"
}
    // below function change the elements text data        
            function changePara(){
                document.querySelector('.txt').textContent="done";
}

//*****  task04  *****//
//  Create a form with input fields and a submit button. Use JavaScript to validate the form 
//data and display error messages if any of the fields are invalid
function test() {
    var x = document.getElementById("pass").value;
    var y = document.getElementById("re_pass").value;
    console.log(x.match(y));
}
function valid() {
    
   
    console.log(emailCheck());
    if (!(emailCheck() && passcheck())) {
        return true;
    } else {
        return false;
    }
     }     
function emailCheck() {
    
const reg = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; 
    var email = document.getElementById("email");
    if (!(reg.test(email))) {
        document.getElementById("err_email").textContent = "email is not valid";
        return true;

    }
}
function passcheck() {
    const pass = document.getElementById("pass").value;
    const re_pass = document.getElementById("re_pass");
    var reg_pass = /^[a-zA-Z0-9!@#$%^&*]{6,16}$/
    if (!(reg_pass.test(pass))) {
        document.getElementById("err_pass").textContent = "password is not valid it should contain 8 latters smaller case and uoer case latter and special characters";
        return false
    } else {
        if (pass.match(re_pass)) {
            return true;
        }
    }
    

}


// task 04

function changeImg() {
    var img = document.getElementById("img");
    img.setAttribute("src", "img2.jpg");
}
