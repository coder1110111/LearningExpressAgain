const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

app.use(bodyParser.urlencoded());
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.get('/contactus', (req, res, next) => {
    res.sendFile(path.join(__dirname,'views','contactUs.html'));
})
app.use('/contactus/success', (req,res,next) => {
    res.sendFile(path.join(__dirname,'views','success.html'));
})

app.use((req, res, next)=> {
    res.sendFile(path.join(__dirname,'views','404.html'));
})


app.listen(3000);