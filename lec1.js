//using var
var s1="tannu";
console.log(s1);

var s1="saloni";
console.log(s1);


//using let
let s2="tannu";
console.log(s2);
 s2="saloni";
 console.log(s2);

//using const
const s3="tannu";
console.log(s3);
// s3="annu";
// console.log(s3); //it gives error becoz s3 is already initialized which is constant variable(not change fix position)



//FUNCTION
var x1=100;
console.log(x1);
function Sumoftwo (num1,num2){
    let ans=num1+num2;
    return ans;
}
let Sumoftwoby=Sumoftwo(2,3);
console.log(Sumoftwoby);
console.log(x1);
var x2=200;
console.log(x2);


//function

function a(){
    var x=10;
    console.log(x);
    b();
    function b(){
        var y=20;
        console.log(y);
        c();
        function c(){
            var z=30;
            console.log(z);
            a();
        }
    }

}
a();