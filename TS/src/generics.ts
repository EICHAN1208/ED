export { };

const greeting = <T, U>(arg1: T, arg2: U): void => {
  console.log(arg1, arg2)
}

function greet<T>(arg: T): void {
  console.log(arg)
}

console.log(greeting<string, number>("おはよう", 4649))

// T, Uは初期化時の引数
class Person<T, U>{
  name: T
  private age: U

  constructor(name: T, age: U) {
    this.name = name
    this.age = age
  }

  introduce() {
    console.log(`My name is ${this.name}. I'm ${this.age}years old.`)
  }
}

const person = new Person<string, number>("Bob", 29)
console.log(person.introduce())
// console.log(person.age)
