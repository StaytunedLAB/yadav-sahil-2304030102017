const student = {
  name: "Pradeep",
  age: 20,
  marks: 80,
  greet: function() {
    console.log(`Hello, my name is ${this.name}`);
  }
};

console.log(student.name);
student.greet();
