import axios from "axios";
import { appHost, appPort } from '../../settings.js'

class RenderController {
    indexRender(request, response) {
        response.render('home', {});
    }
    blogRender(request, response) {
        axios.get(`http://${appHost}:${appPort}/blog/posts`).then((res) => {
            console.log(res);
            response.render('blog', {
                posts: res.data
            });
        }).catch(error => {
            response.send(error);
        });

    }
    locationRender(request, response) {
        response.render('locataion', {});
    }
}

export default new RenderController();
