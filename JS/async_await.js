async function hello(resolve, reject) {
  return 'hello'
}
console.log(hello())
// => Promise { 'hello' }



function sampleResolve() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('resolve!!!!!')
    }, 3000)
  })
}

async function greet() {
  const r = await sampleResolve()
  return r
}
greet().then((arg) => console.log(arg))
// => resolve!!!!!



function sampleReject() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      reject('reject!!!!!!')
    }, 5000)
  })
}

async function shout() {
  const r = await sampleReject()
  return r
}

shout()
  .then(() => console.log('呼ばれない'))
  .catch((arg) => console.log(arg))