// f1のパラメーターの型
const f1 = (a: number, b: string) => { console.log(a, b) }
type Parameter = Parameters<typeof f1> // [a: number, b: string]

// f2の返り値の型
const f2 = (a: number, b: number) => {
  return `${a} + ${b}`
}
type ReturnT = ReturnType<typeof f2>  // string