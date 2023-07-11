// HAMSTER
class Hamster {
  constructor(owner, name, price) {
    this.owner = owner;
    this.owner = "";

    this.name = name;

    this.price = price;
    this.price = 15;
  }
  wheelRun() {
    console.log("squeak squeak");
  }
  eatFood() {
    console.log("nibble nibble");
  }
  getPrice() {
    return price;
  }
}

const h1 = new Hamster ("Mo", "Momo", true);

console.log(h1);
h1.wheelRun()
h1.eatFood()
h1.getPrice()
if (h1 === 15) {
    console.log(`${price}`);
} else {
    console.log(`${this.name} NOT FOR SALE!`);
}

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
