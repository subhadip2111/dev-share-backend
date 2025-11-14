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
        content:{
            type: String,
            required: true,
        },
        likes: {
            type: Number,
            default: 0,
        },
        image:{
            type: String,
            default: null,
            trim: true,
        },
        comments: {
            type: Number,
            default: 0,
        },
        date: {
            type: String,
           default:Date.now(),
        },
        tags: {
            type: [String],
            default: [],
        },
        status:{
            type: String,
            enum: ['draft', 'published'],
            default: 'published',
           
        }
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Post', postSchema);
