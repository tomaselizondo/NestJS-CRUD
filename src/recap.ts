// Forma 1
class Persona {
  private age;
  private name;

  constructor(name: string, age: number) {
    this.age = age;
    this.name = name;
  }

  getSummary(){
    return `my name is ${this.name} I'm ${this.age}`;
  }
}
//

// Forma 2
class Persona2 {
  constructor(private name: string, private age: number) {}

  getSummary(){
    return `my name is ${this.name} I'm ${this.age}`;
  }
}
//
const tomi = new Persona("tomas", 12);
console.log(tomi.getSummary())