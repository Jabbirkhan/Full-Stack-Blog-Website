import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    blogId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true
    },
    like:{
        type: Boolean,
        default: false
    }
},{timestamps: true});

export const Like = mongoose.models.Like || mongoose.model('Like', likeSchema);