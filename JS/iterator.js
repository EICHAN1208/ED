function generateIterator(max = 10) {
  let i = 0

  return {
    next() {
      if (i > max) {
        return {
          done: true
        }
      } else {
        return {
          done: false,
          value: i++
        }
      }
    }
  }
}

const iterator = generateIterator(10)
let a = iterator.next()
// console.log(a)

// 1~10の出力結果
while (!a.done) {
  console.log(a.value)
  a = iterator.next()
}


const obj = {
  [Symbol.iterator]: generateIterator.bind(null, 20)
}

// 1~20の出力結果
for (const i of obj) {
  console.log(i)
}