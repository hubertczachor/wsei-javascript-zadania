//Zadanie 1
const elDiv = document.createElement("div");
elDiv.innerText = "To jest nowy element";
document.body.appendChild(elDiv);


//Zadanie 2
const Fruits = ['truskawki', 'ananas', 'kiwi', 'winogrono', 'banan', 'borówki', 'pomelo'];
const ul = document.createElement("ul");
Fruits.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    ul.appendChild(li);
});
document.body.appendChild(ul);


//Zadanie 3
document.body.addEventListener('click', () => {
    const lis = document.querySelectorAll('ul li');
    lis.forEach((child, i) => {
        if (i % 2 === 0) child.remove();
    });
});


//Zadanie 4
const button = document.createElement('button');
button.innerText = 'Cliknij aby usunac';
button.addEventListener('click', (e) => {
    e.target.remove();
});

document.body.appendChild(button);


// Zadanie 5
const rand = Math.floor(Math.random() * 20);
for (let i = 0; i < rand; i++) {
    const randDiv = document.createElement('div');
    randDiv.innerText = `to jest div numer ${i}`;
    document.body.appendChild(randDiv);
}


// Zadanie 6
const object = { div1: 'to jest div', span1: 'to jest span', div2: { div3: 'to jest div', }, span2: 'to jest span' };
function htmlObjests(obj, parent = document.body) {
    Object.getOwnPropertyNames(obj).forEach(id => {
        if (typeof (obj[id]) !== 'string') {
            const innerParentTag = id.replace(/[0-9]/g, '');
            const innerParent = document.createElement(innerParentTag);
            innerParent.id = id;
            parent.appendChild(innerParent);
            htmlObjests(obj[id], innerParent);
            return;
        }
        const elTag = id.replace(/[0-9]/g, '');
        const newEl = document.createElement(elTag);
        newEl.innerText = obj[id];
        newEl.id = id;
        parent.appendChild(newEl);
    })
}

htmlObjests(object);


// Zadanie 7
const Fruits = ['truskawki', 'ananas', 'kiwi', 'winogrono', 'banan', 'borówki', 'pomelo'];
const ul1 = document.createElement("ul");
const ul2 = document.createElement("ul");
Fruits.forEach(v => {
    const li = document.createElement("li");
    li.innerText = v;
    ul1.appendChild(li);
});

const lists = [ul1, ul2];
const buttons = [document.createElement("button"), document.createElement("button")];

function ButtonDisabled() {
    lists.forEach((ul, i) => {
        if (ul.childElementCount <= 1) {
            buttons[i].disabled = true;
        } else {
            buttons[i].disabled = false;
        }
    })
}

lists.forEach((ul, i) => {
    buttons[i].innerText = 'MOVE';
    buttons[i].addEventListener('click', () => {
        const listItems = ul.querySelectorAll('li');
        const childToTransfer = listItems[listItems.length - 1];
        if (i === 0) {
            ul2.insertBefore(childToTransfer, buttons[1]);
        } else {
            ul1.insertBefore(childToTransfer, buttons[0]);
        }
        ButtonDisabled();
    });
    ul.appendChild(buttons[i]);
    document.body.appendChild(ul);
});

ButtonDisabled();

// Zadanie 8
const fieldset = document.createElement('fieldset');
const inputs = [{
    label: 'Element',
    id: 'el',
    type: 'text'
}, {
    label: 'Tekst',
    id: 'text',
    type: 'text'
}, {
    label: 'Kolor',
    id: 'color',
    type: 'color'
}, {
    label: 'Ile razy',
    id: 'count',
    type: 'number'
}, {
    label: 'Utwórz',
    type: 'submit'
}];

inputs.forEach(v => {
    const elInput = document.createElement('input');
    let label = document.createElement('hr');
    elInput.style.display = 'block';
    elInput.type = v.type;
    elInput.id = v.id || null;

    if (v.type === 'submit') {
        elInput.value = v.label;
        elInput.addEventListener('click', (e) => {
            createElement(e);
        });
    } else {
        label = document.createElement('label');
        label.innerText = v.label;
        label.for = v.id;
    }
    fieldset.appendChild(label);

    fieldset.appendChild(elInput);
});

function createElement(e) {
    e.preventDefault();
    let el = null;

    inputs.forEach((v) => {
        const value = document.getElementById(v.id)?.value;

        switch (v.id) {
            case 'el': el = document.createElement(value); break;
            case 'text': el.innerText = value; break;
            case 'color': el.style.color = value; break;
            case 'count': for (let i = 1; i <= Number(value); i++) {
                document.body.appendChild(el.cloneNode(true));
            } break;
        }
    });
}
document.body.appendChild(fieldset);


// Zadanie 9
const fieldset = document.createElement('fieldset');
const table = document.createElement('table');

