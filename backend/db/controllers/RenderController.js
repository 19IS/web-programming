import axios from "axios";

class RenderController {
    indexRender(request, response) {
        response.render('home', {});
    }
    blogRender(request, response) {
        axios.get('http://127.0.0.1:3000/blog/posts').then((response) => {
            console.log(response);
            response.render('blog', {
                posts: response.data
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
