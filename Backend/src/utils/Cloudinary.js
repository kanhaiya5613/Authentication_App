import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

// Cloudinary Configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    console.log("Uploading to Cloudinary:", localFilePath);

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto",
    });

    // Safe delete
    if (fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return response;
  } catch (error) {
    console.error("🔥 CLOUDINARY UPLOAD ERROR 🔥");
    console.error(error);

    if (localFilePath && fs.existsSync(localFilePath)) {
      fs.unlinkSync(localFilePath);
    }

    return null;
  }
};

// Delete From Cloudinary
const deleteFromCloudinary = async (publicId) => {
  try {
    if (!publicId) return null;

    const response = await cloudinary.uploader.destroy(publicId);
    return response;
  } catch (error) {
    console.error("Cloudinary Delete Error:", error);
    return null;
  }
};

export { uploadOnCloudinary, deleteFromCloudinary };
