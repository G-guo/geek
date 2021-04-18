// 用状态机实现：字符串“abcabx”的解析

function match(string) {
  let state = start
  for(let c of string) {
    state = state(c)
  }
  return state === end
}
/**
 * c  当前值
 * s  查找值
 * next 下一步
 * prev 上一步
 */
function start(c) {
  return c === 'a' ? foundA : start
}
function end() {
  return end
}
function foundA(c) {
  return c === 'b' ? foundB : start
}
function foundB(c) {
  return c === 'c' ? foundC : start
}
function foundC(c) {
  return c === 'a' ? foundA2 : start
}
function foundA2(c) {
  return c === 'b' ? foundB2 : start
}
function foundB2(c) {
  return c === 'x' ? end : foundB(c)
}
console.log(match('abcabcabx'))