const postModel = require("../models/post.model");


const createPost = async (postData) => {
  const post = await postModel.create(postData);
  return post;
};

const getPostById = async (postId) => {
  return await postModel.findById(postId).populate({path:'author'});
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
  return postModel.find(filter).populate({path:'author'}).sort({ createdAt: -1 });
}

module.exports = {
  createPost,
  getPostById,
  updatePostById,
  deletePostById,
  getPostByfilter
};