export { }

class Person {
  // publicは省略可能
  name: string
  private age: number

  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }

  greeting(): void {
    console.log('Hello')
  }

  nameLength(): number {
    const length = this.name.length
    return length
  }
}

const bob = new Person('Bob', 28)
bob.greeting() // Hello
console.log(bob.name) // Bob
console.log(bob.nameLength()) // 3

// bob.age
// => privateのためエラー
