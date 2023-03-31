import Router from 'express';
import RenderController from '../db/controllers/RenderController.js'
import { fileURLToPath } from 'url';
import { dirname } from 'path'
import path from 'path'
import expressHbs from 'express-handlebars';
import express from 'express';
import hbs from 'hbs'

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const render = new Router();

render.set('views', path.join(__dirname, '../../frontend/templates'));

render.engine(
    'hbs',
    expressHbs.engine({  
        layoutsDir: path.join(__dirname, '../../frontend/templates/layouts'),
        defaultLayout: path.join(__dirname, '../../frontend/templates/layouts/base'),
        extname: 'hbs',
        partialsDir: [
            path.join(__dirname, '../../frontend/templates/partials/')
        ]
    })
  );

render.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, '../../frontend/templates/partials'))
render.use(
    express.static(path.join(__dirname, '../../frontend/static'))
  )

render.get('/', RenderController.indexRender);
render.get('/blog', RenderController.blogRender);
render.get('/location', RenderController.locationRender);

export default render;
