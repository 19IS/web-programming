import axios from "axios";

class RenderController {
    indexRender(request, response) {
        response.render('home', {});
    }
    blogRender(request, response) {
        axios.get('http://127.0.0.1:3000/blog/posts').then((res) => {
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
