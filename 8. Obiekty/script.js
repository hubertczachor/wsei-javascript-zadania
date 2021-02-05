//Zadanie 1

let car = {
    name: 'Audi',
    age: 2010,
    mileage: 100000,
    color: 'red'
}
console.log(car);


//Zadanie 2

car.changeName = function(chg){
    this.name = chg;
}
car.changeName('BMW');
console.log(car);


//Zadanie 3

function sumArray(arr) {
    this.sum = arr.reduce((a, b) => a + b);
}

let sumO = new sumArray([41, 5, 4, 2]);

console.log(sumO.sum);


//Zadanie 4

const car = {
    name:'BMW',
    age: 12,
    color: 'Black',
    model: 750
}

Object.keys(car).forEach((key) => console.log(`${key}: ${car[key]}`))


//Zadanie 5

const car = {
    name: 'Audi',
    age: 10,
    color: 'Red',
    model: 'RS4 Avant'
  }
  Object.keys(car).forEach((key) => console.log(`${key}: ${car[key]}`))


  //Zadanie 6

  const car = {
    name: 'Mercedes',
    age: 10,
    color: 'Black',
    model: 'Mercedes-AMG GT'
  }
  
  car.engine = "5.0 V8";
  
  car.add = function() {
      console.log("Hello");
  }
  car.add();
