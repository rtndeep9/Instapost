const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const postSchema = new mongoose.Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true },
    authorName: { type: String, required: true },
    avatar: { type: String, required: true },
    userId: { type: Schema.Types.ObjectId, ref: "User" },
    
});

module.exports = batch = mongoose.model("post", postSchema);