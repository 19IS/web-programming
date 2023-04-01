import Router from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path'
import expressHbs from 'express-handlebars';
import express from 'express';
import hbs from 'hbs'

import RenderController from '../db/controllers/RenderController.js'


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const render = new Router();

render.set(
  'views',
  join(__dirname, '../../frontend/templates')
);

render.engine(
  'hbs',
  expressHbs.engine({
    layoutsDir: join(__dirname, '../../frontend/templates/layouts'),
    defaultLayout: join(__dirname, '../../frontend/templates/layouts/base'),
    extname: 'hbs',
    partialsDir: [
      join(__dirname, '../../frontend/templates/partials/')
    ]
  })
);

render.set('view engine', 'hbs');
hbs.registerPartials(join(__dirname, '../../frontend/templates/partials'))
render.use(
  express.static(join(__dirname, '../../frontend/static'))
)

render.get('/', RenderController.indexRender);
render.get('/blog', RenderController.blogRender);
render.get('/location', RenderController.locationRender);

export default render;
