var userArr = [
    {
        user:{
            name:"abc",
            age:22,
            education:{
                degree:{
                    field:"BE",
                    college:"Gec Bhavnagar"
                }
            }
        }
    },
    {
        user:{
            name:"xyz",
            age:22,
            education:{
                degree:{
                    field:"BE",
                    college:"Gec Bhavnagar"
                }
            }
        }
    }
]
// function click() {
//     var table=document.getElementById("table");
//     for (let i = 0; i < userArr.length; i++){
//         table.innerHTML = `<table>
//               <tr><td>name</td>
//               <td>age</td>
//               <td>degree</td> </tr>
//         <tr>
//         <td>${userArr[i].name}</td>
//         <td>${userArr[i].age}</td>
//         <td>${userArr[i].degree.feild}</td>
//         </tr>
//         </table>`

//     }  
// }
var tab = document.getElementById('tab');
for (let i = 0; i < userArr.length; i++){
    var row = tab.insertRow();
    row.insertCell(0).innerHtml = userArr[i].name;
    row.insertCell(1).innerHtml = userArr[i].age;
    row.insertCell(2).innerHtml = userArr[i].degree.feild;

}