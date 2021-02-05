//Zadanie1
const arraytest = [9, 5, 8, 4, 45, 68];

for(let i of arraytest){
    console.log(i);
}


//Zadanie2
const arraytest = ["Hubert", "Adam", 32, 423, 88, "Andrzej", 56];

// 1)
console.log(arraytest[0] + " " + arraytest[1]);

// 2)
console.log(arraytest[arraytest.length -1]);

// 3)
for(let i of arraytest){
    console.log(i);
}

// 4)
for(let i = 0; i < arraytest.length; i += 2){
    console.log(arraytest[i]);
}

// 5)
for(let i of arraytest){
    if(typeof i === 'string'){
        console.log(i);
    }
}

// 6)
for(let i of arraytest){
    if(typeof i === 'number'){
        console.log(i);
    }
}



// Zadanie 3
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// 1)
let sum = 0; 
for(let i of tab){
    sum += i;
}
console.log(sum);

// 2)
let sum2 = 0; 
for(let i of tab){
    sum2 -= i;
}
console.log(sum2);

// 3)
let sum3 = 0; 
for(let i of tab){
    sum3 += i;
}
console.log(sum3 / tab.length);

// 4)
tab.forEach((i)=>{
    if((tab[i] % 2) != 0)
        console.log(i);
})

// 5)
tab.forEach((i)=>{
    if((tab[i] % 2) == 0)
        console.log(i);
})

// 6)
let max = tab[0]; 

for(let i = 0; i< tab.length; i++){
    if(max < tab[i]){
        max = tab[i]
    }
}
console.log(max);

// 7)
let min = tab[0]; 

for(let i = 0; i < tab.length; i++){
    if(min > tab[i]){
        min = tab[i]
    }
}
console.log(min);

// 8)
for(let i = tab.length - 1; i >= 0; i--){
    console.log(tab[i]);
}


// Zadanie 4
function sumTable(t){
    let sum = 0;
  for(let i of t){
    sum += i;
    }
console.log(sum);
}

const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

sumTable(tab);


//Zadanie 5
function DoTable(t){
    let sum = 0;
  for(let i of t){
    sum += i;
    }
  let avg = sum/t.length;
  
   for(let i of t){
     i= i*avg;
     console.log(i);
    }
}
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

DoTable(tab);


//Zadanie 6
function Average(t){

    let count = 0;
    let sum = 0;

    t.forEach(i => {
     
        if((tab[i] % 2) == 0){

            sum += t[i];
            count++;
        }
    });
    console.log(sum / count);
}
const tab = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
Average(tab);


// Zadanie 7
const tab = [11, 19, 20, 21, 1, 5, 7, 16, 32, 67, 40, 33];

const sortTab = tab.sort((a , b) => a - b);
console.log(sortTab);


//Zadanie 8
const array1 = [3,1,5,];
const array2 = [11,15,12];

function sumArrayValue(array1, array2){
    let newArray = [];

    array1.forEach((num1, i) => {
        newArray.push(num1 + array2[i]);
    });
    return newArray;
}
console.log(sumArrayValue(array1, array2));


//Zadanie 9

let Array = [-5,6,-3,-11,-8,-24,-58,0];

function reverseNumber(t){

    let newArray = [];

    for(let i = 0; i < Array.length; i++){

        if( t[i] == 0)
            newArray.push(0);
        else
            newArray.push((t[i] * (-1))); 
    }

    return newArray;
}

console.log(reverseNumber(Array));

