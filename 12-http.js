const http = require('http');

const server = http.createServer((req,res)  => {
    if(req.url === '/'){
    res.end('welcome to our home page')
}
if(req.url === '/about'){
    res.end('Here is our short mystery')
}
res.end(`
    <h1>Oops!</h1>
    <p>We cant seem to find the page youre looking for</p>
    <a href="/">back home</a>
    `)
})
server.listen(5000)