console.log("hello"); 

// Accessing document body correctly
console.log(document.body);
console.log(document.body.childNodes);
console.log(document.body.childNodes[0]); // First node (usually text)
console.log(document.body.childNodes[1].childNodes); // Accessing a child's child nodes

// Storing an element in a variable
let co = document.body.childNodes[1];
console.log(co);
console.log(co.firstChild); // First child node (can be text)
console.log(co.lastChild); // Last child node (can be text)
console.log(co.firstElementChild); // First child element
console.log(co.lastElementChild); // Last child element

// Styling an element dynamically
co.firstElementChild.style.backgroundColor = "red";

// Accessing elements in the hierarchy
console.log(document.body.firstElementChild);
console.log(document.body.firstElementChild.childNodes); 
console.log(document.body.firstElementChild.children); 
console.log(document.body.firstElementChild.children[3]); 
console.log(document.body.firstElementChild.children[1].parentElement);
console.log(document.body.firstElementChild.children[2].previousElementSibling);
console.log(document.body.firstElementChild.children[2].nextElementSibling); // Accessing next element sibling

// Optional: Modify the next sibling element
document.body.firstElementChild.children[2].nextElementSibling.style.backgroundColor = "blue";
