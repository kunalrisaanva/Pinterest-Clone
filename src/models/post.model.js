import mongoose from "mongoose";



const postSchema = new mongoose.Schema(
    {
        user:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"User"
        },

        title:{
            type:String,
            required:[true,"email is Required"]
        },

        descriptions:{
            type:String,
            required:[true,"password is Required"]
        },

        image:{
           publicId:{
            type:String
           },
           url:{
            type:String,
            rerequired:[true,"UserImage is Required"]
           }
        },

     

    }
    
,{timestamps:true})



export const Post = mongoose.model("Post",postSchema)