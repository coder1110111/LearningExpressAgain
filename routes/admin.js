const express = require('express');

const router = express.Router();

router.get('/add-product',(req, res, next) => {
    //console.log("In another middleware");
    res.send('<form action="/admin/product" method="POST"><input type="text" placeholder="title" name="title"><input type="text" placeholder="size" name="size"><button type="sumit">Add Product</button></form>')
})

router.post('/product', (req, res) => {
    console.log(req.body);
    res.redirect('/');
})


module.exports = router;