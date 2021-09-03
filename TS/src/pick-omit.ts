export { };


type Person = {
  name: string
  age: number
}

type Name = Pick<Person, 'name'>
type Age = Omit<Person, 'name'>

const name: Name = { name: 'Murakami' }
const age: Age = { age: 29 }
