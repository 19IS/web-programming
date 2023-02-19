const express = require('express')
const dotenv = require('dotenv').config()

const app = express();
const port = process.env.NODE_JS_APP_PORT;
const host = process.env.NODE_JS_APP_HOST;

app.set('view engine', 'hbs')
app.set('views', __dirname + '/../frontend/views')
app.set('view options', {
    layout: 'layouts/layout'
})

app.get('/', (req, res) => {
  res.render('index', {
    username: req.query.username === undefined ? 'Никто' : req.query.username
  });
});

app.get('/blog', (req, res) => {
  res.render('blog', {
    article: req.query.article === undefined ? 'Неизвестная статья' : req.query.article
  });
});

app.get('/location', (req, res) => {
  res.render('location', {
    city: req.query.city === undefined ? 'Неизвестный город' : req.query.city
  });
});

app.get('/service', (req, res) => {
  res.render('service', {
    service_name: req.query.service_name === undefined ? 'Неизвестная услуга' : req.query.service_name
  });
});

app.listen(
  port, 
  () => console.log(`Сервер запущен на http://${host}:${port}`)
);