let a=prompt("enter first number")
let b=prompt("enter second number")
// let sum=a+b
if (isNaN(a) || isNaN(b)){
    throw new Error("input sakkagi");
    
}
let sum=parseInt(a)+parseInt(b)
console.log("the sum is",sum)

try {
    console.log("the sum is",sum*x);
} catch (error) {
    console.log("hin brods");
    
}
