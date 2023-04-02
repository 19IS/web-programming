import PostService from "../services/PostService.js";


class RenderController {

    async indexRender(request, response) {
        response.render('home', {});
    };

    async blogRender(request, response) {
        const posts = await PostService.getAll();
        const array = [];
        posts.forEach(element => {
            array.push(element.toJSON());
        });
        response.render('blog', {
            posts: array
        })
    };

    async locationRender(request, response) {
        response.render('locataion', {});
    };

}

export default new RenderController();
