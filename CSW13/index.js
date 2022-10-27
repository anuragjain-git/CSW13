var name = prompt("What is your name?");
var x = name.slice(0,1);
var z = name.slice(1,name.length);
x=x.toUpperCase();
z=z.toLowerCase() 
alert("Hello "+x+z+", Welcome to my Blog!");

// console.log prints in console
console.log(document.getElementsByTagName("li"));
console.log(document.getElementsByTagName("h1").length);

// Change style using id
//in ById we write getElement
document.getElementById("li-1").style.color="red";

// Change style using tagname
//in ByTagName we write getElements
document.getElementsByTagName("h1")[0].style.color="Maroon"; //[0] changes first h1 color to red
document.getElementsByTagName("title")[0].textContent="JavaScript"; // in textContent we can't use html tag
document.getElementsByTagName("p")[0].innerHTML="<a href='mailto:itsanuragjain.0@gmail.com'>Contact</a>"; // in innerHTMLtag we can use html tag


// querySelector and querySelectorAll , we can change ids, classes, tags
document.querySelector("li").style.color="pink"; //change first li tag
document.querySelectorAll("li")[2].style.color="red";

document.querySelector("li").classList;
document.querySelector("li").classList.add("invisible");
// document.querySelector("a").setAttribute("href");