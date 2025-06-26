//FOR LOOP
let a=1;
for (let i = 0; i < 10; i++) {
    console.log(a+i);
}

//FOR IN LOOP
let obj={
    name:"sunny",
    role:"ai software",
    age:23
}

for (const key in obj) {
        const element = obj[key];
        console.log(key,element)

}

//FOR OF LOOP
for (const c of 'sunny') {
    console.log(c);
    
}

//while loop
let i=1
while (i<10) {
    console.log(i);
    i++
}

//DO WHILE LOOP
let s=6
do {
    console.log(s);
    s++
} while (s<4);

