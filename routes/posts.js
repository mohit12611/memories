import express from 'express';
import { getPosts , createPosts , updatePost, deletePost, likePost} from '../controllers/posts.js'

const router = express.Router();


// http://localhost:5000/posts/         --posts is from index.js postRoutes

router.get('/', getPosts);
router.post('/', createPosts);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost)
router.patch('/:id/likePost', likePost);

export default router;