const inputs = [{
    label: 'Imię',
    id: 'fName',
    type: 'text'
}, {
    label: 'Nazwisko',
    id: 'name',
    type: 'text'
}, {
    label: 'Wiek',
    id: 'age',
    type: 'number'
}, {
    label: 'Ilość dzieci',
    id: 'kids',
    type: 'number'
}, {
    label: 'Płeć',
    id: 'gender',
    type: 'text'
}, {
    label: 'Więcej',
    type: 'submit',
    id: 'more'
}, {
    label: 'Utwórz',
    type: 'submit',
    id: 'print'
}];

let data = [];

inputs.forEach(v => {
    const elInput = document.createElement('input');
    let label = document.createElement('hr');
    elInput.style.display = 'block';
    elInput.type = v.type;
    elInput.id = v.id || null;

    if (v.type === 'submit') {
        elInput.value = v.label;
        elInput.addEventListener('click', (e) => {
            if (v.id === 'print') {
                renderTable(e);
            } else {
                addRow();
            }
        });
    } else {
        label = document.createElement('label');
        label.innerText = v.label;
        label.for = v.id;
    }
    fieldset.appendChild(label);

    fieldset.appendChild(elInput);
});

function addRow() {
    const row = [];
    inputs.forEach((v) => {
        if (v.type !== 'submit') {
            const value = document.getElementById(v.id)?.value;
            row.push(value);
        }
    });
    data.push(row);
    if (table.children.length > 0) {
        renderTable();
    }
}

function renderTable(e) {
    e?.preventDefault();
    table.innerHTML = '';
    if (data.length > 0) {
        const dataCells = inputs.filter(v => v.type !== 'submit');
        const thead = document.createElement('thead');
        dataCells.forEach(v => {
            const th = document.createElement('th');
            th.innerText = v.label;
            thead.appendChild(th);
        });
        table.appendChild(thead);
        const tbody = document.createElement('tbody');
        CapiTalize();
        data.forEach((v, i) => {
            const tr = document.createElement('tr');
            v.forEach(val => {
                const td = document.createElement('td');
                td.innerText = val;
                tr.appendChild(td);
            })
            const removeButton = document.createElement('button');
            removeButton.innerText = 'Usuń';
            removeButton.addEventListener('click', (e) => {
                data.splice(i, 1);
                renderTable();
            });
            tr.appendChild(removeButton);
            tbody.appendChild(tr);
        });
        table.appendChild(tbody);
    }
}

document.body.appendChild(fieldset);
document.body.appendChild(table);


// Zadanie 10 // funkcja do zadania 9 wywołuje się w lini 264!
function CapiTalize() {
    data = data.map(dat =>
        dat.map(v => v.charAt(0).toUpperCase() + v.slice(1))
    );
}


// Zadanie 11
function StringTekst(str) {
    const numbers = str.match(/[0-9]+/g);
    if (numbers.length > 0) {
        console.log(numbers.reduce((a, b) => Number(a) + Number(b)));

        const mmultiplier = numbers.reduce((a, b) => Number(a) * Number(b));

        for (let i = 0; i < mmultiplier; i++) {
            const div = document.createElement('div');
            div.innerText = `div${i}`;
            document.body.appendChild(div);
        }
    }
}

StringTekst('test54boc65div88span1');


// Zadanie 12
function createObj(str) {
    return {
        string: str
    }
}

const alaStr = createObj('Ala to ona!');
alaStr.alaToOla = function () {
    if (this.string.includes('Ala')) {
        this.string = this.string.replaceAll('Ala', 'Ola');
        console.log(this.string);
    } else {
        const div = document.createElement('div');
        div.innerText = 'Słowo Ala nie występuje w tekście.';
        document.body.appendChild(div);
    }
}

alaStr.alaToOla();


// Zadanie 13
const dataArray = ['Anna', 'ola3', 'test testowy', 'jseverything', 'htmlisgood'];
function returnLetters(arr) {
    let numberCounter = 0;
    arr.forEach(v => {
        const str = v.replace(/[^a-z]/gi, '');
        numberCounter += str.length;
    });
    return numberCounter;
}

function sumNumbers(arr) {
    const numbers = arr.map(v => v.match(/[0-9]+/g));
    const allNumbers = numbers.flat();
    return allNumbers.reduce((a, b) => Number(a) + Number(b));
}

function avgNumbers(arr) {
    const numbers = arr.map(v => v.match(/[0-9]+/g));
    const allNumbers = numbers.flat().filter(v => v);
    const sum = allNumbers.reduce((a, b) => Number(a) + Number(b));
    return sum / allNumbers.length;
}

console.log(returnLetters(dataArray));
console.log(sumNumbers(dataArray));
console.log(avgNumbers(dataArray));


// Zadanie 14
let obj = {
    name: '',
    surname: ''
};

function modifyObj(name, surname) {
    obj.name = name;
    obj.surname = surname;
    obj.nameLength = name.length;
    obj.surnameLength = surname.length;
    if (name.length > 5 || surname.length > 5) {
        const btn = document.createElement('button');
        btn.innerText = 'Restore';
        btn.addEventListener('click', (e) => {
            obj = {
                name: '',
                surname: ''
            }
        });
        document.body.appendChild(btn)
    }
}

modifyObj('Hubert', 'Czachor');