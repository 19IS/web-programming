import express from 'express';
import mongoose from 'mongoose';

import { dbUrl, appHost, appPort } from './settings.js'
import router from './routers/router.js'
import render from './routers/render.js'


const app = express();

app.use(express.json())
app.use('/', render);
app.use('/blog', router);


async function StartApp() {
  try {
      await mongoose.connect(dbUrl, {
          useUnifiedTopology: true,
          useNewUrlParser: true
      });
      app.listen(
        appPort,
        () => console.log(`Сервер запущен на http://${appHost}:${appPort}`)
      );
  } catch (exception) {
    console.log(exception);
  }
};

StartApp();
