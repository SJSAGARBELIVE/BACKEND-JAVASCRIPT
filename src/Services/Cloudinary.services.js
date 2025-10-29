import { v2 as SagarBckdta } from "cloudinary";
import { response } from "express";
import fs from "fs";

SagarBckdta.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath)=>{
    try{
        if(!localFilePath) return null
        // file uploading on cloudniary
        SagarBckdta.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        //File has been uploaded
        console.log("file uploaded on cloudniary");
        response.url()
        return response;
    }catch(error){
        fs.unlinkSync(localFilePath)
        console.log("Cloudniary error:", error);
        return null;
        
    }
}
export {uploadOnCloudinary} 