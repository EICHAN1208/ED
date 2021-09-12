// マップ型(Mapped Type)
type strNumbers = 'one' | 'two' | 'three'
type numMap = { [k in strNumbers]: number }

const numbers: numMap = {
  'one': 1,
  'two': 2,
  'three': 3
} as const

console.log(numbers.one)
// 1

type ko = keyof typeof numbers // "one" | "two" | "three", keyをunion型として抽出
