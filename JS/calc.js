const calc = (
  function (value) {
    function plus(number) {
      const res = value + number
      console.log(`${value} + ${number} = ${res}`)
      value = res
    }

    function minus(number) {
      const res = value - number
      console.log(`${value} - ${number} = ${res}`)
      value = res
    }

    function multiple(number) {
      const res = value * number
      console.log(`${value} * ${number} = ${res}`)
      value = res
    }

    function divide(number) {
      const res = value / number
      console.log(`${value} / ${number} = ${res}`)
      value = res
    }

    return { plus, minus, multiple, divide }
  }
)(10)

// const calc = calcFactory(10)
calc.plus(5)
calc.minus(5)
calc.multiple(5)
calc.divide(5)