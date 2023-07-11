// HAMSTER
class Hamster {
  constructor(owner, name, price) {
    this.owner = owner;
    this.owner = '';

    this.name = name;

    this.price = price;
    this.price = 15;
  }
  wheelRun() {
    console.log('squeak squeak');
  }
  eatFood() {
    console.log('nibble nibble');
  }
  getPrice() {
    return this.price;
  }
}

const h1 = new Hamster('Mo', 'Momo', 420);

console.log(h1);
h1.wheelRun();
h1.eatFood();
const price = h1.getPrice()
console.log(price);


// ++++++++++++++++++++++++++++++++++++++++++++++

// PERSON

class Person {
  constructor(name, age, height, weight, mood, hamsters, bankAccount) {
    this.name = name;

    this.age = age;
    this.age = 0;

    this.height = height;
    this.height = 0;

    this.weight = weight;
    this.weight = 0;

    this.mood = mood;
    this.mood = 0;

    this.hamster = hamsters;
    this.hamsters = [];

    this.bankAccount = bankAccount;
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
  }
  getAge() {
    return age;
  }
  getWeight() {
    return weight;
  }
  greet() {
    console.log(this.name);
  }
  eat() {
    weight++, mood++;
  }
  exercise() {
    weight--;
  }
  ageUp() {
    age++, height++, weight++, mood--, this.bankAccount + 10;
  }
  buyHamster(hamster) {
    hamster.push;
    mood + 10, bankAccount - getPrice();
  }
}

// ++++++++++++++++++++++++++++++++++++++++++++++

// CREATE A STORY WITH YOUR PERSON CLASS

// class Story extends Person {
//   constructor(name, age, height, weight, mood, hamsters, bankAccount) {
//     c1(name, age, height, weight, mood, hamsters, bankAccount);
//     // precocious(){
//     //     console.log('seen it all');
//     //     weight+5;
//     // }
//     // kinderGarten() {
//     //     weight-5;
//     // }
//   }
// }
// const mainCharacter = new Story('Timmy', '5', '', 'seen it all')

// console.log(mainCharacter);
