const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded());

app.use('/',(req, res, next) => {
    console.log("This always runs!");
    next();
})

app.get('/add-product',(req, res, next) => {
    //console.log("In another middleware");
    res.send('<form action="/product" method="POST"><input type="text" placeholder="title" name="title"><input type="text" placeholder="size" name="size"><button type="sumit">Add Product</button></form>')
})

app.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})

app.use('/',(req, res, next) => {
    //console.log("In another middleware");
    res.send('<h1>Hello from Express!</h1>')
})


app.listen(3000);