// Zadanie 1
let a = 20;
let b = 39;

if(a > b){
    console.log(a);
}
else
{
    console.log(b);
}


// Zadanie 2
let a = 15;
let b = 28;
let c = 36;

if(a > b && a > c)
{
    console.log(a);
}
else if(b> a && b > c)
{
    console.log(b);
}
else
{
    console.log(c);
}


//zadanie3
let string = "Lubię JavaScript";

for(let i = 0; i<10; i++)
  {
    console.log(string);
  }


// Zadanie 4
let result = 0;

for(let i = 1; i<= 10; i++)
{
    result += i;
}
console.log(result);


// Zadanie 5
var n = 5;

for (let i= 0; i<= n; i++)
{
    if(i%2==0)
    {
        console.log(i + " - parzysta");
    }
    else
    {
        console.log(i + " - nieparzysta");
    }
}


// Zadanie 6
for(let i = 0; i < 10; i++){
    for(let j = 0; j < 10; j++){
        console.log("i= " + i + ", j= " + j);
    }
}



// Zadanie 7
for(let i= 0; i<= 100; i++)
{
    if( i % 15 == 0)
    {
        console.log("FizzBuzz");
    }
    else if(i % 5 == 0)
    {
        console.log("Buzz");
    }
    else if( i % 3 == 0)
    {
        console.log("Fizz");
    }
    else
    {
        console.log(i + " ");
    }
}


//Zadanie 8 | Przykład a)

for(let x = 1; i <= 5; i++)
{
    let row ="";
    for(let y = 1; y <= x; y++)
    {
        row+="*";
    }
    console.log(row);
}


//Zadanie 8 | Przykład b)

let star = "*";
let space = " ";
for (let a = 0; a < 5; a++)
{
    var result="";
    for (let b = 5-1; b > a; b--)
    {
        result += space;
    }
    for(let c = 0; c <= a; c++)
    {
        result+=star +space;
    }
    console.log(result);
}


//Zadanie 8 | Przykład c)

let star = "*";
let space = " ";
for (let a = 0; a < 5; a++)
{
    var result="";
    for (let b = 5-1; b > a; b--)
    {
        result += space;
    }
    for(let c = 0; c <= a; c++)
    {
        result +=star;
        result += (c < a) ? star : "";
    }
    console.log(result);
}


//Zadanie 8 | Przykład d)

let stars = '*';
let spacer = ' ';
for (var a = 0; a < 11; a++) {
    var result = '';
    for (var b = 0; b < 5; b++) {
        if (a < 5) {
            result += b <= a ? stars : b;
        } else if (a > 5) {
            result = (b < a-6 ? (b-4)*-1 : stars) + result;
        } else {
            result = "-----";
        }
    }
    console.log(result);
}


//Zadanie 8 | Przykład e)

let star = "*";
let space = " ";
for(var a = 0; a < 8; a++){
    var result = "";
    for(var b = 4; b > a; b--){
        result+= space;
    }
    for(var c = 0; c <= a; c++){
        result += star + space;
    }
    if(c >= 6){
        result = "";
        for(var d = 0; d < 4; d++){
            result += space;
        }
        result += star;
    }
    console.log(result);
}
