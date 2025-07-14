var a=20;
console.log(a);
function acall(){
    var aa=10;
    var bb=20;
    console.log("answer:",aa+bb);

}
acall();


//globally scope

{
    var a=100;
    var b=200;
    var c=300;
}
console.log(a);
console.log(b);
console.log(c);


//closures 1st

// function a(){
//     var x=7;
//     function b(){
//         var y=8;
//         console.log(y);
//     }
//     b();
// }
// a();


//2nd

function x(){
    var a=7;
    function y(){
        console.log(a);
    }
    a=100;
    return y;
}
var z=x();
console.log(z);
z();


//settimeout and setinterval

//1to10

for(var i=0;i<=10;i++){
    console.log(i);
}

//5 times 5

for(var i=0;i<=4;i++){
    setTimeout(()=>{
        console.log(i);

    },2000 )
}




