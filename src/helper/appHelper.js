export const sortByName = (words, order="") => {
  let less, greater
  if (order === "DESC") {
    less = 1
    greater = -1
  } else if (order === "ASC") {
    less = -1
    greater = 1
  } else {
    return words
  }
  const wordsTmp = words.slice()
  wordsTmp.sort(function(a, b) {
    a = a.toUpperCase()
    b = b.toUpperCase()
    if (a < b) {
      return less
    }
    if (a > b) {
      return greater
    }
    return 0
  })
  return wordsTmp
}
