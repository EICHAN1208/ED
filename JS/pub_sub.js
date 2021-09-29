const events = (
  () => {
    const eventStack = new Map()

    return {
      on(type, fn) {
        const fnStack = eventStack.get(type) || new Set()
        fnStack.add(fn)
        eventStack.set(type, fnStack)
      },
      off(type, fn) {
        const fnStack = eventStack.get(type)
        if (fnStack && fnStack.has(fn)) {
          fnStack.delete(fn)
        }
      },
      emit(type) {
        const fnStack = eventStack.get(type)
        for (const fn of fnStack) {
          fn()
        }
      }
    }
  }
)()

function helloFn() {
  console.log('hello')
}
function happyFn() {
  console.log('happy')
}
function goodFn() {
  console.log('good')
}

events.on('hello', helloFn)
events.off('hello', helloFn)
events.on('happy', happyFn)
events.on('good', goodFn)

events.emit('hello')
events.emit('happy')
events.emit('good')