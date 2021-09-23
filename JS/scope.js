function incrementFactory() {
  let num = 0
  function increment() {
    num += 1
    console.log(num)
  }
  return increment
}

// ブロックスコープ使用
{
  let num = 0
  function increment() {
    num += 1
    console.log(num)
  }
}

// const increment = incrementFactory()
console.log(increment()) // 1
num = 0
console.log(increment()) // 2
console.log(increment()) // 3