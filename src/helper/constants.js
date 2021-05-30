// select選択肢
const option = {
  ORDER: [
    {idx: "", val: "並び替えない"},
    {idx: "ASC", val: "50音昇順"},
    {idx: "DESC", val: "50音降順"},
  ]
}

// 要素z順
const zIndex = {
  ALERT: 10,
}

// 入力可能文字数
const length = {
  SOURCE: 50000,
}

const Constants = {
  OPTION: option,
  Z_INDEX: zIndex,
  LENGTH: length,
}

export default Constants