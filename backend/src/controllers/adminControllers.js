import validator from "validator";
import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import bcrypt from "bcrypt";
import uploadOnCloundinary from "./../utils/cloundinary.js";
import { Blog } from "../models/blogModel.js";
import { v2 as cloudinary } from "cloudinary";
import { Like } from "../models/likeModel.js";
import { Admin } from "../models/adminModel.js";
import transporter from "../config/nodeMailer.js";
// import client from "../config/redisClient.js";

const createToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: "1d"});
}

const adminLogin = async (req, res) =>{
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).json({success: false, message: "Email and password are required"});
        }
        if(!validator.isEmail(email)){
            return res.status(400).json({success: false, message: "Invalid email format"});
        }
        const admin = await Admin.findOne({email});
        if(!admin){
            return res.status(400).json({success: false, message: "Admin not exist!"});
        }
        const isMatch = await bcrypt.compare(password, admin.password);
        if(!isMatch){
            return res.status(401).json({success:false, message:"Password is incorrect"});
        }
        const blog2AdminToken = createToken(admin._id);

        const options = {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production", // Set secure flag in production
            sameSite: "strict", // Prevent CSRF attacks
            maxAge: 24 * 60 * 60 * 1000 // 1 day
        }

        return res.status(200)
        .cookie("blog2AdminToken", blog2AdminToken, options)
        .json({success: true, message: "Admin logged in successfully"});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

