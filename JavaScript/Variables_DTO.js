console.log("hi this is manoj")
var a = 5;
var b = 10;
var c = "sui"
//var has globally scope

console.log(a+b)
console.log(a+b+10)
console.log(typeof a ,typeof b ,typeof c)
const z=23;
console.log(z)
//z=z+1 not possible in const its constant
console.log(z)
let x=14;
console.log(x)
x=x+1
console.log(x)
//let changes when its modified
//let has block scope
{
    let x=1000;
    console.log(x)
}
console.log(x)
let e=12;
let f=2.33;
let g=true;
let h="hi" ;
let i =undefined;
let j=null;
console.log(typeof e,typeof f,typeof g,typeof h,typeof i,typeof j)
let o={
    name:"nami",
    "age":23
}
console.log(o)
o.gender="male"
console.log(o)




