const express = require('express')
const app = express();
const path = require('path')
const fs = require('fs')
app.use(express.urlencoded())

spath = path.join(__dirname, 'static')
app.use(express.static(spath))

app.set('view emgine', 'pug')
vpath = path.join(__dirname, 'views')
app.set('views', vpath)

app.get('/', (req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.render('index.pug', {
        title: 'Krishna Nrutya'
    })

})

app.get('/contact', (req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.render('contact.pug')
})

app.post('/contact', (req, res) => {
    console.log(req.body);
    const { name, no, mail, more } = req.body
    data = `\n\n***NEW DATA***\n name:-${name}\n no:-${no}\n mail:-${mail}\n more:-${more}`
    fs.appendFileSync('data.txt', data)
    res.send('form submitted')


})

app.get('/class', (req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.render('class.pug')
})

app.get('/time', (req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.render('time.pug')
})

const port = 80
app.listen(port, () => {
    console.log(`server start..!!`);
})