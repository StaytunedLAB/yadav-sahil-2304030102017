let person = {
  name: "John",
  age: 30,
  greet: function () {
    console.log("Hello, I’m " + this.name);
  }
};

console.log(person.name);
person.greet();
