export { }

type User = {
  username: string
  address: {
    zipcode: string
    town: string
  }
}

const str = `{"username": "patty", "town": "Maple Town" }`
const data: unknown = JSON.parse(str)

// 型アサーション(断定)
const user = data as User

// console.log(user.address.town)
// TypeError: Cannot read property 'town' of undefined

// 型キャスト
const n = 123
const s1 = String(n)
console.log(typeof s1)

// 型ガード
const foo: unknown = '1,2,3,4'

if (typeof foo === 'string') {
  console.log(foo.split(','))
}
// console.log(foo.split(',')) compile error

// instanceof
class Base {
  common = 'common'
}
class Foo extends Base {
  foo = () => { console.log('foo') }
}
class Bar extends Base {
  bar = () => { console.log('bar') }
}

const doDivide = (arg: Foo | Bar) => {
  if (arg instanceof Foo) {
    arg.foo()
    // arg.bar() compile error
  } else {
    // arg.foo() compile error
    arg.bar()
  }
}

doDivide(new Foo()) // foo