import { Principle } from "../models/principleModel.js";

const addPrinciple = async (req,res) => {
    try {
        const {heading, description} = req.body;
        if(!heading || !description){
            return res.status(400).json({success:false, message:"All fields are required."});
        }
        const headingExist = await Principle.findOne({heading});
        if(headingExist){
            return res.status(400).json({success:false, message:"Heading already exist"});
        }
        const newPrinciple = await Principle.create({
            heading,
            description
        });
        if(!newPrinciple){
            return res.status(400).json({success:false, message:"Principle uploading failed!"});
        }
        return res.status(200).json({success:true, message:"Principle uploaded successfully"});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

const allPrinciples = async (req,res) => {
    try {
        const principles = await Principle.find();
        if(!principles){
            return res.status(400).json({success:false, message:"Principles are not found."});
        }
        return res.status(200).json({success:true, principles});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

const updatePrinciple = async (req,res) => {
    try {
        const {heading, description} = req.body;
        const { id } = req.params;
        
        if(!heading || !description){
            return res.status(400).json({success:false, message:"All fields are required."});
        }
        const principle = await Principle.findById(id);
        if(!principle){
            return res.status(400).json({success:false, message:"Principle not exist"});
        }

        if(principle) principle.heading = heading;
        if(principle) principle.description = description;

        await principle.save();
        return res.status(200).json({success:true, message:"Principle is updated successfully"});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

export {addPrinciple, allPrinciples, updatePrinciple}