const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');

//It is use to parse the responses
app.use(bodyParser.urlencoded({ extended: false }));

//It is used to serve files statically to webpages
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

const server = http.createServer(app);
server.listen(3000);
