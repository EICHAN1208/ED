type OriginalPartial<T> = { [K in keyof T]?: T[K] }
type OriginalRequired<T> = { [K in keyof T]: T[K] }
type OriginalReadonly<T> = { readonly [K in keyof T]: T[K] }

const personalData = {
  name: 'murakami',
  age: 28
}

type Person = OriginalReadonly<typeof personalData>

const newPerson: Person = {
  name: 'eiki',
  age: 100
}
// newPerson.age = 28  compile error