//Zadanie 1

class Person {
    constructor(imie, nazwisko, wiek, kraj, miasto) {
      Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
    }
  
    printInfo() {
      for (const [key, value] of Object.entries(this)) {
        console.log(`${key}: ${value}`);
      }
    }
  
    addYearToAge() {
      this.wiek++;
    }
  
  }
  
  const person1 = new Person('Hubert', 'Nowak', 25, 'Polska', 'Kraków');
  const person2 = new Person('Antonio', 'Grizman', 31, 'Hiszpania', 'Barcelona');
  
  person1.printInfo();
  person1.addYearToAge();
  person1.printInfo();


  //Zadanie 2

  class Person {
    constructor(imie, nazwisko, wiek, kraj, miasto) {
      Object.assign(this, { imie, nazwisko, wiek, kraj, miasto })
    }
  
    printInfo() {
      for (const [key, value] of Object.entries(this)) {
        console.log(`${key}: ${value}`);
      }
    }
  
    addYearToAge() {
      this.wiek++;
    }
  
  }

  const person1 = new Person('Hubert', 'Nowak', 25, 'Polska', 'Kraków');
  const person2 = new Person('Antonio', 'Grizman', 31, 'Hiszpania', 'Barcelona');
  
  person1.favDishes = ['Spaghetti', 'Rosół', 'Kopytka', 'Pyzy z miesem'];
  person2.favDishes = ['Oscypek', 'Pomidorowa', 'Ogórkowa', 'Golonko'];
  
  function printDishes() {
    console.log(this.favDishes);
  }
  
  function addDish(dish) {
    this.favDishes.push(dish)
  }
  
  person1.printDishes = printDishes;
  person2.printDishes = printDishes;
  person1.addDish = addDish;
  person2.addDish = addDish;
  
  person1.printDishes();
  person2.addDish('Racuchy');
  person2.printDishes();

  
  //Zadanie 3

  let calculator = {
    a: 0,
    b: 0,
      add: function(c, d){
          this.a = c;
          this.b = d;
      },
      suma: function(){
          return this.a + this.b;
      },
      odejmowanie: function(){
          return this.a - this.b;
      },
      mnozenie: function(){
          return this.a * this.b;
      },
      dzielenie: function(){
          if(this.b != 0){
              return this.a / this.b;
          }
        else
          {
              return "Nie wolno dzielic przez 0";
          }
      }
  }
  
  calculator.add(22,19);
  console.log(calculator.suma());
  console.log(calculator.odejmowanie());
  console.log(calculator.mnozenie());
  console.log(calculator.dzielenie());


  //Zadanie 4

  class Ladder {
    constructor(steps) {
      this.steps = steps;
      this.currentStep = 0;
    }
    
    moveUp() {
      this.currentStep = this.currentStep <= 0 ? 1 : ++this.currentStep;
      if(this.currentStep > this.steps) {
        this.getOff();
      } else {
        console.log(`Przemieszczasz się o jedne stopień do góry - jesteś na stopniu nr ${this.currentStep}`);
      }
    }
    
    moveDown(){
      this.currentStep = this.currentStep >= this.steps ? this.steps : --this.currentStep;
      if(this.currentStep <= 0) {
        this.getOff();
      }  else {
        console.log(`Spadasz o jeden stopień w dół - jesteś na stopniu nr ${this.currentStep}`);
      }
    }
    
    getOff() {
      console.log('Zszełeś z drabiny!');
    }
  
  }
  
  const ladder = new LadderSim(12);
  ladder.moveUp();
  ladder.moveUp();
  ladder.moveDown();
  ladder.moveDown();
  ladder.moveDown();
  ladder.moveUp();