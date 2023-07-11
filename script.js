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

    this.hamster = hamsters;
    hamsters = [];

    this.bankAccount = bankAccount;
    this.bankAccount = 0;
  }
  getName() {
    return this.name;
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
  ageUp() {
    this.age++, this.height++, this.weight++, this.mood--, this.bankAccount + 10;
  }
  buyHamster(hamster) {
    this.hamsters.push(hamster);
    this.mood += 10, 
    this.bankAccount = this.bankAccount - getPrice();
  }
}

// ++++++++++++++++++++++++++++++++++++++++++++++

// CREATE A STORY WITH YOUR PERSON CLASS
// name, age, height, weight, mood, hamsters, bankAccount

const c1 = new Person('Timmy', '5', '', '65', 'seen it all', '0', '');
console.log(c1);