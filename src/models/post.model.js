const mongoose = require('mongoose');
const postSchema = mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            trim: true,
        },
        excerpt: {
            type: String,
            required: true,
            trim: true,
        },
        author: {
           type:mongoose.Schema.Types.ObjectId,
           ref:'User',
           required:true,
        },
        category: {
            type: String,
            required: true,
            trim: true,
        },
        readTime: {
            type: String,
            required: true,
            trim: true,
        },
        likes: {
            type: Number,
            default: 0,
        },
        comments: {
            type: Number,
            default: 0,
        },
        date: {
            type: String,
            required: true,
            trim: true,
        },
        tags: {
            type: [String],
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Post', postSchema);
