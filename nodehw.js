const http = require('http')

const randomNum = Math.random()*100

const server = http.createServer((req, res) => {
    if(req.url === '/'){
        return res.end(randomNum.toString())
    }

    // if(req.url === 'end'){
    //     if(req.method === 'POST'){
    //         res.writeHead(200, {
    //             'Content-Type': 'application/json',
    //         });
    //         return res.end(
    //             JSON.stringify({
    //                 message: 'Bye',
    //             })
    //         );
    //     } else {
    //         return res.end('Bye!!')
    //     }
    // }
    const headerValue = req.headers['accept']
    if(headerValue === 'application/json'){
        return res.end(JSON.stringify({
            number: randomNum,
        }))
    }

    // res.writeHead(404);
    res.end(randomNum.toString())
});

server.listen(7889, () => {
    console.log('Server listening at port 7889')
})