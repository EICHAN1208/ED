const override = <T, U extends T>(obj1: T, obj2: U): T & U => ({
  ...obj1,
  ...obj2
})

// 第二引数が第一引数を拡張したもの
override({ a: 1 }, { a: 2, b: 4 })


// override({ a: 1 }, { b: 2, c: 4 })
// compile error
