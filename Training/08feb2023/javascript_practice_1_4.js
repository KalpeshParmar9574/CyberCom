// case01

 const H = [1, 8, 2, 5, 4, 8, 3, 7];

 function max(height) {
    let maxArea = 0, left = 0, right = height.length-1
    while(left < right){
        let width = right - left
        maxArea = Math.max(maxArea,  Math.min(height[left],height[right]) * width)
        height[left] < height[right] ? left++ : right--
    }
    return maxArea
};
console.log(max(H))
// function totalWater(height) {
//     let left = 0;
//     let right = height.length - 1;
//     let maxWater = 0;
//     let leftItem,rightItem, total;
    
//     while (right > left) {
//         leftItem = height[left];
//         rightItem = height[right];
    
//         if (leftItem > rightItem)
//         {
//             cal = rightItem * (right - 1);
//             right--;
//         } else {
//             cal = leftItem * (right- 1);
//             left++;
//         }
//         if (total > maxWater) {
//             maxWater = total;
//         }
//     } return maxWater;
// }









// case02
var input = "<html><head></head><body></body></br></html>";

// console.log(inputArr)

 let our_str= str(input);

//  console.log(our_str)

 let newTemp=[]
 our_str.forEach(j=>{
    if(j[0]!="/"){
        newTemp.push(j)
        // console.log(newTemp)
        if(our_str.indexOf('/'+j)>0){
            console.log(our_str.indexOf('/'+j))
            newTemp.push("/"+j)
            // console.log(newTemp)
        }

    }else if(j[j.length-1]=='/'){
        newTemp.push(j)
    }
 })

 console.log(newTemp)

 if(newTemp.length==our_str.length){
    console.log("valid")
 }else{
    console.log("invalid")
 }
// console.log(newTemp)





function str(input){
let token = [];


  for (let i = 0; i < input.length; i++) {
    let temp = input.substring(input.indexOf("<") + 1, input.indexOf(">"));
    // console.log(temp);

        token.push(temp)
    
    input = input.slice(input.indexOf(">")+1)
    // console.log(input)
  }

    // console.log(token);
    // let newTemp = [];

    // token.forEach(data=>{
    //     if(data[0]!="/"){
    //         newTemp.push(data)
    //     }
    // })
    // console.log(newTemp)

    return token;

  
}
  