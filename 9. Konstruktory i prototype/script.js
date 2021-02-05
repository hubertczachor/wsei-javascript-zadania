//Zadanie 1

class Person {
    constructor(imie, nazwisko, wiek, kraj, miasto, jezyk) {
        Object.assign(this, { imie, nazwisko, wiek, kraj, miasto, jezyk })
    }

    changeAge(age) {
        this.wiek = age;
    }

    changeCity(city) {
        this.miasto = city;
    }
}

const person1 = new Person('Hubert', 'Kowalski', 34, 'Polska', 'Krakow', 'polski');
const person2 = new Person('Wojciech', 'Szczesny', 31, 'Włochy', 'Napoli', 'włoski');
const person3 = new Person('Conor', 'McGregor', 44, 'Irlandia', 'Dublin', 'angielski');
const person4 = new Person('Kinga', 'Wesołowskaja', 54, 'Poland', 'Gniezno', 'polish');
const person5 = new Person('Rysiu', 'Papaja', 40, 'Poland', 'Sopot', 'polish');

person1.changeAge(44);
person1.changeCity('Kraków');
person2.changeAge(77);
person2.changeCity('Neapol');
person3.changeAge(89);
person3.changeCity('Rosja');
person4.changeAge(18);
person4.changeCity('Nowy Jork');
person5.changeAge(26);
person5.changeCity('Afryka');

console.log(person1, person2, person3, person4, person5);


//Zadanie 2

class Cal{
    constructor(){
        this.memory = 0;
        this.result = 0;
        this.history = [];
    }
    sum(x, y){
        this.result = x + y;
        this.toHistory(x,y, '+');
        return this.result;

    }
    difference(x, y){
        this.result = x - y;
        this.toHistory(x,y, '-');
        return this.result;
    }
    product(x, y){
        this.result = x * y;
        this.toHistory(x,y, '*');
        return this.result;
    }
    quotient(x, y){
        if( y === 0) throw Error("TAK SIĘ NIE ROBI!");
        this.result = x / y;
        this.toHistory(x,y, '/');
        return this.result;
    }
    saveToMemory(){
        this.memory = this.result; 
    }
    flushMemory(){
        this.memory = 0;
    }

    printMemory(){
        console.log(this.memory)
    }

    toHistory(x,y, operation){
        this.history.push({x,y, operation, result: this.result})
    }
    flushHistory(){
        this.history = [];
    }
    printHistory(){
        this.history.forEach((obj, i) => console.log(`${i}: ${obj.a} ${obj.operation} ${obj.b} = ${obj.result}`));
    }
}


//Zadanie 3

function NumberRand() {
	this.Number = () => {
		NumberRand.prototype.interval = setInterval(() => {
			NumberRand.prototype.num = Math.round(Math.random() * 10);
			console.log(NumberRand.prototype.num);
		}, 1000);
	};
	this.isMoreThan5 = () => {
		NumberRand.prototype.check = setInterval(() => {
			if (NumberRand.prototype.num > 5) {
        console.log("Liczba jest wieksza od 5 Koniec gry!");
				clearInterval(NumberRand.prototype.interval);
				clearInterval(NumberRand.prototype.check);
			}
		}, 1000);
	};
}
const NumberRandChange = new NumberRand();
const NumberRandCheck = new NumberRand();
NumberRandChange.Number();
NumberRandCheck.isMoreThan5();