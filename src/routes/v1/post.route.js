const express = require('express');
const multer = require('multer');

const auth = require('../../middlewares/auth');
const { postController } = require('../../controllers');

const router = express.Router();


const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/', auth(),postController.createPost);
router.post('/uploads',upload.single('image'),postController.uploadImageandGetUrl);

router.get('/', auth(), postController.getPostsByFilter);
router.get('/:postId', auth(), postController.getPost);
router.patch('/:postId', auth(), postController.updatePost);
router.delete('/:postId', auth(), postController.deletePost);

module.exports = router;