const adminRegister = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }
    if(!validator.isEmail(email)) {
      return res.status(400).json({ success: false, message: "Invalid email format" });
    }

    // Here we match the received email with ADMN_EMAIL
    if(email !== process.env.ADMIN_EMAIL){
      return res.status(400).json({ success: false, message: "Email not matched with Admin Email!" });
    }

    const existAdmin = await Admin.findOne({email});

      // Here we check if length of educator is more than one
    const admins = await Admin.find();
    if (existAdmin && admins.length > 0) {
      return res.status(400).json({ success: false, message: "Admin already registered, please login!" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const admin = await Admin.create({
      name,
      email,
      password: hashedPassword,
    });
    if (!admin) {
      return res.status(500).json({ success: false, message: "Error while creating admin" });
    }
    return res.status(201).json({ success: true, message: "Admin created successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

const addNewBlog = async (req, res) => {
    try {
        const { title, description, latest, authorName, authorProfession, linkedInUrl, youtubeUrl, category } = req.body;
        if(!title || !description || !authorName || !authorProfession || !linkedInUrl || !youtubeUrl || !category){
            return res.status(400).json({success: false, message: "All fields are required"});
        }

        const imagePath = req.file?.path;

        if(!imagePath){
            return res.status(400).json({success: false, message: "Image is required"});
        }
        const blogImage = await uploadOnCloundinary(imagePath);
        if(!blogImage){
            return res.status(500).json({success: false, message: "Image upload failed"});
        }

        const newBlog = await Blog.create({
            title,
            description,
            category,
            image: blogImage.secure_url,
            latest: latest === "true", // “If the string is exactly "true", store true, otherwise store false.”
            authorName,
            authorProfession,
            linkedInUrl,
            youtubeUrl
        })

        if(!newBlog){
            return res.status(500).json({success: false, message: "Blog creation failed"});
        }

        return res.status(201).json({success: true, message: "Blog added successfully", blog: newBlog});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

const getAllBlogs = async (req, res) => {
    // const cacheKey = "all_blogs";
    try {
        let page = Number(req.query.page) || 1;
        let limit = Number(req.query.limit) || 1;
        const category = req.query.category;
        const search = req.query.search;

        if (page < 1) page = 1;
        if (limit < 1) limit = 1;

        const skip = (page - 1) * limit;
        // if(client.isOpen){
        //     const cacheBlogs = await client.get(cacheKey);
        //     if(cacheBlogs){
        //         const blogs = JSON.parse(cacheBlogs);
        //         return res.status(200).json({success: true, blogs, source: "Cache"});
        //     }
        // }

        const filter = {};

        if (category) {
            filter.category = category;
        }

        if (search) {
            filter.title = { $regex: search, $options: 'i' }
        }

        const blogs = await Blog.find(filter).sort({ createdAt: -1 }).skip(skip).limit(limit);
        const newBlogs = await Blog.find().sort({ createdAt: -1 }).limit(10);
        const categories = await Blog.distinct("category");
        const totalBlogs = await Blog.countDocuments(filter);
        const totalPages = Math.ceil(totalBlogs / limit);

        // if(client.isOpen){
        //     await client.set(cacheKey, JSON.stringify(blogs), { EX: 86400 }); // Cache expires in 24 hours (86400 seconds)
        // }
        return res.status(200).json({success: true, blogs, newBlogs, totalBlogs, categories, totalPages, currentPage: page, source: "Database"});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
} 

const updateBlog = async (req, res) => {
    try {
        const { id } = req.params;
        const { title, description, latest, authorName, authorProfession, linkedInUrl, youtubeUrl, category } = req.body;
        
        if(!title || !description || !authorName || !authorProfession || !linkedInUrl || !youtubeUrl || !category){
            return res.status(400).json({success: false, message: "All fields are required"});
        }

        const blog = await Blog.findById(id);
        if(!blog){
            return res.status(404).json({success: false, message: "Blog not found"});
        }

        const imagePath = req.file ? req.file?.path : null;

        // if we did not have new image then we saved the old image
        let finalImage = blog.image;

        // Deleting the old image from cloudinary if we have a new image to update
        if(imagePath){
            const publicId = await blog.image.split("/").pop().split(".")[0];
            await cloudinary.uploader.destroy(publicId);

            const uploadImage = await uploadOnCloundinary(imagePath);
            finalImage = uploadImage.secure_url;
        };

        if(title) blog.title = title;
        if(description) blog.description = description;
        // if(latest) blog.latest = latest === "true" ? true : false; // Simple way to convert the string "true" or "false" to boolean true or false
        if(latest) blog.latest = latest === "true"; // Professional way to convert the string "true" or "false" to boolean true or false
        if(category) blog.category = category;
        if(authorName) blog.authorName = authorName;
        if(authorProfession) blog.authorProfession = authorProfession;
        if(linkedInUrl) blog.linkedInUrl = linkedInUrl;
        if(youtubeUrl) blog.youtubeUrl = youtubeUrl;
        blog.image = finalImage;

        const blogUpdated = await blog.save();
        if(!blogUpdated){
            return res.status(400).json({success:false, message:"Blog is not updated!"});
        }

        // Approach 1 - Here we update the blog without image update
        // const updatedBlog = await Blog.findByIdAndUpdate(id, {
        //     title,
        //     description,
        //     category,
        //     latest,
        //     authorName,
        //     authorProfession,
        //     linkedInUrl,
        //     youtubeUrl
        // }, { new: true });

        // if (!updatedBlog) {
        //     return res.status(404).json({ success: false, message: "Blog not found" });
        // }

        return res.status(200).json({ success: true, message: "Blog updated successfully", blog: blogUpdated});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        if(!mongoose.Types.ObjectId.isValid(id)){
            return res.status(400).json({success:false, message:"Invalid blog Id"});
        }

        const blog = await Blog.findById(id);
        if(!blog){
            return res.status(404).json({success: false, message: "Blog not found"});
        }
        // Deleting the blog image from cloudinary before deleting the blog
        const publicId = blog.image.split("/").pop().split(".")[0];
        await cloudinary.uploader.destroy(publicId);

        // Deleting blog likes also
        await Like.deleteMany({blogId: new mongoose.Types.ObjectId(id)});

        await Blog.findByIdAndDelete(id);
        return res.status(200).json({success: true, message: "Blog and its likes deleted successfully"});
    } catch (error) {
        res.status(500).json({success: false, message: error.message});
    }
}

const verifyAdmin = (req, res) => {
    try {
        return res.status(200).json({success: true, message: "Admin is authenticated"});
    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
}

const logoutAdmin = (req, res) => {
    try {
        res.clearCookie("blog2AdminToken", {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "strict"
        });
        return res.status(200).json({success: true, message: "Admin logged out successfully"});
    } catch (error) {
        return res.status(500).json({success: false, message: error.message});
    }
}

// Send OTP to reset password
const sendResetPasswordOtp = async (req, res) => {
  try {
    const { email } = req.body;
    const admin = await Admin.findOne({ email });
    if (!admin) {
      return res.status(404).json({ success: false, message: "admin not found!" });
    }
    
    const otp = Math.floor(100000 + Math.random() * 900000).toString(); // Generate a random 6-digit OTP

    admin.verifyResetOtp = otp;
    admin.resetOtpExpiresAt = Date.now() + 5 * 60 * 1000; // 5 minutes
    await admin.save();

    const emailOption = {
      from: process.env.SENDER_EMAIL,
      to: admin.email,
      subject: "Reset password OTP from LMS",
      text: `Your OTP for reset password is this ${otp}`,
    };

    await transporter.sendMail(emailOption);

    return res.status(200).json({ success: true, message: "OTP sent successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// Verify OTP to reset password
const verifyResetPasswordOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;
    if (!email || !otp) {
      return res.status(400).json({ success: false, message: "OTP is required" });
    }
    const admin = await Admin.findOne({email});
    if (!admin) {
      return res.status(404).json({ success: false, message: "admin not found" });
    }
    if (!admin.resetOtpExpiresAt || Date.now() > admin.resetOtpExpiresAt.getTime()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }
    if(admin.verifyResetOtp === '' || admin.verifyResetOtp !== otp){
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
    
    return res.status(200).json({ success: true, message: "OTP verified successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

// admin can reset password
const resetPassword = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;
    if (!newPassword || !email || !otp) {
      return res.status(400).json({ success: false, message: "Email, Otp and password are required!" });
    }
    const admin = await Admin.findOne({email});
    if (!admin) {
      return res.status(404).json({ success: false, message: "admin not found" });
    }

    if (!admin.resetOtpExpiresAt || Date.now() > admin.resetOtpExpiresAt.getTime()) {
      return res.status(400).json({ success: false, message: "OTP expired" });
    }
    if(admin.verifyResetOtp === '' || admin.verifyResetOtp !== otp){
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(newPassword, salt);
    admin.password = hashedPassword;

    admin.verifyResetOtp = "";
    admin.resetOtpExpiresAt = null;

    await admin.save();
    
    return res.status(200).json({ success: true, message: "Password updated successfully" });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
}

export {
    adminLogin, adminRegister, addNewBlog, getAllBlogs, updateBlog, deleteBlog, verifyAdmin, logoutAdmin,
    sendResetPasswordOtp, verifyResetPasswordOtp, resetPassword,
};
