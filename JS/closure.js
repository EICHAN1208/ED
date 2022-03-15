function incrementFactory() {
  let num = 0;
  function increment() {
    num += 1;
    console.log(num);
  }

  return increment;
}
const increment = incrementFactory();

increment(); // 1
increment(); // 2
increment(); // 3

const addNumberFactory = (value) => {
  const add = (num) => {
    return value + num;
  };
  return add;
};
const addNumber = addNumberFactory(7);
console.log(addNumber(10));
// => 17
