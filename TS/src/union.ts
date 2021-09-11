interface Square {
  kind: 'square',
  size: number
}

interface Rectangle {
  kind: 'rectangle',
  width: number,
  height: number
}

// 型エイリアス
type Shape = Square | Rectangle

const shape: Shape = {
  kind: 'rectangle',
  // size: 300, => エラー
  width: 100,
  height: 400
}

console.log(shape)