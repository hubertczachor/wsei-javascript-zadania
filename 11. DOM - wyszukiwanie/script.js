//Zadanie 1

const list = document.getElementsByClassName("list");

console.log(list);


//Zadanie 2

function GetElements(tag) {

    return document.getElementsByTagName(tag);

}

console.log(GetElements("ul"));


//Zadanie 3

const i = document.getElementById("list");

console.log(i);


//Zadanie 4


const showdown = (lis, uls, spans, sid, sids) => {

    const allLis = document.querySelectorAll(lis);

const allUls = document.querySelectorAll(uls);

const allSpans = document.querySelectorAll(spans);



const spanInDiv = document.querySelectorAll(sid);

const spanInDivWID = document.querySelectorAll(sids);



allLis.forEach(al => {console.log(al)});

allUls.forEach(au => {console.log(au)});

allSpans.forEach(as => {console.log(as)});



spanInDiv.forEach(sid => {console.log(sid)});

spanInDivWID.forEach(sidwid => {console.log(sidwid)});

};

showdown("li", "ul", "span", "div.list span", "div#spans span");