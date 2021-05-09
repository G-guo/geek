// 用 Node.js 写一个小的服务端，提交至 GitHub

const http = require('http')

const server = http.createServer((req, res) => {
  console.log("request received")
  console.log(req.headers)
  res.setHeader('Content-Type', 'text/html')
  res.setHeader('X-Foo', 'bar')
  res.writeHead(200, {'Content-Type': 'text/plain'})
  res.end(
`<html maaa=a >
<head>
    <style>
body div #myid{
  width:100px;
  background-color: #ff5000;
}
body div img {
  width:30px;
  background-color: #ff1111;
}
  </style>
</head>
<body>
  <div>
    <img id="myid" />
    <img />
  </div>
`)
})
server.listen(3000)
console.log('server started')