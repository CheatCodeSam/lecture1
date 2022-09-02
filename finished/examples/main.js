const dogName = "jimmy";

class Dog {
  constructor(nameOfDog, breed) {
    this.nameOfDog = nameOfDog;
    this.breed = breed;
    this.introduction = this.nameOfDog + " the " + this.breed + " says: ";
    this.barkCount = 0;
  }

  bark() {
    console.log(this.introduction + "bark");
    console.log("The Dog as barked " + this.barkCount + " times.");
    this.barkCount = this.barkCount + 1;
  }
  loudBark() {
    console.log(this.introduction.toUpperCase() + "BARK");
  }
}

const myPooch = new Dog(dogName, "pug");
myPooch.bark();
myPooch.bark();
myPooch.bark();
myPooch.bark();
myPooch.bark();
