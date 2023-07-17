// HAMSTER
class Hamster {
  constructor(owner, name, price) {
    this.owner = owner;

    this.name = name;

    this.price = price;
    price = 15;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return this.price;
  }
}

const h1 = new Hamster("Ri", "Momo", 4.21);
// Hamster is essentially a template and when you're using new,
// you're saying im using this template to create this new version

console.log(h1);
h1.wheelRun();
h1.eatFood();
const price = h1.getPrice();
console.log(`I cost $${price}`);

// ++++++++++++++++++++++++++++++++++++++++++++++

// PERSON

class Person {
  constructor(name, age, height, weight, mood, hamsters, bankAccount) {
    this.name = name;

    this.age = age;
    age = 0;

    this.height = height;
    height = 0;

    this.weight = weight;
    weight = 0;

    this.mood = mood;
    mood = 0;

    this.hamsters = hamsters;
    hamsters = [];

    this.bankAccount = bankAccount;
    this.bankAccount = 0;
  }
  getName() {
    console.log(this.name);
  }
  getAge() {
    return this.age;
  }
  getWeight() {
    return this.weight;
  }
  greet() {
    console.log(this.name);
  }
  eat() {
    this.weight++, this.mood++;
  }
  exercise() {
    this.weight--;
  }
  ageUp(num) {
    this.age += num;
    this.height++;
    this.weight++;
    this.mood--;
    this.bankAccount += 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10;
    this.bankAccount -= hamster.getPrice();
  }
}

// ++++++++++++++++++++++++++++++++++++++++++++++

// CREATE A STORY WITH YOUR PERSON CLASS
// Previous constructor (name, age, height, weight, mood, hamsters, bankAccount)
// Test person
// const p1 = new Person("Suki", 20, 66, 120, 10, ["h1"], 100);
// console.log(p1.getName());
// console.log(p1.getAge());
// console.log(p1.getWeight());
// p1.greet();
// console.log(p1.eat());
// console.log(p1.exercise());
// console.log(p1.ageUp());
// console.log(p1.buyHamster(h1));

const timmy = new Person("Timmy", 5, 60, 45, 10, ["h1"], 50);
console.log(timmy);

timmy.ageUp(5);
console.log(`Timmy is now ${timmy.age}`);
console.log("Timmy feels like he's seen it all");

for (let i = 1; i <= 5; i++) {
  timmy.eat();
  console.log(`Timmy ate ${i} chicken`);
}

for (let i = 1; i <= 5; i++) {
  timmy.exercise();
  console.log(`Timmy's making gains. He worked out ${i} time`);
}

timmy.ageUp(9);
const gus = new Hamster("Timmy", "Gus", 20);
timmy.buyHamster(gus);
console.log(gus);

timmy.ageUp(15);
console.log(`Timmy is now ${timmy.age}`);

for (let i = 1; i <= 2; i++) {
  timmy.eat();
  console.log(`He eats ${i} times`);
}

for (let i = 1; i <= 2; i++) {
  timmy.exercise();
  console.log(`He works out ${i} times`);
}

class Dinner {
  constructor(appetizer, entree, dessert) {
    this.appetizer = appetizer;
    this.entree = entree;
    this.dessert = dessert;
  }
}

class Chef {
  cheffingItUp(appetizer, entree, dessert) {
    const dinner = new Dinner(appetizer, entree, dessert);
    console.log(dinner);
  }
}

const remy = new Chef('', '', '');

remy.cheffingItUp("Cheese", "Crackers", "Orange Juice");
remy.cheffingItUp("Ramen", "Eggs", "Furikake");
remy.cheffingItUp("Milkshake", "French Fries", "Smash Burger");
