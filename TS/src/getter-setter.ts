class MyRacket {
  _gripSize: number
  private _faceArea: number
  private _owner: string

  constructor(gripSize: number, faceArea: number, owner: string) {
    this._gripSize = gripSize
    this._faceArea = faceArea
    this._owner = owner
  }

  get owner() {
    return this._owner
  }

  set gripSize(size: number) {
    this._gripSize = size
  }

  printGripSize() {
    return `gripSize: ${this._gripSize}`
  }
}

const racket = new MyRacket(3, 100, 'Mura')
console.log(racket.owner)
// => Mura

racket.gripSize = 5
console.log(racket.printGripSize())
// => 5