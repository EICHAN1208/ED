class Calculator {
  constructor() {
    this.val = null
    this._operator
  }

  set(val) {
    if (this.val === null) {
      this.val = val
    } else {
      this._operator(this.val, val)
    }
    return this
  }

  minus() {
    this._operator = function (val1, val2) {
      const result = val1 - val2
      this._equal(result)
    }
    return this
  }

  plus() {
    this._operator = function (val1, val2) {
      const result = val1 + val2
      this._equal(result)
    }
    return this
  }

  _equal(result) {
    console.log(result)
    this.val = result
  }
}

const calc = new Calculator()

calc.set(10)
  .minus()
  .set(3)
  .plus()
  .set(5) // 12