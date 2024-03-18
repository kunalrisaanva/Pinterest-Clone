import { Strategy as LocalStrategy } from "passport-local";
import { User } from "../models/user.model.js";


const initializePassport = (passport) => {
    try {
        console.log("start")
        passport.use(new LocalStrategy(
            async function (username, password, done) {
                console.log(username , "user name data ")
                const user = await User.findOne({ email: username });
                if (user) {
                    const isMatch = await bcrypt.compare(password, user.password)
                    console.log(isMatch)
                    if(isMatch){
                     return  done(null, user)
                    }else{
                        let msg = "password does not match"
                     return   done(msg,false);
                    }
                } else {
                    // let button = '/register'
                    return done("this email not found plz try valid email", false)
                   
                }
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