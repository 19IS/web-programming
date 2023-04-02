import PostService from '../services/PostService.js';


class PostController {
    async create(request, response) {
        try {
            const post = await PostService.create(request.body, request.files.picture);
            response.status(200).json(post);
        } catch (exception) {
            response.status(500).json(exception);
        };
    };
    async getAll(request, response) {
        try {
            const posts = await PostService.getAll();
            response.status(200).json(posts);
        } catch (exception) {
            response.status(500).json(exception);
        }
    };
    async getOne(request, response) {
        try {
            const { id } = request.params;
            if (!id) {
                return response.status(400).json({
                    message: "Id не указан!"
                });
            };
            const post = await PostService.getOne(id);
            return response.status(200).json(post);
        } catch (exception) {
            return response.status(500).json(exception);
        }
    };
    async update(request, response) {
        try {
            const post = request.body;
            if (!post._id) {
                return response.status(400).json({
                    message: "Id не указан!"
                });
            }
            const updatedPost = await PostService.update(post);
            return response.status(200).json(updatedPost);
        } catch (exception) {
            return response.status(500).json(exception);
        }
    };
    async delete(request, response) {
        try {
            const { id } = request.params;
            if (!id) {
                response.status(400).json({
                    message: "Id не указан!"
                });
            }
            const post = await PostService.delete(id);
            return response.status(200).json(post);
        } catch (exception) {
            response.status(500).json(exception);
        }
    };
};

export default new PostController();
