import mongoose from "mongoose";

const informationSchema = new mongoose.Schema({
    heading:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    mission:{
        type:String,
        required:true,
    },
    vission:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
    },
    phone:{
        type:Number,
        required:true,
    },
    officeTiming:{
        type:String,
        required:true,
    },
    officeAddress:{
        type:String,
        required:true,
    },
    poboxAddress:{
        type:String,
        required:true,
    },
},{timestamps:true});

export const Information = mongoose.models.Information || mongoose.model('Information', informationSchema);