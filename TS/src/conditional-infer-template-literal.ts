// infer: Uの型を推定する
type Flatten<T> = T extends Array<infer U> ? U : T

const num = 7
const arr = [1, 2, 3]

type A = Flatten<typeof arr> // number
type N = Flatten<typeof num> // number

// テンプレートリテラル型
type DateFormat = `${number}-${number}-${number}`
const phoneNum: DateFormat = '080-1111-1111'