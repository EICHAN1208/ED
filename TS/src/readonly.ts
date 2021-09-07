export { };


type Recipe = {
  analysis_id: number
  nickname: string
}

class Manufacture {
  // publicは省略可能
  public readonly kind: string
  public recipe: Recipe

  constructor(kind: string, recipe: Recipe) {
    this.kind = kind
    this.recipe = recipe
  }
}

const manufacture = new Manufacture("pending", { analysis_id: 111, nickname: "murakami" })
// manufacture.kind = "processing"
// => 読み取り専用エラー


// constructorの引数に直接public, readonly指定できる
class Person {
  constructor(public readonly name: string) {
    this.name = name
  }
}
const person = new Person("murakami")
// person.name = "mmm"
// 読み取り専用エラー