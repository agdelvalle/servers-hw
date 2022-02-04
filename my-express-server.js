const express = require('express');
const app = express();

const randomNum = Math.random()*100

app.get('/', (req, res) => {
    res.end(randomNum.toString())
})

app.post('/echo', (req, res) => {
    res.end(JSON.stringify({
        ok: true,
        payload: req.body,
    }))
})

app.listen('7889', () => {
    console.log('Server listening at port 7889')
})