
function hello(arg) {
  console.log(arg + this.name)
}
const helloName = hello.bind({ name: 'Murakami' }, "hiiii")

helloName("hi")
// => hiiiiMurakami, bindした方が優先される

// アロー関数と通常の関数ではthisの参照先が異なる
this.name = 'Mura'
const hel = () => {
  console.log('hello' + this.name)
}
const h = hel.bind(this)
h() // => Mu


const area = {
  width: 7,
  height: 5,
  areaCalc: function () {
    console.log(this.width * this.height)
  }
}

const ar = area.areaCalc.bind(area)
ar() // => 35, bind(area)しないとNaNになる
