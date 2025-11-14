const { postService } = require("../services");
const { uploadImage } = require("../utils/uploads");

const createPost = async (req, res) => {
    const avrageReadTime = (req.body.content.length / 200) * 60; // assuming average reading speed of 200 words per minute
    console.log("req.user",req.user);
    req.userId = req.user._id;
    console.log(req.userId);
    req.body.author = req.userId;
    req.body.readTime=Math.ceil(avrageReadTime);
    const post = await postService.createPost(req.body);
    return res.status(201).send({
        data: post,
        message: 'Post created successfully',
    });
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
const uploadImageandGetUrl = async (req,res) => {
    const uploadResult = await uploadImage(req.file.path);
    return uploadResult.secure_url;
}

const getPostsByFilter = async (req, res) => {
    const filter = req.query || {};
    const posts = await postService.getPostByfilter(filter);
    return  res.status(200).send({
        data: posts,
        message: 'Posts fetched successfully',
    });
};

module.exports = {
    createPost,
    getPost,
    updatePost,
    deletePost,
    getPostsByFilter,
    uploadImageandGetUrl
};