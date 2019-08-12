// console.log(`hello world`);
const express = require('express');
const app = express();
const port = 3000;
const path = require('path');




app.listen(port, () => console.log(`app is running on port ${port}`));

app.use(function(req, res, next){
  console.log(`${req.method} request for ${req.url}`);
  next();
});

// app.get('/', (req, res) => res.send('hello, world!'));
// app.get('/about', (req, res) => res.send ('got a request for about page'));
// app.get('/contact', (req, res) => res.send ('got a request for contact page'));
// app.get('/meet-the-team', (req, res) => res.send ('got a request for meet the team page'));
// app.get('/clients', (req, res) => res.send ('got a request for clients page'));


// app.get('app.js', (req, res) => res.send ('got a request for a JS file!'));
// app.get(`${match(/.js/)}`, (req, res) => res.send ('got a request for a JS file!'));

// with express, we don't have to handle each request individually, with a long if/else (like we did in the node.js website)
// we can do everything with this one line:

app.use(express.static('./public'));

// because the bootstrap and jquery files don't exist in our public files folder, they have to be treated differently
// the html specifies "bootstrap/css/bootstrap.min.css", which doesn't exist
// let's try this:

// app.use('/bootstrap', function(req, res){
  // console.log('got a request for bootstrap');
// })

app.use('/bootstrap', express.static(path.join(__dirname, 'node_modules/bootstrap/dist')));
// this is saying app.use(req, res) where '/bootstrap' is the req. and express.static ... is the (static) response

app.use('/jquery', express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use('/popper.js', express.static(path.join(__dirname, 'node_modules/popper.js/dist')));
