import Router from 'express';
import RenderController from '../db/controllers/RenderController.js'

const render = new Router();

render.get('/', RenderController.indexRender);
render.get('/blog', RenderController.blogRender);
render.get('/location', RenderController.locationRender);

export default render;
