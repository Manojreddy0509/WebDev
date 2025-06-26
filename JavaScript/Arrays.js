//  let array =[1,40,36,false,"good",2.45]
// //  console.log(array)
// //  console.log(array.length)
// //  console.log(array[1])
// //  array[2]=566
// // console.log(array)
// let a=[10,2,90,45,23,56,89]
// // Arrays are Mutable
// let arr=[1,3,5,true,"hiu",3.44]
// console.log(arr)
// // console.log(arr.toString())
// // console.log(arr.join(" and "))
// //  console.log(arr.pop())
// //  console.log(arr)
// //  console.log(arr.push("how"))
// // console.log(arr)
//  console.log(arr.shift())
//  console.log(arr);
// console.log(arr.unshift("jack"))
// console.log(arr);
// console.log(delete arr[1]);
// console.log(arr);
// // console.log(a.concat(array,arr));
// console.log(a.sort());
// console.log(a.splice(1,2,22,900));
// console.log(a);
// console.log(a.slice(1,4))
// console.log(a.reverse());

//For loop
let x=[12,3,90,2,56]
// for (let i = 0; i < x.length; i++) {
//     const i = x[i];
//     console.log(i);
// }

//For Each loop
// x.forEach((value,index)=>{
//     console.log(value,index)

// })


//For In loop
for (const i of x) {
    console.log(i)
    
}

//Map
let newarr=x.map((i,index)=>{
    return i**2

})
console.log(newarr)

//Filter
const than= (e)=>{
    if (e>2){
        return true
    }
    return false
}
console.log(x.filter(than));

//Reduce
let z=[1,2,3,4,5]
const red=(a,b)=>{
    return a+b
}
console.log(z.reduce(red));
