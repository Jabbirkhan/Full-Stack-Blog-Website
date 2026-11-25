import mongoose from "mongoose";

const linksSchema = new mongoose.Schema({
    youtubeUrl:{
        type: String,
        required: true
    },
    instagramUrl:{
        type: String,
        required: true
    },
    linkedInUrl:{
        type: String,
        required: true
    },
},{timestamps:true});

export const Links = mongoose.models.Links || mongoose.model('Links', linksSchema);