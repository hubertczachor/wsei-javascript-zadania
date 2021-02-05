//Zadanie 1
document.addEventListener('DOMContentLoaded', () => {

//(1
console.log(document.querySelector('#buz').parentElement);

//(2
console.log(document.querySelector('#baz').previousElementSibling);

//(3
console.log(document.querySelector('#foo').children);

//(4
console.log(document.querySelector('#foo').parentElement);

//(5
console.log(document.querySelector('#foo').children[0]);

//(6
console.log((function() {
        let foo = document.querySelector('#foo');
        let number = foo.children.length-1;
        let midChild = Math.round(number / 2);
        return foo.children[midChild];

 }));
});


//Zadanie 2 
const Listener= (e)=>{
    e.addEventListener("click", function(){
        console.log(this.firstElementChild.innerText.trim());
    });
};

Listener(document.getElementById("ex2"));


//Zadanie 3 
const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
       const span = button.nextElementSibling;
        if(span.style.display === "none") {
            span.style.display = "block";
        } else {
            span.style.display = "none";
        }
    });
})


//Zadanie 4
const buttons = document.querySelectorAll("#ex3 div button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        var randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        button.parentElement.style.backgroundColor = randomColor;
    });
})


//Zadanie 5
let ex5 = document.querySelector('#ex5');
let divs = ex5.querySelectorAll('div');
let list = ex5.querySelectorAll('ul>li');

//(1
function first(e) {
list[0].style.backgroundColor = e.srcElement.style.backgroundColor;
}
//(2
function second(e) {
list[list.length-1].style.backgroundColor = e.srcElement.style.backgroundColor;
}
(3
function third(e) {
Array.from(list)
    .filter((value) => value.innerHTML % 2 === 0)
    .forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
}
//(4
function fourth(e) {
list.forEach((li) => li.style.backgroundColor = e.srcElement.style.backgroundColor)
}
//(5
function fifth(e) {
ex5.querySelector('ul').style.backgroundColor = e.srcElement.style.backgroundColor;
}

divs.forEach((div) => {
div.addEventListener('mouseover', third)});


//Zadanie 6
 
//(1
let a  = document.querySelector('#ex6').firstElementChild.firstElementChild.firstElementChild;

//(2
let b = document.querySelector('#ex6').firstElementChild.parentElement.firstElementChild.firstElementChild.nextElementSibling.parentElement;

//(3
let c = document.querySelector('#ex6').parentElement.firstElementChild.parentElement.children[1].firstElementChild.firstElementChild.firstElementChild;