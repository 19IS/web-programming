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
      await mongoose.connect(url, {
          useUnifiedTopology: true,
          useNewUrlParser: true
      });
      app.listen(
        port,
        () => console.log(`Сервер запущен на http://${host}:${port}`)
      );
  } catch (exception) {
    console.log(exception);
  }
};

StartApp();
