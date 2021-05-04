// 用 Node.js 写一个小的服务端，提交至 GitHub

const http = require('http')
http.createServer((request, response) => {
  let body = []
  request.on('error', err => {
    console.error(err)
  }).on('data', chunk => {
    // body.push(chunk.toString())
    body.push(chunk)
  }).on('end', () => {
    body = Buffer.concat(body).toString()
    console.log('body', body)
    response.writeHead(200, { 'Content-Type': 'text/html' })
    response.end(' Hello World\n')
  })
}).listen(3000)

console.log('server started')