import mongoose from "mongoose";

const principleSchema = new mongoose.Schema({
    heading:{
        type:String,
        required:true,
        unique:true,
        index:true,
    },
    description:{
        type:String,
        required:true,
    }
},{timestamps:true});

export const Principle = mongoose.models.Principle || mongoose.model('Principle', principleSchema);