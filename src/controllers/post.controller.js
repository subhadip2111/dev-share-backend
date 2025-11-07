const { postService } = require("../services");

const createPost = async (req, res) => {
    const post = await postService.createPost(req.body);
    return res.status(201).send(post);
};

const getPost = async (req, res) => {
    const post = await postService.getPostById(req.params.postId);
    if (!post) {
        return res.status(404).send({ message: 'Post not found' });
    }
    res.send(post);
};

const updatePost = async (req, res) => {
    const post = await postService.updatePostById(req.params.postId, req.body);
    return res.send(post);
};

const deletePost = async (req, res) => {
    await postService.deletePostById(req.params.postId);
    res.status(204).send();
};

const getPostsByFilter = async (req, res) => {
    const filter = req.query || {};
    const posts = await postService.getPostByfilter(filter);
    return res.send(posts);
};

module.exports = {
    createPost,
    getPost,
    updatePost,
    deletePost,
    getPostsByFilter,
};