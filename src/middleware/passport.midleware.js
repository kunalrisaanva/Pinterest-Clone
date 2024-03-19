// var LocalStrategy = require("passport-local").Strategy
import {Strategy as LocalStrategy } from "passport-local"
// const passport = require("passport");
import { User } from "../models/user.model.js"
import bcrypt from "bcrypt"



const initializePassport = (passport) => {
    try {
        passport.use(new LocalStrategy(
            async function (username, password, done) {
                // console.log(username , "user name data ")
                const user = await User.findOne({ email: username });
                if(!user) return done(null,false);
                
                const isMatch = user.isPasswordCorrect(password)
                if(!isMatch) return done(null,false);
            
                return done(null , user)
                
            }
        ));

        passport.serializeUser((user , done) =>{
            return done(null , user._id)
        })


        passport.deserializeUser(async (id , done) =>{
           const user = await User.findById(id)
           return done(null , user)
        })



    } catch (error) {
        console.log(error.message)
    }
}


const isLoggedIn = (req,res,next)=>{
  if(req.user) return next()
  res.redirect("/")
}



export {
    initializePassport,
    isLoggedIn
}
