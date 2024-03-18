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
      fileUpload
} from "../controllers/user.controller.js" 


import { isLoggedIn } from "../middleware/passport.midleware.js";
import { upload } from "../middleware/multer.middleware.js"
import passport from "passport";


const router = Router();


router.route("/").get(renderHomePage)
router.route("/register").get(renderRegisterPage)
router.route("/register").post(registerUser)

router.route("/login").post("hello",passport.authenticate("local",{
      successRedirect:"/profile",
      failureRedirect:"/"
}),function(){

})

router.route("/profile").get(isLoggedIn,renderProfilePage)


router.get('/logout', function (req, res){
      req.session.destroy(function (err) {
        res.redirect('/login'); 
      });
    });
  

router.route("/add").get(renderAddPage)
router.route("/show/posts").get(renderShowPage)
router.route("/feed").get(renderFeedPage)


router.route("/fileUpload").post(upload.single("image"),fileUpload)


router.route("/createpost").post(upload.single("postImage"),) // controller add 

export default router 

