import express from 'express';
import expressHbs from 'express-handlebars';
import hbs from 'hbs'
import path from 'path'
import dotenv from 'dotenv'
import { fileURLToPath } from 'url';
import { dirname } from 'path'
import mongoose from 'mongoose';

import router from './routers/router.js'
import render from './routers/render.js'
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const env = dotenv.config();
const app = express();

const url = `mongodb://${process.env.MONGO_INITDB_ROOT_USERNAME}:${process.env.MONGO_INITDB_ROOT_PASSWORD}@${process.env.MONGO_HOST}:${process.env.MONGO_PORT}/`

app.set('views', 'templates');

app.engine(
  'hbs',
  expressHbs.engine({  
    layoutsDir: 'views/layouts',
    defaultLayout: 'base',
    extname: 'hbs',
//    partialsDir: __dirname + '/../frontend/templates/partials/'
  })
);
app.set('view engine', 'hbs');
//app.set('view options', { layout: 'base'});
hbs.registerPartials(__dirname + '/views/partials')
app.use(
  express.static(path.join(__dirname, '/../frontend/static'))
)
app.use(
  express.json()
)

app.use('/', render);
app.use('/blog', router);

const port = process.env.NODE_JS_APP_PORT;
const host = process.env.NODE_JS_APP_HOST;
/*
 app.get('/', function (request, response) {
   response.render(
     'home', {
       title: 'Главная страница'
     }
   );
 });
*/
// app.get('/blog', function (request, responce) {
//   responce.render(
//     'blog'
//   )
// })

async function StartApp() {
  try {
      await mongoose.connect('mongodb://127.0.0.1:27017', {
          useUnifiedTopology: true,
          useNewUrlParser: true
      });
      app.listen(
        3000,
        () => console.log(`Сервер запущен на http://${host}:${port}`)
      );
  } catch (exception) {
    console.log(exception);
  }
};

StartApp();
