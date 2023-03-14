const express = require('express')
const expressHbs = require('express-handlebars')
const hbs = require('hbs')
const app = express()
const path = require('path')

const dotenv = require('dotenv').config();


app.set('views', __dirname + '/../frontend/templates');
app.engine(
  'hbs',
  expressHbs.engine({
    extname: 'hbs', 
    defaultLayout: 'base', 
    // viewsDir: __dirname + '/../frontend/templates/',
    layoutsDir: __dirname + '/../frontend/templates/layouts/',
    partialsDir: __dirname + '/../frontend/templates/partials/'
  })
);
app.set('view engine', 'hbs')
app.use(
  express.static(path.join(__dirname, '/../frontend/static'))
)
// hbs.registerPartials(__dirname + '/templates/partials')
const port = process.env.NODE_JS_APP_PORT;
const host = process.env.NODE_JS_APP_HOST;

app.get('/', function (request, response) {
  response.render(
    'home', {
      title: 'Главная страница'
    }
  );
});

app.get('/blog', function (request, responce) {
  responce.render(
    'blog'
  )
})

app.listen(
  port,
  () => console.log(`Сервер запущен на http://${host}:${port}`)
);

