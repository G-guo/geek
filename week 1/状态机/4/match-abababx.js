// 用状态机实现：字符串“abababx”的解析

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
  return c === 'a' ? foundA2 : start
}
function foundA2(c) {
  return c === 'b' ? foundB2 : start
}
function foundB2(c) {
  return c === 'a' ? foundA3 : start
}
function foundA3(c) {
  return c === 'b' ? foundB3 : start
}
function foundB3(c) {
  return c === 'x' ? end : foundB2(c)
}
console.log(match('abababababx'))