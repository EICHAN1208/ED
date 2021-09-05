// Rubyだと
// [1,2,3,4,5,6].group_by { |val| val % 3 }
// => {1=>[1, 4], 2=>[2, 5], 0=>[3, 6]}


function groupBy(array) {
  const resArray = array.map((e) => {
    // 条件を指定する
    return e % 3
  })
  const uniqResSet = new Set(resArray)

  result = {}
  for (const i of uniqResSet) {
    result[i] = getIdx(resArray, i)
  }
  return result
}

// 配列から検索条件に一致する全ての要素のインデックスを取得する関数を作る
function getIdx(array, conditionVal) {
  let indexes = []
  array.map(function (val, idx) {
    if (conditionVal === val) {
      indexes.push(idx);
    }
  })
  return indexes
}

console.log(groupBy([1, 2, 3, 4, 5, 6]))
// => { '0': [ 2, 5 ], '1': [ 0, 3 ], '2': [ 1, 4 ] }