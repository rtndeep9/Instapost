const router = require("express").Router();
const Post = require("../models/post.model");
const upload = require("../middleware/imageUpload")

router.post("/create-post", upload.single('avatar'), async (req, res) => {
    try {
        const url = req.protocol + "://" + req.get("host");
        const newPost = new Post({
            ...req.body,
            avatar: req.file ? url + '/public/' + req.file.filename: url + "/public/default.jpg"
        });
        await newPost.save();
        res.json({ message: "Post Created" })
    } catch (err) {
        res.status(500).json({
            message: err.message,
        });
    }
});

module.exports = router;