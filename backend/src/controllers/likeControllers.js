import mongoose from "mongoose";
import { Like } from "./../models/likeModel.js";

const getAllLikes = async (req, res) => {
  try {
    const blogId = req.params.id;
    const userId = req.user._id;

    if (!mongoose.Types.ObjectId.isValid(blogId)) {
      return res.status(400).json({ success: false, message: "Invalid blog id" });
    }
    const blogObjectId = new mongoose.Types.ObjectId(blogId);

    const userObjectId =userId && mongoose.Types.ObjectId.isValid(userId)? new mongoose.Types.ObjectId(userId): null;
    
    // Aggregation Pipeline - Here we will use aggregation pipeline to get the total likes and whether the user has liked the blog or not in a single query
    const pipeline = [
      {
        $match: { blogId: blogObjectId, like: true },
      },
      {
        $group: {
          _id: "$blogId",
          totalLikes: { $sum: 1 },
          likedUsers: { $addToSet: "$userId" },
        },
      },
      {
        $project: {
          _id: 0,
          totalLikes: 1,
          userLiked: userObjectId
            ? { $in: [userObjectId, "$likedUsers"] }
            : false,
        },
      },
    ];

    const result = await Like.aggregate(pipeline);
    if (result.length === 0) {
      return res
        .status(200)
        .json({ success: true, totalLikes: 0, userLiked: false });
    }
    const { totalLikes, userLiked } = result[0];
    return res.status(200).json({ success: true, totalLikes, userLiked });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const toggleLike = async (req, res) => {
  try {
    // const { like } = req.body;
    
    const userId = req.user._id;
    const blogId = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(blogId) || !mongoose.Types.ObjectId.isValid(userId)) {
      return res.status(400).json({ success: false, message: "Invalid blog id or user id" });
    }

    const blogObjectId = new mongoose.Types.ObjectId(blogId);
    const userObjectId =userId && mongoose.Types.ObjectId.isValid(userId)? new mongoose.Types.ObjectId(userId): null;

    // Approach 1 (Toggle like) - Here we will delete the like document if already liked and create a new like document if not liked
    const existingLike = await Like.findOne({ blogId: blogObjectId, userId: userObjectId });
    if(existingLike){
        await Like.deleteOne({ blogId: blogObjectId, userId: userObjectId });
    } else {
        const newLike = new Like({
            blogId: blogObjectId,
            userId: userObjectId,
            like: true
        });
        await newLike.save();
    }

    // Approach 2 - Upsert - (Toggle like) - Here we will update the like document if already liked and create a new like document if not liked using upsert option of findOneAndUpdate method
    // await Like.findOneAndUpdate(
    //   { blogId, userId },
    //   {
    //     $set: { like, updatedAt: new Date() },
    //     $setOnInsert: { createdAt: new Date() },
    //   },
    //   { upsert: true },
    // );

    // (Aggregation Pipeline) (reading the updated results) - Here we will use aggregation pipeline to get the total likes and whether the user has liked the blog or not in a single query
    const pipeline = [
      {
        $match: { blogId: blogObjectId, like: true }, // Match only the documents where like is true for the given blogId
      },
      {
        $group: { // Group by blogId to get total likes and the list of users who liked the blog
          _id: "$blogId",
          totalLikes: { $sum: 1 },
          likedUsers: { $addToSet: "$userId" }, // Create an array of userIds who liked the blog
        },
      },
      {
        $project: {
          _id: 0,
          totalLikes: 1,
          userLiked: { $in: [userObjectId, "$likedUsers"] },
        },
      },
    ];

    const result = await Like.aggregate(pipeline);
    if (result.length === 0) {
      return res.status(200).json({ success: true, totalLikes: 0, userLiked: false });
    }

    const { totalLikes, userLiked } = result[0];
    return res.status(200).json({ success: true, totalLikes, userLiked });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

export { getAllLikes, toggleLike };
