import Post from './../models/Post.js';

class PostController {
    async create(request, response) {
        try {
            const { author, title, content, picture } = request.body;
            const post = await Post.create({
                author,
                title,
                content,
                picture
            });
            response.status(200).json(post);
        } catch (exception) {
            response.status(500).json(exception);
        };
    };
    async getAll(request, response) {
        try {
            const posts = await Post.find();
            response.json(posts);
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
            }
            const post = await Post.findById(id);
            return response.status(200).json(post);
        } catch (exception) {
            return response.status(500).json(exception);
        }
    };
    async update(request, response) {
        try {
            console.log(request.body);
            const post = request.body;
            if (!post._id) {
                return response.status(400).json({
                    message: "Id не указан!"
                });
            }
            const updatedPost = await Post.findByIdAndUpdate(
                post._id,
                post,
                { new: true }
            )
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
            const post = await Post.findByIdAndDelete(id);
            return response.json(post);
        } catch (exception) {
            response.status(500).json(exception);
        }
    };
};

export default new PostController();
