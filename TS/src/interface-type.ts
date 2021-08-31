export { }

// type==================================
// 型エイリアス
type Racket = {
  gripSize: number
  weight: number
  manufacturer: Manufacturer
}

type AreaSize = {
  areaSize: number
}

// 名前を変更すれば拡張できる
type Rk = Racket & AreaSize

// typeはオブジェクト以外の型定義ができる(union型)
type Manufacturer =
  | 'Babolat'
  | 'Mizuno'
  | 'YONEX'
  | 'Prince'
  | 'HEAD'
  | 'Wilson'
  | 'GOSEN'
  | 'BRIGESTON'

const racket: Rk = {
  gripSize: 3,
  weight: 300,
  manufacturer: 'Babolat',
  areaSize: 90
}
// =========================================


// interface================================
// 型宣言
interface RacketSpec {
  gripSize: number
  weight: number
  manufacturer: string
}

// interfaceは既存の型にそのまま拡張(追加)できる
interface RacketSpec {
  areaSize: number
}

const racketSpec: RacketSpec = {
  gripSize: 3,
  weight: 300,
  manufacturer: 'Babolat',
  areaSize: 100
}

// interfaceで`type Rk = Racket & AreaSize`
//   みたいにやりたいとき
interface PantsSpec {
  size: string
  color: string
}

interface Price {
  price: number
}

interface Pants extends PantsSpec, Price { }

const pants: Pants = {
  size: 'M',
  color: 'pink',
  price: 5000
}

// =========================================