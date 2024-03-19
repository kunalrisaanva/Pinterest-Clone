import { Router } from "express";
import { 
      renderHomePage,
      renderRegisterPage,
      renderProfilePage,
      renderAddPage,
      renderShowPage,
      renderFeedPage
 } from "../controllers/renderPage.controller.js";

import {
      registerUser,
      fileUpload,
      createPost
} from "../controllers/user.controller.js" 


import { isLoggedIn } from "../middleware/passport.midleware.js";
import { upload } from "../middleware/multer.middleware.js"
import {Strategy as LocalStrategy } from "passport-local"
import passport from "passport";
import { User } from "../models/user.model.js";


const router = Router();


router.route("/").get(renderHomePage)
router.route("/register").get(renderRegisterPage)
router.route("/register").post(registerUser)


router.post("/login", passport.authenticate('local', { successRedirect: '/profile',failureRedirect:"/"}));


router.get('/logout', function (req, res){
      req.session.destroy(function (err) {
        res.redirect('/'); 
      });
    });
  

router.route("/profile").get(isLoggedIn,renderProfilePage)

router.route("/add").get(isLoggedIn,renderAddPage)
router.route("/show/posts").get(isLoggedIn,renderShowPage)
router.route("/feed").get(isLoggedIn,renderFeedPage)


router.route("/fileUpload").post(isLoggedIn,upload.single("image"),fileUpload)


router.route("/createpost").post(isLoggedIn,upload.single("postImage"),createPost) // controller add 


export default router 

