export { };

enum Rakets {
  YONEX = 'Y',
  Tecnifibre = 'T',
  GOSEN = 'G',
  HEAD = 'H',
  Babolat = 'B',
  Wilson = 'W'
}
console.log(Rakets.YONEX);
// => Y
console.log(Rakets.Tecnifibre);
// => T

const raket = Rakets.GOSEN
console.log({ raket })
// => { raket: 'G' }

enum Prefecture {
  Ehime = 1,
  Osaka,
  Tokyo,
  Shiga
}
console.log(Prefecture.Osaka)
// => 2