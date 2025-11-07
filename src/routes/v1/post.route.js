const express = require('express');

const auth = require('../../middlewares/auth');
const { postController } = require('../../controllers');

const router = express.Router();




router.post('/', auth(),postController.createPost);
router.get('/', auth(), postController.getPostsByFilter);
router.get('/:postId', auth(), postController.getPost);
router.patch('/:postId', auth(), postController.updatePost);
router.delete('/:postId', auth(), postController.deletePost);

module.exports = router;