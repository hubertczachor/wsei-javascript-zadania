// Zadanie 1
let c = 1;
let myTimer = setInterval(() => {
    console.log("Cześć po raz " + c++);
    if(c > 15){
      clearTimeout(myTimer);
    }
}, 3000)

//Zadanie 2
const array = ['Pietruszka', 'Pomidor', 'Ogorek', 'Kapusta', 'Szczypiorek'];
let a = 0;
setTimeout(() => {
    console.log(array);
    const timer = setInterval(() => {
        if (a < array.length) {
            console.log(array[a]);
            a++;
        }
        else clearInterval(timer);
    }, 3000);
}, 2000);