// ジェネレーター(イテレーターを作成するための特殊な関数)
function* genIterator({ min = 0, max = 20, step = 1 } = {}) {
  for (let i = min; i <= max; i += step) {
    yield i
  }
  return
}

const it = genIterator({ max: 10 })
for (const value of it) {
  console.log(value) // 0 ~ 10の出力
}

// 同じ
// function genIterator({ min = 0, max = 20, step = 1 } = {}) {
//   let i = min

//   return {
//     next() {
//       i += step
//       if (i < max) {
//         return {
//           done: true
//         }
//       } else {
//         return {
//           done: false,
//           value: i
//         }
//       }
//     }
//   }
// }