const {
    getPosts,
    createPost,
    getPost,
    updatePost,
    deletePost
} = require('./controllers/PostController');

const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('A Posts CRUD api...')
});
router.get('/posts', getPosts);
router.get('/posts/:postID', getPost);
router.post('/posts', createPost);
router.put('/posts/:postID', updatePost);
router.delete('/posts/:postID', deletePost);

module.exports = router;