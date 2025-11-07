const postModel = require("../models/post.model");


const createPost = async (postData) => {
  const post = await postModel.create(postData);
  return post;
};

const getPostById = async (postId) => {
  return postModel.findById(postId);
};

const updatePostById = async (postId, updateData) => {
  const post = await getPostById(postId);
  if (!post) {
    throw new Error('Post not found');
  }
  Object.assign(post, updateData);
  await post.save();
  return post;
};

const deletePostById = async (postId) => {
  const post = await getPostById(postId);
  if (!post) {
    throw new Error('Post not found');
  }
  await post.remove();
  return post;
};
const getPostByfilter = async (filter) => {
  return postModel.find(filter);
}

module.exports = {
  createPost,
  getPostById,
  updatePostById,
  deletePostById,
  getPostByfilter
};