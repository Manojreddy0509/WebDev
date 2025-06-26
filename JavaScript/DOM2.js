console.log("hi");
let boxes=document.getElementsByClassName("box")
console.log(boxes);
boxes[4].style.backgroundColor="red"

document.getElementById("12").style.backgroundColor="pink"

document.querySelector(".box").style.backgroundColor="black"

document.querySelectorAll(".box").forEach(e=>
{e.style.backgroundColor="black";})

document.getElementsByTagName("div")
e=document.getElementsByTagName("div")

e[1].matches(".container")
e[0].matches(".container")

e[1].closest(".box")

document.querySelector(".container").contains(e[0])

