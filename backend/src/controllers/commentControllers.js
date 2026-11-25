
import mongoose from "mongoose";
import { Comment } from "./../models/commentModel.js";

const addComment = async (req, res) => {
    try {
        const { comment } = req.body;
        const { blogId } = req.params;
        const userId = req.user._id;

        if(!mongoose.Types.ObjectId.isValid(blogId)){
            return res.status(400).json({success: false, message: "Invalid blog id"});
        }
        if(!comment || comment.trim() === ""){
            return res.status(400).json({success: false, message: "Comment cannot be empty"});
        }

        const newComment = await Comment.findOneAndUpdate(
            {blogId, userId},
            {
                $set: { comment, updatedAt: new Date() },
                $setOnInsert: { createdAt: new Date() }
            },
            { upsert: true, new: true }
        )
        if(!newComment){
            return res.status(400).json({success: false, message: "Failed to add comment"});
        }
        return res.status(200).json({success: true, message: "Comment addedd", comment: newComment});
    } catch (error) {
        res.status(500).json({success:false, message: error.message});
    }
}

const updateComment = async (req, res) => {
    try {
        const { comment } = req.body;
        const { blogId } = req.params;
        const userId = req.user._id;

        const updatedComment = await Comment.findOneAndUpdate(
            {blogId, userId},
            {
                $set: { comment, updatedAt: new Date() }
            },
            { new: true }
        )
        if(!updatedComment){
            return res.status(400).json({success: false, message: "Failed to update comment"});
        }
        return res.status(200).json({success: true, message: "Comment updated", comment: updatedComment});
    } catch (error) {
        res.status(500).json({success:false, message: error.message});
    }
}

const deleteComment = async (req, res) => {
    try {
        
    } catch (error) {
        res.status(500).json({success:false, message: error.message});
    }
}

const getAllComments = async (req, res) => {
    try {
        const { blogId } = req.params;

        if(!mongoose.Types.ObjectId.isValid(blogId)){
            return res.status(400).json({success: false, message: "Invalid blog id"});
        }
        const blogObjectId = new mongoose.Types.ObjectId(blogId);

        const pipeline = [
            {
                $match: { 
                    blogId: blogObjectId,
                    comment: { $exist: true, $ne: "" }
                }
            },
            {
                $lookup: {
                    from: "users",
                    localField: "userId",
                    foreignField: "_id",
                    as: "user"
                }
            },
            {
                $project: {
                    _id: 1,
                    comment: 1,
                    createdAt: 1,
                    user: {
                        _id: { $arrayElemAt: ["$user._id", 0] },
                        name: { $arrayElemAt: ["$user.name", 0] }
                    }
                }
            },
            {
                $group: {
                    _id: null,
                    comments: { $push: "$$ROOT" },
                    totalCount: { $sum: 1 }
                }
            },
            {
                $project: {
                    _id: 0,
                    comments: 1,
                    totalCount: 1
                }
            }
        ]

        const result = await Comment.aggregate(pipeline);
        
        if(result.length < 0){
            return res.status(200).json({success: true, comments: [], totalCount: 0});
        }

        const { comments, totalCount } = result[0];

        return res.status(200).json({success: true, comments, totalCount});
    } catch (error) {
        res.status(500).json({success:false, message: error.message});
    }
}

export {addComment, updateComment, deleteComment, getAllComments};