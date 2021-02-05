//Zadanie 1
function DoIt()
{
  console.log("Udało się!");
}

DoIt();


//Zadanie 2
function sayHey(text)
{
  console.log("Hey " + text);
}

sayHey("Hubert");


//Zadanie3
const tablica = [1,2,3,4];

function showTab(tablica)
{
  return tablica;
}
console.log(showTab(tablica));


//zadanie4
const showString = (a) => {
  let c = 0;
  let time = setInterval(() => {
      console.log(a);
  if(++c >= 5){
      clearInterval(time);
      console.log('Koniec')
  }
  }, 3000)
}
showString('Przykładowy teskt!');
