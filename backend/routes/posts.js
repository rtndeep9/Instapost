const router = require('express').Router();
const Post = require("../models/post.model");

router.get("/posts", async (req, res) => {
    try {
        const posts = await Post.find()
        res.json(posts)
    } catch (err) {
        res.status(500).json({
            message: err.message
        })
    }
})

module.exports = router;