// Your code here/
/// Creating `class`es `Cat`, `Dog`, and `Bird
//Each of these `class`es will accept the _parameters_ `name` and `sex` and
///will store those values as _properties_.

class Cat {
    constructor(name, sex) {
      this.name = name;
      this.sex = sex;
    }

    speak() {
      return `${this.name} says meow!`;
    }
  }

  class Dog {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }

    speak() {
      return `${this.name} says woof!`;
    }
  }


////class bird with condtionals Bird`, speak returns conditional output. If the
 // _instance_ of `Bird` is `male`, speak returns "It's me! `name`, the parrot!". If
 // it is not `male`, speak returns "`name` says squawk!".

  class Bird {
    constructor(name, sex) {
        this.name = name;
        this.sex = sex;
    }
        speak() {
            if (this.sex === 'male') {
              return `It's me! ${this.name}, the parrot!`;
            } else {
              return `${this.name} says squawk!`;
            }
          }
        }
      
        let cat, dog, bird, bird2;
      
        describe("cat", () => {
          beforeEach(() => {
            cat = new Cat("Sasha", "female");
          });
      
          // ... rest of your test cases ...
        });
      