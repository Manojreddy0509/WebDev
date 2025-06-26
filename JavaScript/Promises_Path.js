import fs from "fs/promises"
let a = await fs.readFile("harry.txt")


let b = await fs.appendFile("harry.txt", "\n\n\n\nthis is amazing promise")
console.log(a.toString(),b)


import path from "path"

let myPath = "C:\\Users\\Users\\Manoj\\Downloads\\Sigma web dev\\harry.txt"
console.log(path.extname(myPath))

console.log(path.dirname(myPath))
//console.log(path.basename(myPath))

console.log(path.join("c:/", "programs\\harry.txt"))
