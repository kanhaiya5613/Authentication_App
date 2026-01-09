import {asyncHandler} from "../utils/AsyncHandler.js"
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import { uploadOnCloudinary, deleteFromCloudinary } from "../utils/Cloudinary.js"
import {ApiResponse} from "../utils/ApiResponse.js";
//import {trusted} from "mongoose";
import jwt from "jsonwebtoken";

// // generating refresh and access token 
// const generateAccessAndRefreshTokens = async (userId) => {
//     try {
//         const user = await User.findById(userId)
//         const accessToken = user.generateAccessToken()
//         const refreshToken = user.generateRefreshToken()

//         user.refreshToken = refreshToken
//         await user.save({ validateBeforeSave: false })

//         return { accessToken, refreshToken }

//     } catch (error) {
//         throw new ApiError(500, "something went wrong while generating refresh and access Token")
//     }
// }

const registerUser = asyncHandler(async(req,res)=>{
    // get the details 
    // validate 
    // check the email or username already exist
    // check the image and avatar available or not 
    // upload on cloudinary
    // create user object - entry in db
    // remove password and refresh token from response
    // check for user creation 
    // return resonse


    // getting user details
    const { fullName, email,userName,password} = req.body
    console.log("email:", email);


    // Validation
    if(
        [fullName,email,userName,password].some((field) => 
            field?.trim()==="")
    ){
        throw new ApiError(400,"All fields are Required");
    }

    // check ig user Exists 
    const existedUser = await User.findOne({
        $or: [{ userName }, {email}]
    })

    if(existedUser){
        throw new ApiError(409,"User with email or username already exist");
    }

    //  check for image and avatar

    const avatarLocalPath = req.files?.avatar?.[0]?.path;


    let coverImageLocalPath;
    if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
        coverImageLocalPath = req.files.coverImage?.[0]?.path
    }

    if(!avatarLocalPath){
        throw new ApiError(400,"Avatar file is Required");
    }
 
    // upload them to cloudinary
    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary(coverImageLocalPath)

    if (!avatar || !avatar.url) {
    throw new ApiError(400, "Avatar upload failed");
}

    // Create User Object - Create entry in db

    const user = await User.create({
        fullName,
        avatar:{
            public_id: avatar.public_id,
            url: avatar.url
        },
        coverImage: coverImage
        ?{
            public_id: coverImage.public_id,
            url: coverImage.url
        }
        : undefined,
        email,
        password,
        userName : userName.toLowerCase()
    })

    // remove password and refresh token field from response

    const createdUser = await User.findById(user.id).select(
        "-password -refreshToken"
    )
    if(!createdUser){
        throw new ApiError(500, "Something went wrong while registering the user")
    }

    // Return res
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

})

export {registerUser}