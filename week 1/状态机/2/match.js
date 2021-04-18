// 不准使用正则表达式，纯粹用 JavaScript 的逻辑实现：在一个字符串中，找到字符“ab”

// str 字符串
// sr 需要查找的值
function matchAb(str, sr) {
  let index = 0
  for(let c of str) {
    if (c === sr[index]) {
      index++
      if (index === sr.length) return true
    } else {
      index = 0
    }
  }
  return false
}

console.log(matchAb('I abm groot', 'ab'))