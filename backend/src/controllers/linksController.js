import { Links } from "../models/linksModel.js";


const addlinks = async (req, res) => {
    try {
        const { youtubeUrl, instagramUrl, linkedInUrl } = req.body;
        if(!youtubeUrl || !instagramUrl || !linkedInUrl){
            return res.status(400).json({success:false, message:"Urls are missing"});
        }
        const linksExisted = await Links.find();
        if(linksExisted.length >= 1){
            return res.status(400).json({success:false, message:"Links are existed"});
        }
        const links = await Links.create({
            youtubeUrl,
            instagramUrl,
            linkedInUrl
        });
        if(!links){
            return res.status(400).json({success:false, message:"Linkes are not created!"})
        }
        return res.status(200).json({success:true, message:"Links are created successfully"});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

const alllinks = async (req, res) => {
    try {
        const links = await Links.find();
        if(!links){
            return res.status(400).json({success:false, message:"Links are found!"});
        }
        return res.status(200).json({success:true, links});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

const updatelinks = async (req, res) => {
    try {
        const { youtubeUrl, instagramUrl, linkedInUrl } = req.body;
        const { id } = req.params;

        if(!youtubeUrl || !instagramUrl || !linkedInUrl){
            return res.status(400).json({success:false, message:"Urls are missing"});
        }
        const linksExisted = await Links.findById(id);
        if(!linksExisted){
            return res.status(400).json({success:false, message:"Links are not found!"});
        }

        if(youtubeUrl) linksExisted.youtubeUrl = youtubeUrl;
        if(instagramUrl) linksExisted.instagramUrl = instagramUrl;
        if(linkedInUrl) linksExisted.linkedInUrl = linkedInUrl;  

        await linksExisted.save();
        return res.status(200).json({success:true, message:"Links are updated successfully."});
    } catch (error) {
        return res.status(500).json({success:false, message:error.message});
    }
}

export {addlinks, alllinks, updatelinks}

