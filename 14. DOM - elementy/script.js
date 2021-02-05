//Zadanie 1
function TagNames(els) {
    const elsArr = Array.from(els);
    return elsArr.map((el) => el.tagName);
}

console.log(TagNames(document.getElementsByClassName('more-divs')));


//Zadanie 2
function getCode(el) {
    //1)
    console.log(el.outerHTML)
    //2)
    console.log(el.innerHTML);
    //3)
    console.log(el.className);
    //4)
    console.log(el.classList);
    //5)
    console.log(el.dataset);
}

getCode(document.getElementsByClassName('short-list')[0]);


//Zadanie 3
function Attribute(el) {
    let numbers = Object.values(el.dataset).filter(v => Number(v));
    numbers = numbers.map(v => Number(v));
    console.log(numbers);
    return {
        add: numbers.reduce((a, b) => a + b),
      substract: numbers.reduce((a, b) => a - b)
    };
}

console.log(Attribute(document.getElementById('datasetCheck')));


//Zadanie 4
document.getElementById('spanText').innerText = 'dowolnyTekst';


//Zadanie 5
document.getElementById('spanText').className = 'dowolnaClassa';


//Zadanie 6
function Classes(classList){
    var list = [...classList];

        list.forEach((b) => console.log(b));
        console.log(list.join('+'));
  }
  var classes = document.querySelector('#classes');
    Classes(classes.classList);
    classes.classList = '';
    console.log('Usunięto klasy!');


//Zadanie 7
var all = document.querySelector('#longList').querySelectorAll('li');
all.forEach((c) => {
  if(c.dataset.text == null) c.setAttribute("data-text", "text");
});


//Zadanie 8
var First = (string) => { 
    return {
        newClass: string
    };
 };

var Second = (object) => {
    return object.newClass;
};

var object = First('cos');
var string = Second(object);
var xxx = document.querySelector('#myDiv').classList;
xxx.add(string);


//Zadanie 9
function RandoFunction(num) {
    var element = document.querySelector('#numbers');
    var classX = num % 2 == 0 ? 'even' : 'odd';
    element.classList = classX;
}
var random = Math.round(Math.random() * 10);

RandoFunction(random);


//Zadanie 10
var Values = document.querySelector('#longList');
    
function showTab(Values) {
    var li = [];
    Values.querySelectorAll('li').forEach((d) => {
        li.push(d.innerHTML);
    });
    return li;
}

console.log(showTab(Values));


//Zadanie 11
function Them(child) {
    let childs = [...child];
    childs.forEach((element) => {
        var newNmb = Math.round(Math.random() * 10);
        element.dataset.oldValue = element.innerHTML;
        element.innerHTML = newNmb;
    });
}

let child = document.querySelector('#longList').children;
Them(child)
});