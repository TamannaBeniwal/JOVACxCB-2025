console.log("this is my sum module");

var myName="tamanna";

function sumOfTwoNumbers(x,y){
    const sum = x+y;
    console.log(sum);
}

module.exports={
    myName: myName,
    sumOfTwoNumbers: sumOfTwoNumbers


}