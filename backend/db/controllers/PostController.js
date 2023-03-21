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
    async getAll(request, responce) {
        try {
            const posts = await Post.find();
            responce.json(posts);
        } catch (exception) {
            responce.status(500).json(exception);
        }
    };
    async getOne(request, responce) {
        try {
            const {id} = request.params;
            if (! id) {
                responce.status(400).json({
                    message: "Id не указан!"
                });
            }
            const post = await Post.findById(id);
            return responce.json(post);
        } catch (exception) {
            responce.status(500).json(exception);
        }
    };
    async update(request, responce) {
        try {
            const post =  request.body;
            if (!post._id) {
                responce.status(400).json({
                    message: "Id не указан!"
                });
            }
            const updatedPost = await Post.findByIdAndUpdate(
                post._id,
                post, 
                {new: true}
            )
            return responce.json(updatedPost);
        } catch (exception) {
            responce.status(500).json(exception);
        }
    };
    async delete(request, responce) {
        try {
            const { id } = request.params;
            if (!id) {
                responce.status(400).json({
                    message: "Id не указан!"
                });
            }
            const post = await Post.findByIdAndDelete(id);
            return responce.json(post);
        } catch (exception) {
            responce.status(500).json(exception);
        }
    };
};

export default new PostController();
