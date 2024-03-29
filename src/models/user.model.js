import mongoose from "mongoose";
import bcrypt from "bcrypt"
import plm from "passport-local-mongoose"

const userSchema = new mongoose.Schema(
    {
        username:{
            type:String,
            required:[true,"username is Required"]
        },
        
        fullname:{
            type:String,
            required:[true,"email is Required"]
        },

        email:{
            type:String,
            required:[true,"email is Required"]
        },

        password:{
            type:String,
            required:[true,"password is Required"]
        },

        profileImage:{

            publicId:{
                type:String
            },

            url:{
                type:String
            }
        },

        contact:{
            type:String,
            rerequired:[true,"contact is Required"]
            
        },

        boards:{
            type:[],
            default:[]
        },

        posts:[
            {
                type:mongoose.Schema.Types.ObjectId,
                ref:"Post"
            }
        ]

    }
    
,{timestamps:true})


// userSchema.plugin(plm)

userSchema.pre("save",async function(next){
    if (!this.isModified("password")) return next();
   this.password = await bcrypt.hash(this.password, 10);
})


userSchema.methods.isPasswordCorrect = async function(passwword){
    return await bcrypt.compare(passwword,this.password);
}




export const User = mongoose.model("User",userSchema)