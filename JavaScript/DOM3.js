document.querySelector(".box").innerHTML
//'iam box 1'
document.querySelector(".box").innerText
//'iam box 1'
document.querySelector(".container").innerText
//'iam box 1\niam box 2'
document.querySelector(".container").outerHTML
// '<div class="container">\n        <div class="box">iam box 1</div>\n        <div class="box">iam box 2</div>\n    </div>'
document.querySelector(".box").outerHTML
// '<div class="box">iam box 1</div>'
document.querySelector(".box").tagName
// 'DIV'
document.querySelector(".box").nodeName
// 'DIV'
document.querySelector(".container").textContent
// '\n        iam box 1\n        iam box 2\n    '
document.querySelector(".container").hidden
// false
document.querySelector(".container").hidden=true
// true
document.querySelector(".box").innerHTML="hi bros"
// 'hi bros'
document.querySelector(".box").hasAttribute("style")
// false
document.querySelector(".box").hasAttribute("style")
// true
document.querySelector(".box").getAttribute("style")
// 'display: flex;'
document.querySelector(".box").setAttribute("style","display:flex")
// undefined
document.querySelector(".box").removeAttribute("style")
// undefined
document.designMode="on"
// 'on'
let newDiv = document.createElement("div")
    newDiv.innerHTML = "sanjay cheddy"
    // document.body.append(newDiv)
    // document.body.prepend(newDiv)
    // document.querySelector(".container").before(newDiv); //container ke pehle add kar dega
    // document.querySelector(".container").after(newDiv); //container ke bad add kar dega
    // document.querySelector(".container").prepend(newDiv); // container ke andar prepend kar dega
    // document.querySelector(".container").append(newDiv); // container ke andar append kar dega
    // document.querySelector(".container").replaceWith(newDiv); // container ko hi replace kar dega




    let cont=document.querySelector(".container")
    // cont.insertAdjacentHTML("beforeend","<b> hi bros <b>")
    // cont.insertAdjacentHTML("afterend","<b> hi bros <b>")
    // cont.insertAdjacentHTML("beforebegin","<b> hi bros <b>")
    // cont.insertAdjacentHTML("afterbegin","<b> hi bros <b>")


document.querySelector(".box").remove()


document.querySelector(".container-bg-green").classList
// DOMTokenList ['container-bg-green', value: 'container-bg-green
document.querySelector(".container-bg-green").className
document.querySelector(".container-bg-green").classList.add("harry")
document.querySelector(".container-bg-green").classList.remove("harry")
document.querySelector(".container-bg-green").classList.toggle("harry")

