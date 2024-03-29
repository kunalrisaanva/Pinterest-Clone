import { asyncHandler } from "../utils/asynchHandler.js";
import {ApiError} from "../utils/ApiError.js"
import {ApiResponse} from "../utils/ApiResponse.js"
import { User } from "../models/user.model.js";
import { uploadOnCloudinary } from "../utils/cloudinaryUpload.js";
import { Post } from "../models/post.model.js";



const registerUser = asyncHandler( async(req,res) => {
    const { username,email,contact,password ,fullname} = req.body;

    if (
        [username, email, contact, password , fullname].some(
            (fields) => fields?.trim() === "" || undefined
        )
    ) {
        throw new ApiError(400, "all fields are required");
    };


    await User.create({
        username,
        fullname,
        email,
        contact,
        password
    })

    console.log("user created successfully ")

    res.redirect("/")

})


const fileUpload = asyncHandler(async (req,res) => {

   
    const user = await User.findOne({username:req.user?.username});

   
    let response

    if(req?.file){
        response = await uploadOnCloudinary(req.file.path)
    }


    user.profileImage.publicId = response.public_id
    user.profileImage.url = response.url

    user.save({validateBeforeSave:false});


    res.redirect("/profile");

})


const createPost  = asyncHandler( async(req,res) => {

    const {title ,descriptions } = req.body
    const user = await User.findOne({username:req.user?.username});
    // console.log(user);

    console.log(res.file)
    console.log(req.file?.postImage)

    let response

    if(req?.file){
        response = await uploadOnCloudinary(req.file.path)
    }


    const createdPost = await Post.create({
            user:user._id,
            title,
            descriptions,
            // image.url: response?.url || ""  // cloudinary url 
            "image.publicId":response?.public_id || "",
            "image.url": response?.url || ""
        });


   
    user.posts.push(createdPost._id);

    await user.save({validateBeforeSave:false});

    res.redirect("/profile")

})





export {
    registerUser,
    fileUpload,
    createPost
}