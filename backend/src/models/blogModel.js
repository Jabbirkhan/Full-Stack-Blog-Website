import mongoose from "mongoose";

const blogSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true,
        index: true
    },
    description:{
        type: String,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    latest:{
        type: Boolean,
        default: false
    },
    category:{
        type: String,
        required: true
    },
    authorName:{
        type: String,
        required: true
    },
    authorProfession:{
        type: String,
        required: true
    },
    linkedInUrl:{
        type: String,
        required: true
    },
    youtubeUrl:{
        type: String,
        required: true
    }
},{timestamps: true});

export const Blog = mongoose.models.Blog || mongoose.model('Blog', blogSchema);