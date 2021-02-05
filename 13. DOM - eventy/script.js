//Zadanie 1

//1)
document.getElementById('test-event').addEventListener('click', (e) => {
    console.info(e);
});

//2)
document.body.addEventListener('mousemove', (e) => {
    console.info(e);
});

//3)
document.getElementById('test-event').addEventListener('mouseover', (e) => {
    console.info(e);
});

//4)
document.addEventListener('keydown', (e) => {
    console.info(e);
});

//5)
document.addEventListener('scroll', (e) => {
    console.info(e);
});

//6)
document.getElementById('input-test').addEventListener('input', (e) => {
    console.info(e);
});


//Zadanie 2
document.querySelector('#ex2').addEventListener("click", function(){
    var a = document.querySelector('#ex2');
    var attrib = a.dataset.text;
    var txt = document.querySelector('#span-ex2')
    txt.innerHTML = attrib;
});


//Zadanie 3
function Color() {
    const myElement = document.getElementById('ex3');

    myElement.addEventListener('mouseover', (event) => {
        event.target.style.backgroundColor = 'blue';
    });

    myElement.addEventListener('mouseout', (event) => {
        event.target.style.backgroundColor = 'red';
    });
}
Color();


//Zadanie 4
const Chars = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
const errorSpan = document.getElementById('ex3-err');
document.getElementById('input-test').addEventListener('input', (e) => {
    errorSpan.innerText = Chars.some(char => e.target.value.includes(char))
        ? 'Tutaj nie może być wpisana cyfra'
        : null;
});


//Zadanie 5
function MyClicks() {
    const button = document.getElementById('ex5-button');
    var a = 0;
    button.addEventListener('click', counter);
    
    function counter() {
        ++a;
        button.nextElementSibling.innerText = a;

        if (a === 10) button.removeEventListener('click', counter);

    }
}
MyClicks();


//Zadanie 6
document.addEventListener('scroll', (e) => {
    document.body.style.backgroundColor = window.scrollY >= 200
        ? 'red'
        : 'white';
});


//Zadanie 7
  
var Input = document.querySelector('#calculator > input');
var Flag = false;
var another = false;

document.querySelectorAll('#calculator > div > button').forEach((element) => {
    element.addEventListener('click', (event) => {
        if (Flag == true) {
            Input.value = "";
            Flag = false;
        }
        Input.value = Input.value + event.target.innerText;
        if (another == true) {
            Input.value = eval(Input.value);
            another = false;
            Flag = true;
        }
        if (['/', '*', '+', '-'].includes(event.target.innerText)) {
            another = true;
        }
    });
});

});