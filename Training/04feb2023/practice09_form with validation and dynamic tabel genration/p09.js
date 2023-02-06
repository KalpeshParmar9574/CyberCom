function addData() {
    var ptn_name = document.getElementById('patient_name').value;
    var dob = document.getElementById('dob_patient').value;
    var relation = document.getElementById('relation').value;
    var total_charge = document.getElementById('total_charge').value;
    var table = document.getElementById('drug_patient_details_data')

    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML = ptn_name;
    row.insertCell(1).innerHTML = dob;
    row.insertCell(2).innerHTML = relation;
    row.insertCell(3).innerHTML = total_charge;
}
function removeData(){
    var table = document.getElementById('drug_patient_details_data');
    var rowCount = table.rows.length;
    if(rowCount<1){
        console.log(rowCount);
        
        // table.deleteRow(rowCount)
    }
   
    
  
   
    
}

// this way the function is not working function spouseDetails(){

//     var chk1 = documnet.getElementById('spouse_yes');
//     var chk2 = documnet.getElementById('spouse_no');
//     data_div = document.getElementById('spouse_details');
//     data_div.style.display = chk1.checked?"block":"none";
//     data_div.style.display = chk2.checked?"none":"block";s
      
// }
function spouseDetails(spouse_yes){
    
    var data_div = document.getElementById('spouse_details');
    data_div.style.display = spouse_yes.checked?"block":"none"; 
}
function spouseDetails2(spouse_no){
   
    var data_div = document.getElementById('spouse_details');
    data_div.style.display = spouse_no.checked?"none":"block"; 
}
function accidentDetails(accident_yes){
   
    var data_div = document.getElementById('accident_details');
    data_div.style.display = accident_yes.checked?"block":"none"; 
}
function accidentDetails2(accident_no){
   
   var data_div = document.getElementById('accident_details');
   data_div.style.display = accident_no.checked?"none":"block"; 
}
